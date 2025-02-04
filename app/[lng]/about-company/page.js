// app/[lng]/about/page.js

import React from 'react';
import Script from 'next/script';
import WhyChooseUs from "../_components/About/WhyChooseUs";
import WhatWeDo from "../_components/About/WhatWeDo";
import Partners from "../_components/About/Partners";
import Banner from "../_components/About/Banner";
import Certificates from "../_components/Main/Sertificates";
import Application from "../_components/Main/Application";

/**
 * Функция для генерации метаданных страницы "О компании"
 * @param {Object} param0 - Параметры функции, включая язык
 * @returns {Object} - Объект с метаданными
 */
export async function generateMetadata({ params }) {
  const { lng } = params;

  return {
    title: 'INTERMED INNOVATION: Поставщик медицинского оборудования в Узбекистане – imed uz, интермед инновейшн, intermed ташкент',
    description:
      'INTERMED INNOVATION – лидер по поставкам современного медицинского оборудования в Узбекистане. Мы предлагаем качественное мед оборудование, инновационные решения, лабораторное и диагностическое медицинское оборудование для клиник. Узнайте больше о нашей компании, опыте, миссии и ценностях.',
    openGraph: {
      title: 'INTERMED INNOVATION: Поставщик медицинского оборудования в Узбекистане – imed uz, интермед инновейшн, intermed ташкент',
      description:
        'INTERMED INNOVATION – лидер по поставкам современного медицинского оборудования в Узбекистане. Мы предлагаем инновационные решения, качественное мед оборудование, лабораторное оборудование и диагностическую аппаратуру для клиник. Узнайте больше о нашей компании и преимуществах сотрудничества.',
      url: `https://imed.uz/${lng}/about-company`,
      images: [
        {
          url: 'https://imed.uz/og.jpg',
          alt: 'Intermed Innovation - О компании',
          width: 1200,
          height: 630,
        },
      ],
      locale: lng,
      site_name: 'Intermed Innovation',
    },
    twitter: {
      title: 'INTERMED INNOVATION: Поставщик медицинского оборудования в Узбекистане – imed uz, интермед инновейшн, intermed ташкент',
      description:
        'INTERMED INNOVATION – лидер по поставкам современного медицинского оборудования в Узбекистане. Узнайте больше о нашей компании, опыте, миссии и ценностях.',
      images: ['https://imed.uz/og.jpg'],
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: `https://imed.uz/${lng}/about-company`,
      languages: {
        ru: `https://imed.uz/ru/about-company`,
        uz: `https://imed.uz/uz/about-company`,
        en: `https://imed.uz/en/about-company`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords:
      'о компании, Intermed Innovation, мед оборудования, медицинское оборудование, imed uz, интермед инновейшн, intermed ташкент, поставщик медицинского оборудования, инновационное медицинское оборудование, лабораторное медицинское оборудование, дистрибьютор медицинского оборудования, китайское медицинское оборудование, диагностика, скрининг аппарат, мед аппаратура',
    author: 'Intermed Innovation',
  };
}

/**
 * Компонент страницы "О компании"
 * @returns {JSX.Element} - Разметка страницы
 */
export default function About() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Intermed Innovation",
    "url": "https://imed.uz",
    "logo": "https://imed.uz/og.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+998781504747",
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
    "description": "INTERMED INNOVATION – лидер по поставкам современного медицинского оборудования в Узбекистане. Мы предлагаем инновационные решения, высококачественное мед оборудование и лабораторное медицинское оборудование для клиник. Узнайте больше о нашей компании, опыте и ценностях."
  };

  return (
    <>
      {/* Структурированные данные (JSON‑LD) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="json-ld-about-company"
      />

      <main className="w-full bg-white flex flex-col gap-32 mx-auto">
        <div><Banner /></div>
        <div><WhatWeDo /></div>
        <div><WhyChooseUs /></div>
        <div><Certificates /></div>
        <div><Partners /></div>
        {/* Скрытый блок с подробным описанием для поисковых систем */}
        <section aria-label="Контактная информация" className="sr-only">
          <h2>Контактная информация</h2>
          <p>
            INTERMED INNOVATION – динамично развивающаяся компания, специализирующаяся на поставках современного и высокотехнологичного медицинского оборудования в Узбекистане. Мы предлагаем широкий ассортимент продукции: мед оборудования, лабораторное медицинское оборудование, диагностическую аппаратуру и инновационные решения для клиник и медицинских учреждений. Наша миссия – обеспечить качественную поставку медицинского оборудования, способствующую улучшению диагностики, лечения и реабилитации пациентов.
            <br /><br />
            С многолетним опытом работы и более чем 2000 довольными клиентами, мы являемся надёжным партнёром в сфере поставок медицинского оборудования. Мы сотрудничаем с ведущими мировыми производителями, предлагаем выгодные условия закупки, лизинг и гибкие варианты оплаты.
            <br /><br />
            Наши ценности – качество, инновации и надёжность. INTERMED INNOVATION стремится к постоянному развитию, чтобы удовлетворять потребности современной медицины и обеспечивать своим клиентам лучшие решения на рынке.
            <br /><br />
            Выбирая INTERMED INNOVATION, вы получаете профессиональное обслуживание, экспертную поддержку и надежного партнёра, который поможет вам в достижении медицинских целей.
          </p>
        </section>
        <div><Application /></div>
      </main>
    </>
  );
}
