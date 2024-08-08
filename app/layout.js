
import dynamic from 'next/dynamic';
import "@/app/_styles/globals.css";
import Footer from "@/app/_components/Footer/Footer";

const Header = dynamic(() => import('@/app/_components/Header/Header'), { ssr: true });

export const metadata = {
  title: {
    template: "%s",
    default: "Intermed Innovation"
  },
  description: "Intermed Innovation in Uzbekistan"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Header />
        <main className="w-full bg-white relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}