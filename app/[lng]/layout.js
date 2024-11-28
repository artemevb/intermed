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

// Обновленная функция generateMetadata без title, description и images
export async function generateMetadata({ params: { lng } }) {
    return {
        openGraph: {
            url: `https://imed.uz/${lng}/`,
            locale: lng,
        },
        twitter: {
            title: 'Intermed Innovation — Медицинское оборудование в Ташкенте',
            description: 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.',
            images: ['https://imed.uz/og.jpg'], // Это можно удалить, если нужно.
        },
        alternates: {
            canonical: `https://imed.uz/${lng}/`,
            languages: languages.reduce((acc, language) => {
                acc[language] = `https://imed.uz/${language}/`;
                return acc;
            }, {}),
        },
    };
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
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://imed.uz/${lng}/`} />
                {/* Заголовок, описание и изображения оставляем в <Head> */}
                <meta name="description" content="Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану." />
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
                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-MDWVM3M');
                        `,
                    }}
                />
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MDWVM3M"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                        title="Google Tag Manager"
                    ></iframe>
                </noscript>

                {/* Yandex.Metrika (First Counter) */}
                <Script
                    id="yandex-metrika"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
                            m[i].l=1*new Date(); 
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} 
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
                            ym(98441120, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true
                            });
                        `,
                    }}
                />
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/98441120"
                            style={{ position: 'absolute', left: '-9999px' }}
                            alt="Yandex Metrika"
                        />
                    </div>
                </noscript>

                {/* Yandex.Metrika (Second Counter) */}
                <Script
                    id="yandex-metrika-second"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
                            m[i].l=1*new Date(); 
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} 
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
                            ym(98707553, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true,
                                ecommerce:"dataLayer"
                            });
                        `,
                    }}
                />
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/98707553"
                            style={{ position: 'absolute', left: '-9999px' }}
                            alt="Yandex Metrika Second Counter"
                        />
                    </div>
                </noscript>

                {/* Google Analytics gtag.js Integration */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-XNHBKVPHZX"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-XNHBKVPHZX');
                    `}
                </Script>

                <LanguageProvider lng={lng}>
                    <ErrorBoundary lng={lng}>
                        {children}
                    </ErrorBoundary>
                </LanguageProvider>
            </body>
        </html>
    );
}
