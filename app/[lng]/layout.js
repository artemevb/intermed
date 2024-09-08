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
            <head />
            <body>
                <LanguageProvider lng={lng}>
                    <Header lng={lng} />
                    <main className="w-full bg-white relative">{children}</main>
                    <Footer lng={lng} />
                </LanguageProvider>
            </body>
        </html>
    );
}
