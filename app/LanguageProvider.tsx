'use client';

import { useEffect } from 'react';

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLang') || 'EN';
    const normalized = storedLang.toUpperCase();
    const lang = normalized === 'AR' ? 'ar' : 'en';

    document.body.setAttribute('lang', lang);
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, []);

  return <>{children}</>;
}
