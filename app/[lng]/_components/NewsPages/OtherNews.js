"use client"
import newsPhoto from "@/public/images/news/news-photo.png";
import NewCard from "../News/NewCard";
import Link from "next/link";
import GreenArrow from "../../_components/Buttons/GreenArrow";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function News() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'news-pages-other-news')
  const data = [
    {
      title: "The Future of Telemedicine and Remote Patient Monitoring",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "The Impact of Portable Medical Devices on Healthcare Accessibility",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "medical-devices",
    },
    {
      title: "The Future of Telemedicine and Remote Patient Monitoring",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "Children's health: Vaccination and prevention of infectious diseases",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "children",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mb-[150px] mt-[150px] mdx:mt-[190px] xl:mt-[230px]">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase">{t('other-news')}</h2>
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
        <a
          href={`/${lng}/news`}
          className="border-1 border py-3 px-12 hover:bg-[#E94B50] hover:text-[#FFF] transition-all duration-200 "
        >
          {t('all-news')}
        </a>
      </div>
    </div>
  );
}
