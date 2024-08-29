"use client"
import uzi from "@/public/images/equipments/uzi.png";
import lab from "@/public/images/equipments/lab-equip.png";
import colba from "@/public/images/equipments/colba.png";
import radio from "@/public/images/equipments/radio.png";
import CategoryItem from "../Categories/CategoryItem";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Equipments() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'equipments-main')
  const [isMounted, setIsMounted] = useState(false);

  // const getALlProducts = async () => {
  //   const data = await 
  // }

  useEffect(() => {
    setIsMounted(true); 
  }, []);
  const data = [
    {
      title: "УЗД оборудование",
      imageSrc: uzi,
      slug: "ultrasound"
    },
    {
      title: "Лабораторное оборудование",
      imageSrc: lab,
      slug: "lab"
    },
    {
      title: "Реагенты и расходные материалы",
      imageSrc: colba,
      slug: "reagents"
    },
    {
      title: "Радиология",
      imageSrc: radio,
      slug: "radiology"
    },
  ];
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 ">
      {
        isMounted && <div className="flex flex-col gap-8">
          <h2 className="text-3xl max-mdl:text-2xl font-semibold uppercase">
            {t('title')}
          </h2>
          <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.map((item, i) => (
              <CategoryItem key={i} title={item.title} imageSrc={item.imageSrc} slug={item.slug} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <a href={`/${lng}/categories`} className=" border border-neutral-300 px-12 py-3 transition-all hover:text-white hover:bg-[#E94B50] duration-200 font-bold">
              {t('all-categories')}
            </a>
          </div>
        </div>
      }
    </div>
  );
}
