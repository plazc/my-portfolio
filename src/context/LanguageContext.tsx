"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, ResumeData } from "@/data/resume";

type Language = "en" | "tr" | "ru";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    content: ResumeData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        // Detect browser language
        const browserLang = navigator.language.split("-")[0];
        if (browserLang === "tr") {
            setLanguage("tr");
        } else if (browserLang === "ru") {
            setLanguage("ru");
        } else {
            setLanguage("en");
        }
    }, []);

    const value = {
        language,
        setLanguage,
        content: dictionaries[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
