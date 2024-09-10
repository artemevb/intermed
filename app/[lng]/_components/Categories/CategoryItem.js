"use client"
import Image from "next/image";
import GreenArrow from "../Buttons/GreenArrow";
import { useTranslation } from '../../../i18n/client';
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function CategoryItem({ key, title, imageSrc, slug }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'translation');
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <a href={`/${lng}/categories/catalog/${slug}`}>
      <div
        key={key}
        className="w-full border overflow-hidden transition-all duration-200 relative mdl:pb-72 max-mdl:h-[180px] flex flex-row items-center gap-5 mdl:flex-col h-[300px] px-2 mdl:px-6 mdl:py-6 max-mdl:pt-[20px] max-mdl:pl-[15px] "
      >
        <div className="z-[9999] mdl:flex flex-col mdl:items-center max-mdl:max-w-[167px] flex h-full content-start wrap">
          <h2 className=" max-mdx:text-[18px] lh text-2xl mb-2 font-semibold mdl:text-center z-10 mdl:mx-auto max-mdl:mb-[5px] ">{title}</h2>

          {
            isMounted && <div>
              <GreenArrow title={t('go')} />
            </div>
          }

        </div>
        <div className="mdl:flex mdl:flex-col mdl:items-center flex-1 max-mdl:flex max-mdl:justify-end">
          <Image
            src={imageSrc}
            width={700}
            height={700}
            quality={100}
            alt={`${title} Photo`}
            className="absolute h-full max-mdx:max-w-[157px] z-0 object-contain -bottom-10 mdl:-bottom-14 mdl:w-[75%]  mdx:-bottom-6 mdl:h-[86%] max-mdl:w-auto max-mdl:h-full max-mdl:right-0"
          />
        </div>
      </div>
    </a>
  );
}
