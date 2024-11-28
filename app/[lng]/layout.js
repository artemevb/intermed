import "@/app/_styles/globals.css";
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { LanguageProvider } from '../i18n/locales/LanguageContext';
import ErrorBoundary from '@/app/[lng]/_components/ErrorBoundary';
import Script from 'next/script';
import Head from 'next/head';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

// Модифицированная функция generateMetadata с учётом SEO
export async function generateMetadata({ params: { lng } }) {
    // Устанавливаем мета-данные для каждой локализации
    const metaData = {
        title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
        description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
        openGraph: {
            title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
            description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
            url: `https://imed.uz/${lng}/`,
            images: [
                {
                    url: 'https://imed.uz/og.jpg', // Используйте динамический URL изображения
                    alt: 'Intermed Innovation Logo',
                    width: 600,
                    height: 400,
                },
            ],
            locale: lng,
        },
        twitter: {
            title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
            description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
            images: ['https://imed.uz/og.jpg'],
        },
        alternates: {
            canonical: `https://imed.uz/${lng}/`,
            languages: languages.reduce((acc, language) => {
                acc[language] = `https://imed.uz/${language}/`;
                return acc;
            }, {}),
        },
    };

    return metaData;
}

export default function RootLayout({
    children,
    params: { lng },
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <Head>
                {/* SEO Metadata */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://imed.uz/${lng}/`} />
                <meta property="og:title" content="Intermed Innovation — Медицинское оборудование в Ташкенте" />
                <meta property="og:description" content="Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану." />
                <meta property="og:image" content="https://imed.uz/og.jpg" />
                <meta property="og:url" content={`https://imed.uz/${lng}/`} />
                <meta property="og:locale" content={lng} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Intermed Innovation — Медицинское оборудование в Ташкенте" />
                <meta name="twitter:description" content="Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану." />
                <meta name="twitter:image" content="https://imed.uz/og.jpg" />

                {/* JSON-LD Structured Data for Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Intermed Innovation",
                            "url": "https://imed.uz",
                            "logo": "https://imed.uz/logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+998781504747",
                                "contactType": "customer service",
                                "areaServed": "UZ",
                                "availableLanguage": ["Uzbek", "Russian", "English"]
                            },
                            "sameAs": [
                                "https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
                                "https://www.facebook.com/intermed.mindray",
                                "https://t.me/intermedtrade",
                                "https://www.youtube.com/@intermedinnovation9644"
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Chinobod ko'chasi 10a, Тоshkent, Toshkent",
                                "addressLocality": "Ташкент",
                                "postalCode": "100000",
                                "addressCountry": "UZ"
                            },
                            "founder": "Имя Основателя",
                            "foundingDate": "2020-01-01",
                            "description": "Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану."
                        }),
                    }}
                />
            </Head>
            <body>
                <LanguageProvider lng={lng}>
                    <ErrorBoundary lng={lng}>
                        {children}
                    </ErrorBoundary>
                </LanguageProvider>
            </body>
        </html>
    );
}
