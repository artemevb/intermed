// app/layout.js
"use client";
import React from 'react';
import { LanguageProvider } from './i18n/locales/LanguageContext';
import Head from 'next/head';
import './_styles/globals.css';

export default function RootLayout({ children }) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Intermed Innovation",
    "url": "https://imed.uz",
    "logo": "https://imed.uz/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+998781504747",
      "contactType": "customer service",
      "areaServed": "UZ",
      "availableLanguage": ["Uzbek", "Russian", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
      "https://www.facebook.com/intermed.mindray",
      "https://t.me/intermedtrade",
      "https://www.youtube.com/@intermedinnovation9644"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chinobod ko'chasi 10a, Тошкент, Toshкент",
      "addressLocality": "Ташкент",
      "postalCode": "100000",
      "addressCountry": "UZ"
    },
    "foundingDate": "2020-01-01",
    "description": "Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану."
  };

  return (
    <html lang="ru">
      <Head>
        {/* Основные метаданные */}
        <title>Купить медицинское оборудование в Ташкенте – УЗИ, эндоскопы, рентген и стоматология</title>
        <meta
          name="description"
          content="Поставщик медицинского оборудования в Ташкенте: широкий выбор УЗИ аппаратов, эндоскопов, рентген аппаратов, портативных и стационарных систем, а также стоматологической техники. Конкурентные цены, оперативная доставка и сервисное обслуживание. Узнайте цены на УЗИ аппараты и другие устройства в Ташкенте."
        />
        <meta
          name="keywords"
          content="медицинское оборудование, Ташкент, узи аппарат, эндоскоп, рентген аппарат, медтехника Ташкент, мед оборудование, узи аппарат цена в ташкенте, портативный узи аппарат, купить узи аппарат, стоматологическое оборудование, ультразвуковые аппараты, операционный стол"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Intermed Innovation" />
        <link rel="canonical" href="https://imed.uz" />

        {/* Open Graph разметка */}
        <meta property="og:title" content="Купить медицинское оборудование в Ташкенте – УЗИ, эндоскопы, рентген и стоматология" />
        <meta property="og:description" content="Поставщик медицинского оборудования в Ташкенте: широкий выбор УЗИ аппаратов, эндоскопов, рентген аппаратов, портативных и стационарных систем, а также стоматологической техники. Конкурентные цены, оперативная доставка и сервисное обслуживание." />
        <meta property="og:url" content="https://imed.uz" />
        <meta property="og:site_name" content="Intermed Innovation" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:image" content="https://imed.uz/og.jpg" />

        {/* Twitter Card разметка */}
        <meta name="twitter:title" content="Купить медицинское оборудование в Ташкенте – УЗИ, эндоскопы, рентген и стоматология" />
        <meta name="twitter:description" content="Поставщик медицинского оборудования в Ташкенте: широкий выбор УЗИ аппаратов, эндоскопов, рентген аппаратов, портативных и стационарных систем, а также стоматологической техники. Конкурентные цены, оперативная доставка и сервисное обслуживание." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://imed.uz/og.jpg" />

        {/* Структурированные данные для поисковых систем */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </Head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
