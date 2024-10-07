import React from 'react';
import Main from "@/app/[lng]/_components/Main/Main";
import axios from 'axios';
import { languages } from '../i18n/settings';
import { dir } from 'i18next';

// Функция для генерации мета-тегов для главной страницы
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

  // Предположим, что первый баннер содержит изображение для Open Graph
  const ogImageUrl = banners.length > 0 ? banners[0].imageUrl : 'https://imed.uz/og.jpg';

  return {
    title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
    description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
    openGraph: {
      title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
      description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
      url: `https://imed.uz/${lng}/`,
      images: [
        {
          url: ogImageUrl,
          alt: 'Intermed Innovation Logo',
          width: 600,  // Укажите желаемую ширину
          height: 400, // Укажите желаемую высоту
        },
      ],
      locale: lng,
    },
    twitter: {
      title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
      description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `https://imed.uz/${lng}/`,
      languages: languages.reduce((acc, language) => {
        acc[language] = `https://imed.uz/${language}/`;
        return acc;
      }, {}),
    },
  };
}

export default async function Page({ params }) {
  const { lng } = params;
  const banners = await getBanners(lng);

  return (
    <div>
      <Main banners={banners} />
    </div>
  );
}

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
