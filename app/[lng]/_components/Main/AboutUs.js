"use client"
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from '../../../i18n/client'
import Imed from "@/public/images/main/intermed-about.png";
import { useState, useEffect } from "react";

export default function AboutUs({ lng }) {
  const { t } = useTranslation(lng, 'about')

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Устанавливаем состояние после монтирования компонента
  }, []);

  return (
    <div >
      {
        isMounted && <div className="flex max-xl:flex-col gap-12 max-lg:gap-8 mx-auto xl:h-[600px] w-full h-auto max-w-[1440px] px-2 ">
          <h2 className="text-2xl font-semibolod w-full xl:hidden lh">
            <span className="text-redMain">{t('intermed_innovation')}</span><br />
            {t('reliable_supplier')}
          </h2>
          <Image
            src={Imed}
            width={1000}
            height={1000}
            alt="Intermed Main Photo"
            className="w-full xl:w-[450px] 2xl:w-[590px] object-cover xl:h-full"
          />
          <div className="h-full xl:w-2/3 flex flex-col justify-between ">
            <h2 className="text-4xl font-semibolod w-full max-xl:hidden 2xl:max-w-[510px] lh">
              <span className="text-redMain">{t('intermed_innovation')}</span><br />
              {t('reliable_supplier')}
            </h2>
            <p className="text-[#808080] w-full 2xl:max-w-[550px] mb-[30px] xl:mb-0">
              {t('description')}
            </p>
            <div className="grid gap-4 grid-4 grid-cols-2 grid-rows-2 xl:max-w-[722px]">
              <div className="border px-6 flex justify-center flex-col max-2xl:py-2 xl:py-5 max-xl:py-6 py-6">
                <h3 className="text-redMain text-2xl font-bold">{t('years_of_experience')}</h3>
                <p className="text-neutral-400">{t('years_of_experience_description')}</p>
              </div>
              <div className="border px-6 flex justify-center flex-col 2xl:py-2">
                <h3 className="text-redMain text-2xl font-bold">{t('successful_sales')}</h3>
                <p className="text-neutral-400">{t('successful_sales_description')}</p>
              </div>
              <div className="border px-6 flex justify-center flex-col 2xl:py-2">
                <h3 className="text-redMain text-2xl font-bold">{t('suppliers')}</h3>
                <p className="text-neutral-400">{t('suppliers_description')}</p>
              </div>
              <div className="border px-6 flex justify-center flex-col 2xl:py-2">
                <h3 className="text-redMain text-2xl font-bold">{t('satisfied_customers')}</h3>
                <p className="text-neutral-400">{t('satisfied_customers_description')}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}