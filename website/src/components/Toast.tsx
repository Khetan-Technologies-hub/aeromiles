"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "./icons";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  onClose: (id: string) => void;
  duration?: number;
}

const typeStyles: Record<ToastType, { bg: string; iconBg: string; iconColor: string; border: string }> = {
  success: { bg: "bg-green-50", iconBg: "bg-green-100", iconColor: "text-green-700", border: "border-green-200" },
  error: { bg: "bg-red-50", iconBg: "bg-red-100", iconColor: "text-red-700", border: "border-red-200" },
  info: { bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-700", border: "border-blue-200" },
  warning: { bg: "bg-saffron-50", iconBg: "bg-saffron-100", iconColor: "text-saffron-700", border: "border-saffron-200" },
};

const typeIcons: Record<ToastType, React.ReactElement> = {
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

export function Toast({ id, type, title, message, onClose, duration = 5000 }: ToastProps) {
  const [visible, setVisible] = useState(true);
  const styles = typeStyles[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // Wait for exit animation before calling onClose
      setTimeout(() => onClose(id), 200);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className={`${styles.bg} ${styles.border} border rounded-2xl shadow-xl p-4 min-w-[320px] max-w-md`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl ${styles.iconBg} ${styles.iconColor}`}>
          {typeIcons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-navy">{title}</p>
          {message && <p className="mt-1 text-sm text-slate">{message}</p>}
        </div>
        <button
          onClick={() => {
            setVisible(false);
            setTimeout(() => onClose(id), 200);
          }}
          className="flex-shrink-0 p-1 text-slate hover:text-navy transition-colors rounded-lg hover:bg-black/5"
          aria-label="Dismiss notification"
        >
          <XIcon className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
}

interface ToastContainerProps {
  toasts: Array<{ id: string; type: ToastType; title: string; message?: string }>;
  onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <AnimatePresence>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </AnimatePresence>
  );
}

/** Hook for managing toasts */
export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: string; type: ToastType; title: string; message?: string }>>([]);

  const addToast = (type: ToastType, title: string, message?: string, duration?: number) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    if (duration !== 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration || 5000);
    }
    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const success = (title: string, message?: string, duration?: number) => addToast("success", title, message, duration);
  const error = (title: string, message?: string, duration?: number) => addToast("error", title, message, duration);
  const info = (title: string, message?: string, duration?: number) => addToast("info", title, message, duration);
  const warning = (title: string, message?: string, duration?: number) => addToast("warning", title, message, duration);

  return { toasts, addToast, removeToast, success, error, info, warning };
}

/** ToastProvider - wraps the app and renders toast notifications */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts } = useToast();
  return (
    <>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none" aria-live="polite" aria-atomic="true">
        <ToastContainer toasts={toasts} onClose={() => {}} />
      </div>
    </>
  );
}