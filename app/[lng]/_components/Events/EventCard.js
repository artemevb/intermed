"use client"
import Image from "next/image";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function EventCard({ title, imageSrc, slug }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'event-card')

  return (
    <div className="relative overflow-hidden h-full">
      <a href={`/${lng}/events/${slug}`} >
        <div className="relative overflow-hidden h-full mdx:h-full grid grid-rows-2 w-full">
          <div className="relative row-span-2 col-span-2 h-[300px] mdx:h-[350px] w-full">
            <Image
              src={imageSrc}
              alt={title}
              quality={100}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full" // Убедитесь, что тут нет класса rounded
            />
          </div>
          <div className="bg-white pt-2 flex flex-col col-span-2">
            <h3 className="text-xl font-semibold text-black mb-4 mdx:text-[24px] mdx:uppercase max-w-[584px]">{title}</h3>
            <GreenArrow className="font-semibold text-[20px]" title={t("more")} />
          </div>
        </div>
      </a>
    </div>
  );
}
