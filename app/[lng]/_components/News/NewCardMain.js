"use client"
import Image from "next/image"
import GreenArrow from "../Buttons/GreenArrow";
import { useTranslation } from '../../../i18n/client';
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function NewCard({ key, title, date, imageSrc }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'translation');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full border border-[#E1E1E1] bg-white h-full flex flex-col gap-2 justify-between">
      <Image
        src={imageSrc}
        width={500}
        height={500}
        quality={100}
        alt={`News Image ${key}`}
        className="w-full h-auto object-cover"
      />
      <div className="w-full flex flex-col gap-6 pl-4 py-[25px]">
        <h3 className="text-xl max-mdx:text-lg font-semibold line-clamp-4">
          {title}
        </h3>
        {
          isMounted && <div>
            <GreenArrow title={t('more-details')} />
          </div>
        }
      </div>
    </div >
  )
}
