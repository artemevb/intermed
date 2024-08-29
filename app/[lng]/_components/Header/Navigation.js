"use client"
import Link from "next/link";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Navigation({ navOptions}) {
  const lng = useLanguage();
  return (
    <nav className="h-full flex gap-10 items-center max-2xl:hidden">
      {navOptions.map((item, i) => {
        return (
          <a href={`/${lng}/${item.slug}`} key={i}>
            <div className="text-[#252324] font-medium text-[18px] hover:text-gray-400 transition-all duration-300 whitespace-nowrap">
              {item.title}
            </div>
          </a>
        );
      })}
    </nav>
  );
}
