"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

type InputType = "text" | "email" | "tel" | "url" | "number" | "password" | "textarea" | "select";

interface FormFieldProps {
  /** Field label */
  label: string;
  /** Input type */
  type?: InputType;
  /** Placeholder text */
  placeholder?: string;
  /** Helper text below the field */
  helperText?: string;
  /** Error message (displays error state) */
  error?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Field name (for form submission) */
  name: string;
  /** Current value */
  value?: string;
  /** onChange handler */
  onChange?: (value: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
  /** Input ref for validation libraries */
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { fieldId: string; errorId?: string; helperId?: string }>(
  ({ fieldId, errorId, helperId, className = "", ...props }, ref) => (
    <input
      ref={ref}
      id={fieldId}
      className={[
        "min-h-12 w-full rounded-xl border border-line bg-bg-white px-4 text-base text-ink",
        "transition-colors",
        "placeholder:text-slate",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        errorId ? "border-red-600" : "hover:border-blue/50",
        className,
      ].join(" ")}
      aria-invalid={!!errorId}
      aria-describedby={errorId ? errorId : helperId}
      aria-required={props.required}
      {...props}
    />
  )
);
Input.displayName = "FormFieldInput";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { fieldId: string; errorId?: string; helperId?: string }>(
  ({ fieldId, errorId, helperId, className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      id={fieldId}
      className={[
        "min-h-[120px] w-full rounded-xl border border-line bg-bg-white px-4 text-base text-ink",
        "transition-colors",
        "placeholder:text-slate",
        "resize-y",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        errorId ? "border-red-600" : "hover:border-blue/50",
        className,
      ].join(" ")}
      aria-invalid={!!errorId}
      aria-describedby={errorId ? errorId : helperId}
      aria-required={props.required}
      {...props}
    />
  )
);
Textarea.displayName = "FormFieldTextarea";

const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { fieldId: string; errorId?: string; helperId?: string }>(
  ({ fieldId, errorId, helperId, className = "", ...props }, ref) => (
    <select
      ref={ref}
      id={fieldId}
      className={[
        "min-h-12 w-full rounded-xl border border-line bg-bg-white px-4 text-base text-ink",
        "transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        errorId ? "border-red-600" : "hover:border-blue/50",
        className,
      ].join(" ")}
      aria-invalid={!!errorId}
      aria-describedby={errorId ? errorId : helperId}
      aria-required={props.required}
      {...props}
    />
  )
);
Select.displayName = "FormFieldSelect";

export function FormField({
  label,
  type = "text",
  placeholder,
  helperText,
  error,
  required = false,
  name,
  value,
  onChange,
  disabled = false,
  className = "",
}: FormFieldProps) {
  const fieldId = `field-${name}`;
  const errorId = error ? `${fieldId}-error` : undefined;
  const helperId = helperText && !error ? `${fieldId}-helper` : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const renderInput = () => {
    if (type === "textarea") {
      return (
        <Textarea
          fieldId={fieldId}
          errorId={errorId}
          helperId={helperId}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-required={required}
        />
      );
    }
    if (type === "select") {
      return (
        <Select
          fieldId={fieldId}
          errorId={errorId}
          helperId={helperId}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-required={required}
        >
          <option value="">Select...</option>
        </Select>
      );
    }
    return (
      <Input
        fieldId={fieldId}
        errorId={errorId}
        helperId={helperId}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-required={required}
        autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "off"}
      />
    );
  };

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={fieldId}
        className={[
          "block",
          "text-sm",
          "font-semibold",
          "text-navy",
          "mb-2",
          required && "after:content-['*'] after:text-red-600 after:ml-1",
          disabled && "opacity-50",
        ].filter(Boolean).join(" ")}
      >
        {label}
      </label>
      {renderInput()}
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-sm font-medium text-red-600 flex items-center gap-1"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="mt-2 text-sm text-slate">
          {helperText}
        </p>
      )}
    </div>
  );
}

/** FormField with select options */
export function FormSelect({
  label,
  options,
  placeholder = "Select...",
  helperText,
  error,
  required = false,
  name,
  value,
  onChange,
  disabled = false,
  className = "",
}: Omit<FormFieldProps, "type"> & {
  options: { value: string; label: string }[];
}) {
  const fieldId = `field-${name}`;
  const errorId = error ? `${fieldId}-error` : undefined;
  const helperId = helperText && !error ? `${fieldId}-helper` : undefined;

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={fieldId}
        className={[
          "block",
          "text-sm",
          "font-semibold",
          "text-navy",
          "mb-2",
          required && "after:content-['*'] after:text-red-600 after:ml-1",
          disabled && "opacity-50",
        ].filter(Boolean).join(" ")}
      >
        {label}
      </label>
      <Select
        fieldId={fieldId}
        errorId={errorId}
        helperId={helperId}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        aria-required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-sm font-medium text-red-600 flex items-center gap-1"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="mt-2 text-sm text-slate">
          {helperText}
        </p>
      )}
    </div>
  );
}