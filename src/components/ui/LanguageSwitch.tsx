"use client";

import { useLanguage } from "../LanguageProvider";
import { Globe } from "lucide-react";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'ja' ? 'English' : 'Japanese'}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#000000',
        background: 'transparent',
        border: 'none',
        fontSize: '14px',
        fontWeight: '300',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease',
        padding: '0',
        margin: '0',
      }}
      onMouseEnter={(e) => (e.target as HTMLButtonElement).style.opacity = '0.6'}
      onMouseLeave={(e) => (e.target as HTMLButtonElement).style.opacity = '1'}
    >
      <Globe size={16} />
      <span>{language === 'ja' ? 'EN' : 'JP'}</span>
    </button>
  );
}