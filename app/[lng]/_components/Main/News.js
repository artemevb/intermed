"use client";

import newsPhoto from "@/public/images/news/news-photo.png";
import NewCard from "../News/NewCard";
import { useTranslation } from '../../../i18n/client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function News() {
  const lng = useLanguage(); 
  const { t } = useTranslation(lng, 'news');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = [
    {
      title: "Мастер класс: актуальные вопросы ультразвуковой диагностики пренатальном",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "Мастер класс: актуальные вопросы ультразвуковой диагностики пренатальном",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "medical-devices",
    },
    {
      title: "Мастер класс: актуальные вопросы ультразвуковой диагностики пренатальном",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "Мастер класс по УЗД. Абышева Мария Сергеевна",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "children",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 ">
      {
        isMounted && <div className="flex flex-col gap-8">
          <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase">{t('title')}</h2>
          <div className="w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto">
            {data.map((item, i) => {
              return (
                <a key={i} href={`/${lng}/news/${item.slug}`}>
                  <NewCard
                    key={i}
                    title={item.title}
                    date={item.date}
                    imageSrc={item.imageSrc}
                  />
                </a>
              );
            })}
          </div>
          <div className="flex w-full justify-center">
            <a href={`/${lng}/news`} className=" border border-neutral-300 px-12 py-3 transition-all duration-200 hover:bg-[#E94B50] hover:text-[#ffffff] font-bold">
              {t('title-button')}
            </a>
          </div>
        </div>
      }
    </div>
  );
}
