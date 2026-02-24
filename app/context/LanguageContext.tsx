"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import en from '../locales/en.json';
import id from '../locales/id.json';

// Definisikan tipe untuk bahasa
type Language = 'en' | 'id';
type Translations = typeof en; // Mengambil tipe struktur dari file en.json

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en'); // Default Indonesia

    const t = language === 'en' ? en : id;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};