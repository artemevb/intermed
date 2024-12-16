// app/[lng]/news/page.js

import React from 'react';
import Script from 'next/script'; // Для добавления JSON-LD
import Events from "../_components/News/Events";
import NewsComp from "../_components/News/NewsComp";
import Application from "../_components/Main/Application";


export async function generateMetadata({ params }) {
  const { lng } = params;

  return {
    title: 'Новости | INTERMED INNOVATION',
    description: 'Читайте последние новости компании Intermed Innovation, а также актуальные события в области медицинского оборудования и технологий.',
    openGraph: {
      title: 'Новости | INTERMED INNOVATION',
      description: 'Читайте последние новости компании Intermed Innovation, а также актуальные события в области медицинского оборудования и технологий.',
      url: `https://imed.uz/${lng}/news`,
      images: [
        {
          url: 'https://imed.uz/news-og.jpg',
          alt: 'Новости компании Intermed Innovation',
          width: 1200,
          height: 630,
        },
      ],
      locale: lng,
      site_name: 'Intermed Innovation',
    },
    twitter: {
      title: 'Новости | INTERMED INNOVATION',
      description: 'Читайте последние новости компании Intermed Innovation, а также актуальные события в области медицинского оборудования и технологий.',
      images: ['https://imed.uz/news-og.jpg'],
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: `https://imed.uz/${lng}/news`,
      languages: {
        ru: `https://imed.uz/ru/news`,
        uz: `https://imed.uz/uz/news`,
        en: `https://imed.uz/en/news`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    author: 'Intermed Innovation',
  };
}

export default function NewsPage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Новости компании Intermed Innovation",
    "image": [
      "https://imed.uz/og.jpg",
    ],
    "author": {
      "@type": "Organization",
      "name": "Intermed Innovation"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Intermed Innovation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://imed.uz/og.jpg"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971543980707",
      "contactType": "Customer Service",
      "areaServed": "UZ"
    },
    "sameAs": [
      "https://www.youtube.com/@intermedinnovation9644",
      "https://t.me/intermedtrade",
      "https://www.facebook.com/intermed.mindray",
      "https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "г. Ташкент, Юнусабадский р-он, ул. Чинобод 10А",
      "addressLocality": "Ташкент",
      "postalCode": "100000",
      "addressCountry": "UZ"
    },
    "description": "Читайте последние новости компании Intermed Innovation, а также актуальные события в области медицинского оборудования и технологий.",
    "mainEntityOfPage": "https://imed.uz/ru/news"
  };

  return (
    <>
      {/* Вставка JSON-LD структурированных данных */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="json-ld-news"
      />

      <main className="w-full bg-white flex flex-col gap-32 mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="events-title">
          <Events />
        </section>

        <section aria-labelledby="news-title">
          <NewsComp />
        </section>

        <section aria-labelledby="application-title">
          <Application />
        </section>
      </main>
    </>
  );
}
