"use client"
import newsPhoto from "@/public/images/news/news-photo.png";
import NewCard from "../News/NewCard";
import Link from "next/link";
import GreenArrow from "../../_components/Buttons/GreenArrow";
import { useTranslation } from '../../../i18n/client'
import { useEffect  , useState} from 'react';
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import axios from 'axios';
export default function News() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'news-pages-other-news')
  const [news, setNews] = useState([]);
  


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://213.230.91.55:8130/v1/new/get-all?page=1`, {
          headers: { 'Accept-Language': lng },
        });
        setNews(response.data.data);
      } catch (error) {
        console.error('Failed to fetch news:', error.message);
      }
    };

    fetchNews();
  }, [lng]);


  const slicedData = news.slice(0, 4);

  return (
    <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 mb-[150px] mt-[150px] mdx:mt-[190px] xl:mt-[230px]">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase">{t('other-news')}</h2>
      <div className="w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto">
        {slicedData.map((item, i) => {
          return (
            <a key={i} href={`/${lng}/news/${item.slug}`}>
              <NewCard
                key={i}
                title={item.head.heading}
                date={item.head.text}
                imageSrc={item.head.photo.url}
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
