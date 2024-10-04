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
