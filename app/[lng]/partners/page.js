// app/[lng]/partners/page.js

import React from 'react';
import Script from 'next/script'; 
import Title from "../_components/Partners/Title.js";
import ListPartners from "../_components/Partners/ListPartners.js";
import Application from "../_components/Main/Application";

/**
 * Функция для генерации метаданных страницы "Партнеры"
 * @param {Object} param0 - Параметры функции
 * @param {Object} param0.params - Параметры маршрута, включая язык
 * @returns {Object} - Объект с метаданными
 */
export async function generateMetadata({ params }) {
    const { lng } = params;

    return {
        title: 'Наши Партнеры | INTERMED INNOVATION',
        description: 'Познакомьтесь с нашими партнерами — ведущими компаниями в области медицинского оборудования. Совместно мы обеспечиваем высококачественные решения для медицинских учреждений в Ташкенте и за его пределами.',
        openGraph: {
            title: 'Наши Партнеры | INTERMED INNOVATION',
            description: 'Познакомьтесь с нашими партнерами — ведущими компаниями в области медицинского оборудования. Совместно мы обеспечиваем высококачественные решения для медицинских учреждений в Ташкенте и за его пределами.',
            url: `https://imed.uz/${lng}/partners`,
            images: [
                {
                    url: 'https://imed.uz/og.jpg',
                    alt: 'Intermed Innovation и наши партнеры',
                    width: 1200,
                    height: 630,
                },
            ],
            locale: lng,
            site_name: 'Intermed Innovation',
        },
        twitter: {
            title: 'Наши Партнеры | INTERMED INNOVATION',
            description: 'Познакомьтесь с нашими партнерами — ведущими компаниями в области медицинского оборудования. Совместно мы обеспечиваем высококачественные решения для медицинских учреждений в Ташкенте и за его пределами.',
            images: ['https://imed.uz/og.jpg'],
            cardType: 'summary_large_image',
        },
        alternates: {
            canonical: `https://imed.uz/${lng}/partners`,
            languages: {
                ru: `https://imed.uz/ru/partners`,
                uz: `https://imed.uz/uz/partners`,
                en: `https://imed.uz/en/partners`,
            },
        },
        robots: {
            index: true,
            follow: true,
        },
        keywords: 'партнеры, Intermed Innovation, медицинское оборудование, Ташкент, сотрудничество, партнерские программы',
        author: 'Intermed Innovation',
    };
}

/**
 * Компонент страницы "Партнеры"
 * @returns {JSX.Element} - Разметка страницы
 */
export default function PartnersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Intermed Innovation",
        "url": "https://imed.uz",
        "logo": "https://imed.uz/og.jpg",
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
        "description": "Наши партнеры - ведущие производители медицинского оборудования, обеспечивающие высокое качество и инновации. Поставщики для успешной медицинской практики в INTERMED INNOVATION.",

    };

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                key="jsonld-organization-partners"
            />

            <main className="w-full bg-white flex flex-col gap-23">
                <section aria-labelledby="partners-title">
                    <Title />
                </section>
                <section aria-labelledby="list-partners-title">
                    <ListPartners />
                </section>
                <section aria-label="Описание страницы партнеров" className="sr-only">
                    В мире медицины качество оборудования играет решающую роль в диагностике и лечении. В INTERMED INNOVATION мы гордимся нашими стратегическими партнерами, которые являются лидерами в производстве медицинского оборудования. Наше сотрудничество с этими компаниями позволяет нам обеспечивать наших клиентов высокотехнологичными решениями, которые соответствуют самым высоким стандартам.

                    Наши Партнеры:

                    1. Mindray

                    Mindray — один из мировых лидеров в производстве медицинского оборудования. Наш партнер предлагает широкий спектр высокотехнологичных решений, включая УЗИ-аппараты, системы жизнеобеспечения и лабораторное оборудование. Mindray известен своей инновационностью и надежностью, что делает их оборудование незаменимым в современных медицинских учреждениях.

                    2. United Imaging

                    United Imaging — ведущий мировой разработчик диагностического оборудования. Наш партнер предлагает инновационные решения в области магнитно-резонансной и компьютерной томографии. Сотрудничество с United Imaging позволяет нам обеспечивать наших клиентов передовыми технологиями в области диагностики.

                    3. Angell

                    Shenzhen Angell Technology — компания, основанная в 2002 году, специализирующаяся на производстве высококачественного медицинского оборудования. Angell предлагает широкий ассортимент продуктов, включая оборудование для реанимации и интенсивной терапии. Их продукция отличается высоким качеством и надежностью.

                    4. AOHUA

                    Shanghai AOHUA Photoelectricity Endscope Co., Ltd — компания с более чем 20-летним опытом в производстве эндоскопического оборудования. AOHUA предлагает широкий выбор эндоскопов и сопутствующего оборудования, которые широко используются в медицинских учреждениях по всему миру.

                    5.Нейротех

                    Нейротех — российская компания, специализирующаяся на разработке и производстве медицинского оборудования. Наш партнер предлагает инновационные решения в области нейрохирургии и неврологии, которые помогают врачам в диагностике и лечении сложных заболеваний.

                    6. EDAN

                    Компания EDAN занимается разработкой и производством медицинского оборудования. Наш партнер предлагает широкий спектр продуктов, включая мониторы пациента, аппараты для искусственной вентиляции легких и другие устройства, которые являются необходимыми в современной медицинской практике.

                    7. Perlove Medical

                    Nanjing Perlove Medical Equipment Co., Ltd — компания, основанная в 2003 году, специализирующаяся на производстве медицинского оборудования. Perlove Medical предлагает высококачественные решения в области хирургии и анестезиологии, которые помогают улучшить качество медицинских услуг.

                    8. DLAB

                    DLAB Scientific — признанный поставщик высококачественного лабораторного оборудования. Наш партнер предлагает широкий выбор лабораторных приборов, которые помогают в точной диагностике и научных исследованиях.

                    9. Allsheng

                    Hangzhou Allsheng Instruments Co., Ltd — национальный высокотехнологичный производитель медицинского оборудования. Allsheng предлагает инновационные решения в области лабораторной диагностики и других медицинских приложений.

                    10. CA-MI

                    CA-MI — семейная фабрика, основанная в начале 80-х годов в Италии. Наш партнер специализируется на производстве медицинского оборудования высокого качества, которое используется в различных медицинских учреждениях.

                    11. Ajax

                    Guangzhou Ajax Medical Equipment Co., Ltd — профессиональный производитель медицинского оборудования, основанный в 2007 году. Ajax предлагает широкий спектр продуктов, включая оборудование для реабилитации и физиотерапии.

                    12. Heal Force

                    Heal Force Bio-Meditech Holdings Limited — компания, основанная в 1989 году, специализирующаяся на разработке и производстве медицинского оборудования. Наш партнер предлагает инновационные решения в области хирургии и других медицинских специальностей.


                    Заключение

                    Наше партнерство с этими компаниями позволяет нам обеспечивать наших клиентов передовыми технологиями и высококачественным оборудованием, которые необходимы для успешной медицинской практики. Выбор INTERMED INNOVATION означает сотрудничество с лучшими производителями медицинского оборудования, которые помогут вам в достижении ваших медицинских целей.
                </section>
                <section aria-labelledby="application-title">
                    <Application />
                </section>
            </main>
        </>
    );
}
