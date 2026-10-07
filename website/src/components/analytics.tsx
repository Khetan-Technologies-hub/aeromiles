import Script from "next/script";
import { useState, useEffect } from "react";
import { getConsent } from "@/lib/consent";

/**
 * Google Analytics 4 slot. Renders nothing unless NEXT_PUBLIC_GA_ID is set
 * (in the host env), so local/dev and un-configured builds stay clean.
 * The measurement ID is public by design.
 */
export function Analytics() {
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const checkConsent = () => {
      const consent = getConsent();
      if (consent === true) {
        setHasConsent(true);
      }
    };

    checkConsent();
    window.addEventListener("consent_updated", checkConsent);
    return () => window.removeEventListener("consent_updated", checkConsent);
  }, []);

  if (!gaId || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}


