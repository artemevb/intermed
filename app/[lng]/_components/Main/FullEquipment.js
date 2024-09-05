"use client"
import uzi from "@/public/images/main/uzi.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function FullEquipments() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'equipment-main')
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 bg-[#F6F8F9]">
      {
        isMounted && <div>
          <div className="flex max-mdl:flex-col justify-between items-center lg:px-12 relative">
            <div className="mdx:px-3 max-lg:py-8">
              <h2 className="text-[#252324] uppercase text-[30px] mdx:text-[29px] xl:text-[45px] font-bold leading-8 lg:leading-[55px]">
                <span className="text-redMain">
                  {t('text-1')}
                  <br />
                </span>
                {t('text-2')}
              </h2>
              <p className="text-[15px] mdx:text-[18px] xl:text-[20px] text-[#808080] mt-3 mb-5 lg:mb-7 lg:leading-6">
                {t('subtitle-1')}
                <br />{t('subtitle-2')}
              </p>
              <a href={`/${lng}/equipment`}>
                <button className="text-white text-[14px] mdx:text-[16px] mt-[10px] bg-contactBg  py-[11px] min-w-[224px] mdl:max-w-[164px] flex items-center justify-center xl:max-w-[224px] xl:py-[15px] hover:bg-[#EE787C] font-bold">
                  {t('more-button')}
                </button>
              </a>
            </div>
            <div className="w-full lg:w-[50%] h-full flex ">
              <div className="w-full flex justify-center mdl:justify-end">
                <div className="w-full h-full bottom-0 left-0 mdx:max-w-[330px] mdx:max-h-[330px] xl:max-w-[400px] xl:max-h-[400px]">
                  <Image
                    src={uzi}
                    height={2000}
                    width={2000}
                    quality={100}
                    alt="Medical Equipment"
                    objectFit="contain"
                    className="min-w-full min-h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
