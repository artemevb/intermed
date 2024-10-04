
import "@/app/_styles/globals.css";
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { LanguageProvider } from '../i18n/locales/LanguageContext';
import ErrorBoundary from '@/app/[lng]/_components/ErrorBoundary';
import Script from 'next/script';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

// Глобальные метаданные для всего приложения
export function generateMetadata({ params: { lng } }) {
    const defaultTitle = 'Intermed Innovation — Медицинское оборудование в Ташкенте';
    const defaultDescription = 'Intermed Innovation предлагает широкий ассортимент медицинского оборудования по доступным ценам с доставкой по всему Узбекистану.';
    const defaultUrl = `https://imed.uz/${lng}`;
    const defaultImage = 'https://imed.uz/og.jpg';

    return {
        title: {
            template: `%s | ${defaultTitle}`,
            default: defaultTitle,
        },
        description: defaultDescription,
        openGraph: {
            title: defaultTitle,
            description: defaultDescription,
            url: defaultUrl,
            type: 'website',
            locale: lng,
            images: [
                {
                    url: defaultImage,
                    width: 1200,
                    height: 630,
                    alt: 'Intermed Innovation - Медицинское оборудование',
                },
            ],
            site_name: 'Intermed Innovation',
        },
        twitter: {
            card: 'summary_large_image',
            title: defaultTitle,
            description: defaultDescription,
            images: [defaultImage],
        },
        alternates: {
            canonical: defaultUrl,
            languages: languages.reduce((acc, language) => {
                acc[language] = `https://imed.uz/${language}`;
                return acc;
            }, {}),
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        icons: {
            icon: "https://imed.uz/favicon.ico",
            apple: "https://imed.uz/apple-touch-icon.png",
        },
        manifest: "https://imed.uz/manifest.json",
        themeColor: "#ffffff",
    };
}


export default function RootLayout({
    children,
    params: { lng },
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                {/* Подключение robots.txt и sitemap.xml */}
                <link rel="robots" href="/robots.txt" />
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
            </head>
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

                {/* Yandex.Metrika */}
                <Script
                    id="yandex-metrika"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

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

                <LanguageProvider lng={lng}>
                    <ErrorBoundary lng={lng}>
                        {children}
                    </ErrorBoundary>
                </LanguageProvider>
            </body>
        </html>
    );
}
