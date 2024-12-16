import Application from "../_components/Main/Application";
import ListClients from "../_components/Clients/ListClients";
import Script from 'next/script';

export async function generateMetadata({ params }) {
    const { lng } = params;

    return {
        title: 'Медицинское оборудование для учреждений Узбекистана | INTERMED INNOVATION',
        description: 'INTERMED INNOVATION поставляет высококачественное медицинское оборудование для более чем 2000 медицинских учреждений в Узбекистане. Узнайте, как мы помогаем медицинским центрам и клиникам по всей стране.',
        openGraph: {
            title: 'Медицинское оборудование для учреждений Узбекистана | INTERMED INNOVATION',
            description: 'INTERMED INNOVATION поставляет высококачественное медицинское оборудование для более чем 2000 медицинских учреждений в Узбекистане. Узнайте, как мы помогаем медицинским центрам и клиникам по всей стране.',
            url: `https://imed.uz/${lng}/clients`,
            images: [
                {
                    url: 'https://imed.uz/og.jpg',
                    alt: 'Клиенты Intermed Innovation',
                    width: 1200,
                    height: 630,
                },
            ],
            locale: lng,
            site_name: 'Intermed Innovation',
        },
        twitter: {
            title: 'Медицинское оборудование для учреждений Узбекистана | INTERMED INNOVATION',
            description: 'INTERMED INNOVATION поставляет высококачественное медицинское оборудование для более чем 2000 медицинских учреждений в Узбекистане. Узнайте, как мы помогаем медицинским центрам и клиникам по всей стране.',
            images: ['https://imed.uz/og.jpg'],
            cardType: 'summary_large_image',
        },
        alternates: {
            canonical: `https://imed.uz/${lng}/clients`,
            languages: {
                ru: `https://imed.uz/ru/clients`,
                uz: `https://imed.uz/uz/clients`,
                en: `https://imed.uz/en/clients`,
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
    "url": "https://imed.uz",
    "logo": "https://imed.uz/og.jpg",
    "description": "INTERMED INNOVATION поставляет высококачественное медицинское оборудование для более чем 2000 медицинских учреждений в Узбекистане. Узнайте, как мы помогаем медицинским центрам и клиникам по всей стране.",
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
    },
};

export default function ClientsPage() {

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                key="jsonld-clients"
            />

            <main className="w-full bg-white flex flex-col gap-32 mx-auto px-4 sm:px-6 lg:px-8">
                <section aria-labelledby="clients-list-title">
                    <h2 id="clients-list-title" className="sr-only">Наши клиенты</h2>
                    <ListClients />
                </section>
                <section aria-label="Описание страницы с клиентами" className="sr-only">
                    INTERMED INNOVATION — надежный поставщик высококачественного медицинского оборудования для медицинских учреждений по всему Узбекистану. Мы гордимся долгосрочными партнёрствами с более чем 2000 медицинскими центрами, которые доверяют нам поставки оборудования для их ежедневной работы. Наши решения помогают обеспечивать точную диагностику, эффективное лечение и безопасность пациентов.

                    Наши клиенты и партнеры:

                    1. AKFA Medline University Hospital (AMUH):

                    Современная больница, оснащенная высокотехнологичными медицинскими устройствами от INTERMED INNOVATION, что позволяет обеспечивать лучшие медицинские услуги для своих пациентов.

                    2. NOVOMEDICS:

                    Оборудованная по последнему слову техники клиника, предоставляющая широкий спектр медицинских услуг с акцентом на комфорт пациентов.

                    3. Андижан Тиббиёт Диагностика:

                    Этот диагностический центр, работающий более 10 лет, использует наше оборудование для выполнения более 400 видов анализов, включая ультразвуковую диагностику.

                    4. Fergana Premium Medical:

                    Многопрофильный медицинский центр, обеспечивающий высококачественные диагностические и лечебные услуги.

                    5. GEPAMED ULTRA:

                    Центр, специализирующийся на современных методах лечения и использующий передовые решения для диагностики и терапии.

                    6. Namangan Tibbiy Diagnostika:

                    Центр, предоставляющий широкий спектр диагностических услуг, поддерживаемых надежным оборудованием от INTERMED INNOVATION.

                    7. Sirdaryo Darmom Servis:

                    Мы поставляем оборудование для проведения сложных медицинских процедур в этом медицинском учреждении.

                    8. Mashhura:

                    Клинико-диагностический центр, известный высоким стандартом обслуживания и использованием передового оборудования.

                    9. Himchan:

                    Первый в Узбекистане центр, специализирующийся на лечении грыжи позвоночника с помощью RACZ CATHETER.

                    10. Neyro Avicenna:

                    Специализированный центр в Навоийской области, предоставляющий высокотехнологичные медицинские услуги, включая нейрохирургию.

                    11. Alfa Med Service:

                    Центр, предлагающий современные решения для профилактики и лечения заболеваний.

                    12. Saydona:

                    Узбекско-германский проект, предоставляющий передовые решения для диагностики и лечения заболеваний.

                    13. Meridian Diagnostic Hospital EKO:

                    Специализируется на лечении бесплодия, предлагая высококачественное оборудование для диагностики и терапии.

                    14. Standart Diagnostika:

                    Оборудование для диагностики и терапии от INTERMED INNOVATION обеспечивает точность и надежность всех процедур.

                    15. Sevinch Medical Center:

                    Современный центр с широким спектром медицинских услуг, поддерживаемых инновационным оборудованием.

                    16. ZARMED Pratiksha:

                    Первая клиника в Самарканде, известная высоким качеством лечения и использовании передовых медицинских технологий.


                    Преимущества выбора INTERMED INNOVATION:

                    - Высокое качество продукции:

                    Мы поставляем только те устройства, которые соответствуют международным стандартам качества и безопасности.

                    - Своевременная доставка и установка:

                    Мы гарантируем минимальные задержки в поставках и быстроту установки оборудования, что позволяет вам эффективно использовать новые технологии в работе.

                    - Квалифицированное обучение персонала:

                    Мы предлагаем обучение для медицинского персонала, чтобы оборудование использовалось максимально эффективно и безопасно.


                    Заключение:

                    INTERMED INNOVATION продолжает развивать рынок медицинского оборудования в Узбекистане, предоставляя современные решения и высокий уровень сервиса для медицинских учреждений по всей стране. Мы стремимся к долгосрочным и успешным партнёрствам с нашими клиентами, обеспечивая их необходимыми ресурсами для эффективной работы и качества предоставляемых услуг.
                </section>
                <section aria-labelledby="application-title">
                    <h2 id="application-title" className="sr-only">Заявка</h2>
                    <Application />
                </section>
            </main>
        </>
    );
}
