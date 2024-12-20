// app/layout.js
"use client";
import React from 'react';
import { LanguageProvider } from './i18n/locales/LanguageContext'; // Предполагая, что у вас есть контекст для языка
import './_styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ru"> 
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
