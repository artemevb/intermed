// app/[lng]/page.js

import React from 'react';
import Main from "@/app/[lng]/_components/Main/Main";
import axios from 'axios';

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

  // Используем логотип как основное изображение для Open Graph
  const ogImageUrl = 'https://imed.uz/og.jpg'; // Ваш логотип

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
      type: 'website', // Используем допустимый тип
      siteName: 'Intermed Innovation',
    },
    twitter: {
      card: 'summary_large_image', // Или 'summary' для меньших изображений
      title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
      description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
      images: [ogImageUrl],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    themeColor: "#ffffff",
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
