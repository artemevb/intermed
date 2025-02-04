import axios from 'axios';
import List from '../../../_components/Catalog/List';
import Application from '../../../_components/Main/Application';
import Script from 'next/script';

export async function generateMetadata({ params, searchParams }) {
  const { slug, lng } = params;

  // Обработка slug как массива
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const categorySlug = slugArray[0] || null;
  const subcategorySlug = slugArray[1] || null;

  // Получение всех категорий с API
  const allCategories = await axios
    .get('https://imed.uz/api/v1/category', {
      headers: { 'Accept-Language': lng },
    })
    .then((res) => res.data.data)
    .catch(() => []);

  const activeCategories = allCategories.filter((category) => category.active);
  let categoryData = null;
  let subcategoryData = null;

  if (categorySlug) {
    // Поиск категории по slug
    categoryData = allCategories.find((cat) => cat.slug === categorySlug);
    if (categoryData && subcategorySlug) {
      // Поиск субкатегории по slug
      subcategoryData = categoryData.catalogs.find((cat) => cat.slug === subcategorySlug);
    }
  }

  // Формирование title с динамическим добавлением транзакционных фраз для лучшей оптимизации
  const titleBase = subcategoryData
    ? `${subcategoryData.name} – Купить по доступной цене в Ташкенте`
    : categoryData
      ? `${categoryData.name} – Качественное оборудование в Ташкенте`
      : 'Каталог оборудования INTERMED INNOVATION';
  const title = `${titleBase} | INTERMED INNOVATION`;

  // Формирование описания с упором на ассортимент и преимущества (включая ключевые запросы)
  const description =
    subcategoryData
      ? `Ознакомьтесь с продукцией в категории ${subcategoryData.name}. В нашем ассортименте: УЗИ аппараты, МРТ, рентгеновские аппараты, лабораторное и стоматологическое оборудование, реагенты и расходные материалы. Купить оборудование в Ташкенте по выгодным ценам.`
      : categoryData
        ? `Ознакомьтесь с продукцией категории ${categoryData.name}. Мы предлагаем: УЗИ аппараты, МРТ, рентген, лабораторное оборудование, стоматологическое оборудование и многое другое от ведущих производителей.`
        : 'Посмотрите наш каталог медицинского оборудования: УЗИ аппараты, МРТ, МСКТ, лабораторное оборудование, реагенты, рентген аппараты, стоматологическое оборудование, кольпоскопы, эндоскопия и другое оборудование от ведущих производителей.';

  // Дополнительные ключевые слова, собранные на основе семантического ядра
  const keywords =
    'узи аппараты, мрт в ташкенте, мрт ташкент, мскт, лабораторное оборудование, реагенты, расходные материалы, рентген стоматологический, дентальный рентген, стоматологическое оборудование, кольпоскопы, эндоскопия, функциональная диагностика, ветеринарное оборудование, компьютерная томография, ультразвуковые аппараты';

  const ogImageUrl = 'https://imed.uz/og.jpg';
  const canonicalUrl = `https://imed.uz/${lng}/categories/catalog/${categorySlug || ''}/${subcategorySlug || ''}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          alt: 'Интермед Инновация – Каталог медицинского оборудования',
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
      canonical: canonicalUrl,
      languages: {
        ru: `https://imed.uz/ru/categories/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
        uz: `https://imed.uz/uz/categories/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
        en: `https://imed.uz/en/categories/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    author: 'Intermed Innovation',
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Медицинское оборудование Intermed Innovation",
  "description": "Каталог медицинского оборудования: УЗИ аппараты, МРТ, стоматологическое оборудование, лабораторное оборудование, реагенты и расходные материалы. Высокое качество техники от ведущих производителей с доставкой по Ташкенту.",
  "url": "https://imed.uz",
  "logo": "https://imed.uz/og.jpg",
  "image": "https://imed.uz/og.jpg",
  "category": "Медицинское оборудование",
  "brand": "Intermed Innovation",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "UZS"
  },
  "sameAs": [
    "https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
    "https://www.facebook.com/intermed.mindray",
    "https://t.me/intermedtrade",
    "https://www.youtube.com/@intermedinnovation9644"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "г. Ташкент, Юнусабадский р-он, ул. Чинобод 10А",
    "addressLocality": "Ташкент",
    "postalCode": "100000",
    "addressCountry": "UZ"
  },
};

export default async function Page({ params, searchParams }) {
  const { slug, lng } = params;

  const slugArray = Array.isArray(slug) ? slug : [slug];
  const categorySlug = slugArray[0] || null;
  const subcategorySlug = slugArray[1] || null;

  const allCategories = await axios
    .get('https://imed.uz/api/v1/category', {
      headers: { 'Accept-Language': lng },
    })
    .then((res) => res.data.data)
    .catch(() => []);

  const activeCategories = allCategories.filter((category) => category.active);

  let data = [];
  let catalogID = null;

  if (categorySlug) {
    const categoryData = allCategories.find((cat) => cat.slug === categorySlug);
    if (categoryData) {
      data = [categoryData];

      if (subcategorySlug && subcategorySlug !== 'all') {
        const subcategory = categoryData.catalogs.find(
          (cat) => cat.slug === subcategorySlug && cat.active
        );
        if (subcategory) {
          catalogID = subcategory.id;
        }
      }
    }
  }

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="json-ld-unique-id"
      />

      <div className="w-full bg-white flex flex-col">
        <List data={data} allCategories={activeCategories} selectedCatalogId={catalogID} />
        <Application />
      </div>
    </>
  );
}
