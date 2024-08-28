"use client";

import { createContext, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ lng, children }) => {
    return (
        <LanguageContext.Provider value={lng}>
            {children}
        </LanguageContext.Provider>
    );
};
