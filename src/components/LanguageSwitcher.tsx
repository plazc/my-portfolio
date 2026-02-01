"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: "en", label: "EN" },
        { code: "tr", label: "TR" },
        { code: "ru", label: "RU" },
    ];

    return (
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as "en" | "tr" | "ru")}
                    className={`
            px-2 py-1 text-xs font-bold rounded-md transition-all
            ${language === lang.code
                            ? "bg-white text-orange-600 shadow-sm border border-slate-100"
                            : "text-slate-500 hover:text-slate-700 hover:bg-white/50"}
          `}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
