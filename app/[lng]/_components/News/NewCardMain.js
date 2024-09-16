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
    <div className="w-full border border-[#E1E1E1] bg-white h-full flex flex-col   pb-5">
      <Image
        src={imageSrc}
        width={500}
        height={500}
        quality={100}
        alt={`News Image ${key}`}
        className="w-full h-auto object-cover"
      />
      <div className="w-full flex flex-col gap-5 pl-4 mt-5">
        <h3 className="text-xl max-mdx:text-lg font-semibold line-clamp-4">
          {title}
        </h3>
        {
          isMounted && <div className="xl:absolute xl:bottom-5">
            <GreenArrow title={t('more-details')} />
          </div>
        }
      </div>
      {/* <div className="w-full flex flex-col pl-4 mt-5">
        <h3 className="text-xl max-mdx:text-lg font-semibold line-clamp-4">
          {title}
        </h3>
        {
          isMounted && <div className="absolute bottom-5">
            <GreenArrow title={t('more-details')} />
          </div>
        }
      </div> */}


    </div >
  )
}
