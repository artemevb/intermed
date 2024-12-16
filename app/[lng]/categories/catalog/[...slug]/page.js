import axios from 'axios'
import List from '../../../_components/Catalog/List'
import Application from '../../../_components/Main/Application'
import Script from 'next/script';


export async function generateMetadata({ params, searchParams }) {
  const { slug, lng } = params;

  // Обработка slug как массива
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const categorySlug = slugArray[0] || null;
  const subcategorySlug = slugArray[1] || null;

  // Получение всех категорий
  const allCategories = await axios
    .get('https://imed.uz/api/v1/category', {
      headers: {
        'Accept-Language': lng,
      },
    })
    .then((res) => res.data.data)
    .catch(() => []);

  const activeCategories = allCategories.filter((category) => category.active);
  let categoryData = null;
  let subcategoryData = null;

  if (categorySlug) {
    // Поиск категории по slug
    categoryData = allCategories.find(cat => cat.slug === categorySlug);
    if (categoryData && subcategorySlug) {
      // Поиск субкатегории по slug
      subcategoryData = categoryData.catalogs.find(cat => cat.slug === subcategorySlug);
    }
  }

  const title = subcategoryData
    ? `${subcategoryData.name} | Каталог оборудования INTERMED INNOVATION`
    : categoryData
      ? `${categoryData.name} | Каталог оборудования INTERMED INNOVATION`
      : 'Каталог оборудования INTERMED INNOVATION';

  const description = subcategoryData
    ? `Ознакомьтесь с нашей продукцией в категории ${subcategoryData.name}. УЗИ аппараты, МРТ, стоматологическое оборудование и другие товары от ведущих производителей.`
    : categoryData
      ? `Ознакомьтесь с продукцией в категории ${categoryData.name}. УЗИ аппараты, МРТ, стоматологическое оборудование и другие товары от ведущих производителей.`
      : 'Посмотрите наш каталог медицинского оборудования: УЗИ аппараты, МРТ, стоматологическое оборудование, лабораторное оборудование и многое другое.';

  const ogImageUrl = 'https://imed.uz/og.jpg';

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://imed.uz/${lng}/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
      images: [
        {
          url: ogImageUrl,
          alt: 'Интермед Инновация - Каталог медицинского оборудования',
          width: 1200,
          height: 630,
        },
      ],
      locale: lng,
      site_name: 'Intermed Innovation',
    },
    twitter: {
      title: title,
      description: description,
      images: [ogImageUrl],
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: `https://imed.uz/${lng}/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
      languages: {
        ru: `https://imed.uz/ru/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
        uz: `https://imed.uz/uz/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
        en: `https://imed.uz/en/catalog/${categorySlug || ''}/${subcategorySlug || ''}`,
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
  "description": "Каталог медицинского оборудования: УЗИ аппараты, МРТ, стоматологическое оборудование и многое другое.",
  "url": "https://imed.uz",
  "logo": "https://imed.uz/og.jpg",
  "image": "https://imed.uz/og.jpg",
  "category": "Медицинское оборудование",
  "brand": "Intermed Innovation",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "UZS",
    "price": "по запросу"
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
};

export default async function Page({ params, searchParams }) {
  const { slug, lng } = params;

  const slugArray = Array.isArray(slug) ? slug : [slug];
  const categorySlug = slugArray[0] || null;
  const subcategorySlug = slugArray[1] || null;

  const allCategories = await axios
    .get('https://imed.uz/api/v1/category', {
      headers: {
        'Accept-Language': lng,
      },
    })
    .then((res) => res.data.data)
    .catch(() => []);

  const activeCategories = allCategories.filter((category) => category.active);

  let data = [];
  let catalogID = null;

  if (categorySlug) {
    const categoryData = allCategories.find(cat => cat.slug === categorySlug);
    if (categoryData) {
      data = [categoryData];

      if (subcategorySlug && subcategorySlug !== 'all') {
        const subcategory = categoryData.catalogs.find(cat => cat.slug === subcategorySlug && cat.active);
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
        key="jsonld-catalog"
      />

      <div className="w-full bg-white flex flex-col">
        <List
          data={data}
          allCategories={activeCategories}
          selectedCatalogId={catalogID}
        />
        <Application />
      </div>
    </>
  );
}

