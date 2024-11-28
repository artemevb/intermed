import React from 'react';
import Main from "@/app/[lng]/_components/Main/Main";
import axios from 'axios';
import { languages } from '../i18n/settings';

// Функция для генерации мета-данных для главной страницы
export async function generateMetadata({ params }) {
  const { lng } = params;

  let banners = [];

  // Получение данных баннеров
  try {
    const response = await axios.get('https://imed.uz/api/v1/banner', {
      headers: {
        'Accept-Language': lng,
      },
    });
    banners = response.data.data;
  } catch (error) {
    console.error('Ошибка при получении баннеров:', error);
  }

  const ogImageUrl = 'https://imed.uz/og.jpg';

  const title = 'Intermed Innovation — Медицинское оборудование в Ташкенте';
  const description = 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://imed.uz/${lng}/`,
      images: [
        {
          url: ogImageUrl,
          alt: 'Intermed Innovation Logo', 
          width: 1200,
          height: 630,
        },
      ],
      locale: lng,
      site_name: 'Intermed Innovation',
    },
    twitter: {
      title,
      description,
      images: [ogImageUrl],
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: `https://imed.uz/${lng}/`,
      languages: languages.reduce((acc, language) => {
        acc[language] = `https://imed.uz/${language}/`;
        return acc;
      }, {}),
    },
    meta: [
      { name: 'keywords', content: 'медицинское оборудование, Ташкент, доставка медицинского оборудования, Intermed Innovation' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Intermed Innovation' },
    ],
  };
}

// Основная страница
export default async function Page({ params }) {
  const { lng } = params;
  const banners = await getBanners(lng);

  return (
    <div>
      <Main banners={banners} />
    </div>
  );
}

// Функция для получения баннеров
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
