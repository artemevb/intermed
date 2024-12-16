// app/[lng]/page.js
import React from 'react';
import Main from "@/app/[lng]/_components/Main/Main";
import axios from 'axios';
import { languages } from '../i18n/settings';

// Функция для генерации мета-данных для главной страницы
export async function generateMetadata({ params }) {
  const { lng } = params;

  const metadata = {
    title: 'Купить медицинское оборудование в Ташкенте - широкий выбор УЗИ аппаратов и МРТ',
    description: 'Поставка медицинского оборудования в Ташкенте от ведущего поставщика. Купить УЗИ аппараты, МРТ, стоматологическое оборудование и многое другое по выгодным ценам. Гарантия качества, оперативная доставка и сервисное обслуживание.',
    keywords: 'медицинское оборудование, Ташкент, доставка медицинского оборудования, Intermed Innovation',
    ogImageUrl: 'https://imed.uz/og.jpg',
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://imed.uz`,
      images: [
        {
          url: metadata.ogImageUrl,
          alt: 'Intermed Innovation Logo',
          width: 1200,
          height: 630,
        },
      ],
      locale: lng,
      site_name: 'Intermed Innovation',
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImageUrl],
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: `https://imed.uz`,
      languages: languages.reduce((acc, language) => {
        acc[language] = `https://imed.uz/${language}/`;
        return acc;
      }, {}),
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL('https://imed.uz'),
    meta: [
      { name: 'keywords', content: metadata.keywords },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Intermed Innovation' },
    ],
  };
}

// Основная страница
export default async function Page({ params }) {
  const { lng } = params;

  // Получить данные баннеров
  const banners = await getBanners(lng);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Купить медицинское оборудование в Ташкенте",
    "description": "Поставка медицинского оборудования в Ташкенте от ведущего поставщика. Купить УЗИ аппараты, МРТ, стоматологическое оборудование и многое другое.",
    "url": `https://imed.uz`,
    "inLanguage": lng,
    "image": "https://imed.uz/og.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Intermed Innovation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://imed.uz/og.jpg"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "г. Ташкент, Юнусабадский р-он, ул. Чинобод 10А",
      "addressLocality": "Ташкент",
      "postalCode": "100000",
      "addressCountry": "UZ"
    },
    "sameAs": [
      "https://www.youtube.com/@intermedinnovation9644",
      "https://t.me/intermedtrade",
      "https://www.facebook.com/intermed.mindray",
      "https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://imed.uz`
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Main banners={banners} />
    </div>
  );
}

// Функция для получения данных баннеров
async function getBanners(language) {
  try {
    const response = await axios.get('https://imed.uz/api/v1/banner', {
      headers: {
        'Accept-Language': language,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Ошибка при получении баннеров:', error);
    return [];
  }
}
