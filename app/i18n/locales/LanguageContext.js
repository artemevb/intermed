"use client";

import { createContext, useContext, useMemo } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ lng, children }) => {
    const memoizedLng = useMemo(() => lng, [lng]);
    return (
        <LanguageContext.Provider value={lng}>
            {children}
        </LanguageContext.Provider>
    );
};
