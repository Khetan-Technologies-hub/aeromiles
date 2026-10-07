"use client";

import Link from "next/link";
import { Suspense, useCallback, useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FormField, FormSelect } from "@/components/FormField";
import { useToast } from "@/components/Toast";

const AUDIENCE_OPTIONS = [
  { value: "education", label: "Schools & Colleges (STEM Labs)" },
  { value: "defence", label: "Defence & Government (UAV Capability)" },
  { value: "hobbyist", label: "Aviation Hobbyist (RC Aircraft)" },
  { value: "other", label: "Other / Partnership" },
];

const PRODUCT_OPTIONS = [
  { value: "", label: "Select a product (optional)" },
  { value: "aerowing-x1", label: "AeroWing X1 — Trainer RC Plane" },
  { value: "sentinel-vtol", label: "Sentinel VTOL — Tactical UAV" },
  { value: "vector-quad", label: "Vector Quad — FPV Drone" },
];

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

function ProductQueryPrefill({
  onProductChange,
}: {
  onProductChange: (product: string) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const productQuery = searchParams.get("product");
    if (productQuery && PRODUCT_OPTIONS.some((option) => option.value === productQuery)) {
      onProductChange(productQuery);
    }
  }, [onProductChange, searchParams]);

  return null;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    audience: "",
    product: "",
    message: "",
  });
  const prefillProduct = useCallback((product: string) => {
    setFormData((prev) => ({ ...prev, product }));
  }, []);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error: toastError } = useToast();

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.audience) newErrors.audience = "Please select your audience";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formBody = new FormData();
    formBody.append("access_key", WEB3FORMS_ACCESS_KEY);
    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("organization", formData.organization);
    formBody.append("audience", formData.audience);
    formBody.append("product", formData.product || "Not specified");
    formBody.append("message", formData.message);
    formBody.append("subject", `New inquiry from ${formData.name} (${formData.audience})`);
    formBody.append("from_name", "Aeromiles Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formBody,
      });

      const result = await response.json();

      if (result.success) {
        success("Inquiry sent!", "We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", organization: "", audience: "", product: "", message: "" });
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch {
      toastError("Submission failed", "Please try again or email us directly at contact@aeromiles.in");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Suspense fallback={null}>
        <ProductQueryPrefill onProductChange={prefillProduct} />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange("name")}
          placeholder="Enter your full name"
          required
          error={errors.name}
        />
        <FormField
          label="Email address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange("email")}
          placeholder="Business email address"
          required
          error={errors.email}
        />
      </div>

      <FormField
        label="Organization"
        type="text"
        name="organization"
        value={formData.organization}
        onChange={handleChange("organization")}
        placeholder="Company, school, or agency"
      />

      <FormSelect
        label="I'm inquiring as"
        name="audience"
        value={formData.audience}
        onChange={handleChange("audience")}
        options={AUDIENCE_OPTIONS}
        required
        error={errors.audience}
      />

      <FormSelect
        label="Product of interest"
        name="product"
        value={formData.product}
        onChange={handleChange("product")}
        options={PRODUCT_OPTIONS}
      />

      <FormField
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange("message")}
        placeholder="Tell us about your project or aviation requirements..."
        required
        error={errors.message}
        helperText="Minimum 20 characters. Include timeline, budget range, or specific questions if applicable."
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-12 rounded-full bg-navy px-10 py-4 font-bold text-white transition-colors hover:bg-navy-900 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="31.4 31.4" />
            </svg>
            Sending...
          </>
        ) : (
          "Send inquiry"
        )}
      </button>

      <p className="text-xs text-slate text-center">
        By submitting, you agree to our <Link href="/privacy" className="underline hover:text-navy">Privacy Policy</Link>. No spam — we only use this to respond to your inquiry.
      </p>
    </form>
  );
}
