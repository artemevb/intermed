import "@/app/_styles/globals.css";
import Footer from "@/app/[lng]/_components/Footer/Footer";
import Header from './_components/Header/Header';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { LanguageProvider } from '../i18n/locales/LanguageContext';
// Удаляем импорт Head из 'next/head'
import ErrorBoundary from '@/app/[lng]/_components/ErrorBoundary';
import Script from 'next/script'; // Подключаем next/script для скриптов

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

// Используем функцию generateMetadata для добавления мета-тегов
export function generateMetadata({ params: { lng } }) {
    const title = "Медицинское оборудование в Ташкенте — Intermed Innovation";
    const description =
        "Компания Intermed Innovation представляет широкий ассортимент медицинского оборудования по доступным ценам. Осуществляем доставку медоборудования по всему Узбекистану.";

    const imageUrl = '/og.jpg'; // Используем относительный путь

    return {
        title: {
            template: "%s",
            default: title,
        },
        description: description,
        icons: {
            icon: "/favicon.ico",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/manifest.json",
        openGraph: {
            title: title,
            description: description,
            url: "/", // Относительный путь
            siteName: "Intermed Innovation",
            images: [
                {
                    url: imageUrl,
                    width: 800,
                    height: 600,
                },
            ],
            locale: lng,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [imageUrl],
        },
        themeColor: "#ffffff",
    };
}


export default function RootLayout({
    children,
    params: { lng },
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
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
                    ></iframe>
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
