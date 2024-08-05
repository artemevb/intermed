import { Lato } from 'next/font/google';
import dynamic from 'next/dynamic';
import "@/app/_styles/globals.css";
import Footer from "@/app/_components/Footer/Footer";

const Header = dynamic(() => import('@/app/_components/Header/Header'), { ssr: true });

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: "%s",
    default: "Intermed Innovation"
  },
  description: "Intermed Innovation in Uzbekistan"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="w-full bg-white relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
