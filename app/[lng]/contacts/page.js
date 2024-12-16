import Map from "../_components/Contacts/Map";
import Application from "../_components/Main/Application";
import Representatives from "../_components/Contacts/Representatives";
import Script from 'next/script';


export async function generateMetadata({ params }) {
    const { lng } = params;

    return {
        title: 'Контакты INTERMED INNOVATION: Ваш надежный партнер в мире медицинского оборудования',
        description: 'Свяжитесь с компанией Intermed Innovation для получения консультаций, заказов и поддержки. Узнайте, где нас найти и как с нами связаться.',
        openGraph: {
            title: 'Контакты INTERMED INNOVATION: Ваш надежный партнер в мире медицинского оборудования',
            description: 'Свяжитесь с компанией Intermed Innovation для получения консультаций, заказов и поддержки. Узнайте, где нас найти и как с нами связаться.',
            url: `https://imed.uz/${lng}/contacts`,
            images: [
                {
                    url: 'https://imed.uz/og.jpg',
                    alt: 'Контакты Intermed Innovation',
                    width: 1200,
                    height: 630,
                },
            ],
            locale: lng,
            site_name: 'Intermed Innovation',
        },
        twitter: {
            title: ' Контакты INTERMED INNOVATION: Ваш надежный партнер в мире медицинского оборудования',
            description: 'Свяжитесь с компанией Intermed Innovation для получения консультаций, заказов и поддержки. Узнайте, где нас найти и как с нами связаться.',
            images: ['https://imed.uz/og.jpg'],
            cardType: 'summary_large_image',
        },
        alternates: {
            canonical: `https://imed.uz/${lng}/contacts`,
            languages: {
                ru: `https://imed.uz/ru/contacts`,
                uz: `https://imed.uz/uz/contacts`,
                en: `https://imed.uz/en/contacts`,
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
    "@type": "Organization",
    "name": "Intermed Innovation",
    "url": "https://imed.uz/ru/contacts",
    "logo": "https://imed.uz/og.jpg",
    "sameAs": [
        "https://www.youtube.com/@intermedinnovation9644",
        "https://t.me/intermedtrade",
        "https://www.facebook.com/intermed.mindray",
        "https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971543980707",
        "contactType": "customer service",
        "areaServed": "UZ",
        "availableLanguage": "ru"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "г. Ташкент, Юнусабадский р-он, ул. Чинобод 10А",
        "addressLocality": "Ташкент",
        "postalCode": "100000",
        "addressCountry": "UZ"
    }
};

export default function ContactsPage({ params }) {

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                key="jsonld-contacts"
            />

            <main className="w-full bg-white flex flex-col gap-32 mx-auto px-4 sm:px-6 lg:px-8">
                <section aria-labelledby="map-title">
                    <h1 id="map-title" className="sr-only">Карта с офисами компании</h1>
                    <Map />
                </section>

                <section aria-labelledby="representatives-title">
                    <h2 id="representatives-title" className="sr-only">Наши представители</h2>
                    <Representatives />
                </section>
                <section aria-label="Описание страницы с клиентами" className="sr-only">
                    **Как с нами связаться:**

                    - **Телефон:** +998 78 150-47-47
                    - **Электронная почта:** [info@imed.uz](mailto:info@imed.uz)
                    - **Адрес:** г. Ташкент, Юнусабадский район, ул. Чинобод, 10А
                    - **Бизнес-часы:** Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 14:00

                    ---

                    **Наша команда всегда готова к сотрудничеству!**

                    Мы ценим ваше время и стремимся к быстрому и эффективному взаимодействию. Для удобства клиентов, мы предоставляем несколько способов связи:

                    - **Звоните нам** по указанному телефону для консультаций и заказов.
                    - **Отправьте email** для письменного общения с нашими специалистами.
                    - **Посетите нас** по указанному адресу.

                    **Остались вопросы?**

                    Не стесняйтесь задавать их! Мы с радостью предоставим все необходимые консультации и поможем подобрать оптимальное медицинское оборудование для вашей клиники или медицинского центра.

                    Международные представительства

                    MRJ Trade
                    Адрес: Дубай, Дейра, Банияс Роуд, Близнецы, 20
                    Страна: ОАЭ
                    Часы работы: 09:00 - 18:00
                    Электронная почта: [info@mrjtrade.ae](mailto:info@mrjtrade.ae)
                    Телефон: +971 52 497 9914

                    Alnair Medical
                    Адрес: Алматы, ул. Тимирязева, 42, стр. 15/109, офис 301-304
                    Страна: Казахстан
                    Часы работы: 09:00 - 18:00
                    Электронная почта: [sales@alnair.kz](mailto:sales@alnair.kz)
                    Телефон: +7 700 836 8710

                    Intermed Innovation
                    Адрес: Москва, ул. Пресненский Проспект, 106
                    Страна: Россия
                    Часы работы: 09:00 - 18:00
                    Электронная почта: [info@imedrf.ru](mailto:info@imedrf.ru)
                    Телефоны: +7 495 920 8100, +7 985 810 0791
                </section>
                <section aria-labelledby="application-title">
                    <h2 id="application-title" className="sr-only">Заявка</h2>
                    <Application />
                </section>
            </main>
        </>
    );
}
