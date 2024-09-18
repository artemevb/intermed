import "@/app/_styles/globals.css";
import Footer from "@/app/[lng]/_components/Footer/Footer";
import Header from './_components/Header/Header';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { LanguageProvider } from '../i18n/locales/LanguageContext';
import Head from 'next/head'; // Подключаем next/head
// import NotFound from './not-found'; 

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export const metadata = {
    title: {
        template: "%s",
        default: "Медицинское оборудование в Ташкенте — Intermed Innovation"
    },
    description: "Компания Intermed Innovation представляет широкий ассортимент медицинского оборудования по доступным ценам. Осуществляем доставку медоборудования по всему Узбекистану.",
    icons: {
        icon: [
            '/favicon.ico'
        ]
    },
};

export default function RootLayout({
    children,
    params: {
        lng
    }
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:title" content="Медицинское оборудование в Ташкенте — Intermed Innovation" />
                <meta property="og:description" content="Компания Intermed Innovation представляет широкий ассортимент медицинского оборудования по доступным ценам. Осуществляем доставку медоборудования по всему Узбекистану." />
                <meta property="og:image" content="https://imed.uz/og.jpg" />
                <meta property="og:url" content="https://imed.uz/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Медицинское оборудование в Ташкенте — Intermed Innovation" />
                <meta name="twitter:description" content="Компания Intermed Innovation представляет широкий ассортимент медицинского оборудования по доступным ценам. Осуществляем доставку медоборудования по всему Узбекистану." />
                <meta name="twitter:image" content="https://imed.uz/og.jpg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
                <meta name="theme-color" content="#ffffff" />
                <script
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
            </Head>
            <body>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MDWVM3M"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                <LanguageProvider lng={lng}>
                    <Header lng={lng} />
                    <main className="w-full bg-white relative">{children}</main>
                    <Footer lng={lng} />
                </LanguageProvider>
            </body>
        </html>
    );
}
