import { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useLanguageState() {
  const [language, setLanguageState] = useState<Language>('ja');

  useEffect(() => {
    // Load language from localStorage or URL parameter
    const savedLanguage = localStorage.getItem('language') as Language;
    const urlParams = new URLSearchParams(window.location.search);
    const urlLanguage = urlParams.get('lang') as Language;
    
    const initialLanguage = urlLanguage || savedLanguage || 'ja';
    setLanguageState(initialLanguage);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Update URL parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  };

  return { language, setLanguage };
}