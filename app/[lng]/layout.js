import "@/app/_styles/globals.css";
import Footer from "@/app/[lng]/_components/Footer/Footer";
import Header from './_components/Header/Header';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { LanguageProvider } from '../i18n/locales/LanguageContext';

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
    manifest: '/site.webmanifest'
};

export default function RootLayout({
    children,
    params: {
        lng
    }
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJ2PVRJC');
                        `,
                    }}
                />
                {/* Other head content */}
            </head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PJ2PVRJC"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>

                {/* Main Content */}
                <LanguageProvider lng={lng}>
                    <Header lng={lng} />
                    <main className="w-full bg-white relative">{children}</main>
                    <Footer lng={lng} />
                </LanguageProvider>
            </body>
        </html>
    );
}
