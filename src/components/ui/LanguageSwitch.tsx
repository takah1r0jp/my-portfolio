"use client";

import { useLanguage } from "../LanguageProvider";
import { Button } from "./Button";
import { Globe } from "lucide-react";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label={`Switch to ${language === 'ja' ? 'English' : 'Japanese'}`}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {language === 'ja' ? 'EN' : 'JP'}
      </span>
    </Button>
  );
}