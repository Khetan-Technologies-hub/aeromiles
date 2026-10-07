"use client";

import { useState, useEffect } from "react";
import { getConsent, setConsent } from "@/lib/consent";
import { motion, AnimatePresence } from "framer-motion";

export function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsent(true);
    setIsVisible(false);
    // Dispatch custom event so Analytics component knows to load immediately
    window.dispatchEvent(new Event("consent_updated"));
  };

  const handleDecline = () => {
    setConsent(false);
    setIsVisible(false);
    window.dispatchEvent(new Event("consent_updated"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-navy text-white p-6 rounded-t-2xl shadow-2xl border-t border-x border-blue-600/30 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm md:text-base leading-relaxed">
              We use cookies to improve your experience and analyze our traffic. 
              By clicking "Accept", you agree to our use of Google Analytics.
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
