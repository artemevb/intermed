"use client";
import Image from "next/image";
import imed from "@/public/images/main/intermed-about.png";
import { useState, useEffect } from "react";
import { useTranslation } from '../../../i18n/client'

export default function Banner({ lng }) {
  const { t } = useTranslation(lng, 'about')

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Устанавливаем состояние после монтирования компонента
  }, []);



  return (
    <div>
      {isMounted && (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] flex flex-col 2xl:flex-row mx-auto h-auto items-center xl:h-[812px] 5xl:h-[812px] ">
          <div className="flex-1 h-full flex justify-center px-2 5xl:mr-0 5xl:flex-none 5xl:w-[60%] xl:mr-[20px] 3xl:mr-[40px] 4xl:mr-[100px]">
            <div className="w-full flex flex-col gap-8 justify-between h-full 5xl:mr-[200px]">
              <div className="2xl:mt-9 mt-6 lh text-black text-[24px] mdx:text-[35px] xl:text-[40px] font-medium 2xl:w-[650px] 5xl:w-[87%]">
                <h1 className="text-redMain text-[24px] font-semibold mdx:text-[35px] xl:text-[40px] uppercase tracking-tight">
                  {t('intermed_innovation')}
                </h1>
                <span className="font-semibold">{t('reliable_supplier')}</span>
                <div className="text-[24px] mt-[14px] text-blacklighttxt mdx:text-[18px] xl:text-[20px] 2xl:text-[22px] normal-case 5xl:mt-[40px]">
                  {t('description')}
                </div>
              </div>
              <div className="hidden 2xl:grid gap-4 grid-cols-2 w-full normal-case">
                <div className="flex flex-col justify-center items-center mdx:items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
                  <div className="text-[25px] md:text-[30px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                    {t('years_of_experience')}
                  </div>
                  <div className="text-[18px] md:text-[20px] text-[#808080]">
                    {t('years_of_experience_description')}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mdx:items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
                  <div className="text-[25px] md:text-[30px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                    {t('successful_sales')}
                  </div>
                  <div className="text-[18px] md:text-[20px] text-[#808080]">
                    {t('successful_sales_description')}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mdx:items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
                  <div className="text-[25px] md:text-[30px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                    {t('suppliers')}
                  </div>
                  <div className="text-[18px] md:text-[20px] text-[#808080]">
                    {t('suppliers_description')}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mdx:items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
                  <div className="text-[25px] md:text-[30px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                    {t('satisfied_customers')}
                  </div>
                  <div className="text-[18px] md:text-[20px] text-[#808080]">
                    {t('satisfied_customers_description')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex relative 2xl:w-[45%] 5xl:w-[40%]">
            <div className="w-full flex justify-center">
              <div className="w-full h-full bottom-0 left-0 py-[25px] mdx:py-[35px] 2xl:py-[0px]">
                <Image
                  src={imed}
                  quality={100}
                  alt="Medical Equipment"
                  objectFit="cover"
                  className="min-w-full min-h-full 5xl:min-w-0 "
                />
              </div>
            </div>
          </div>
          <div className="grid 2xl:hidden gap-4 grid-cols-2 w-full normal-case px-2 mdx:px-[10px]">
            <div className="flex flex-col justify-center items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
              <div className="text-[22px] md:text-[28px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                {t('years_of_experience')}
              </div>
              <div className="text-[14px] md:text-[18px] text-[#808080]">
                {t('years_of_experience_description')}
              </div>
            </div>
            <div className="flex flex-col justify-center items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
              <div className="text-[22px] md:text-[28px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                {t('successful_sales')}
              </div>
              <div className="text-[14px] md:text-[18px] text-[#808080]">
                {t('successful_sales_description')}
              </div>
            </div>
            <div className="flex flex-col justify-center items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
              <div className="text-[22px] md:text-[28px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                {t('suppliers')}
              </div>
              <div className="text-[14px] md:text-[18px] text-[#808080]">
                {t('suppliers_description')}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mdx:items-start p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
              <div className="text-[22px] md:text-[28px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                {t('satisfied_customers')}
              </div>
              <div className="text-[14px] md:text-[18px] text-[#808080]">
                {t('satisfied_customers_description')}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );

}
