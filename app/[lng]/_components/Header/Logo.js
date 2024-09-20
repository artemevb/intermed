

import Image from "next/image";
import Link from 'next/link'
import logo from "@/public/images/intermed-logo.png";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Logo() {
  
  const lng = useLanguage();
  
  return (
    <>
      <a href={`/${lng}`} className="h-[46%] mdx:h-[50%] w-auto items-center flex">
        <Image
        quality={100}
          src={logo}
          width={300}
          height={300}
          alt="MRJ Logo"
          className="h-full w-auto"
        />
      </a>
    </>
  );
}


