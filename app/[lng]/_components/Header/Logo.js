import Image from "next/image";
import Link from 'next/link'
import logo from "@/public/images/intermed-logo.png";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Logo() {
  const lng = useLanguage();

  return (
    <Link href={`/${lng}`} className="flex items-center">
      <Image
        quality={100}
        src={logo}
        loading="lazy"
        alt="Imed Logo"
        className="w-32 h-auto md:w-48" // Adjust sizes as needed
      />
    </Link>
  );
}

