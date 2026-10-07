export const CONSENT_KEY = 'aeromiles_ga4_consent';

export const getConsent = (): boolean | null => {
  if (typeof window === 'undefined') return null;
  const consent = localStorage.getItem(CONSENT_KEY);
  if (consent === null) return null;
  return consent === 'true';
};

export const setConsent = (granted: boolean): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CONSENT_KEY, String(granted));
  }
};
