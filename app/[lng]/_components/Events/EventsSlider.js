"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import eventImage1 from "@/public/images/news/events/1.png";
import eventImage2 from "@/public/images/news/events/2.png";
import eventImage3 from "@/public/images/news/events/3.png";
import eventImage4 from "@/public/images/news/events/4.png";

import EventCard from "../../_components/Events/EventCard";

import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';
export default function EventsSlider({data}) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'events-slider')
 

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-1 px-2  mb-[100px] mdl:mb-[150px]">
      <a href={`/${lng}/events`}>
        <h2 className="text-[25px] mdx:text-[33px] xl:text-[39px] font-semibold flex items-center mt-[40px] uppercase">
          {t('similar')}
        </h2>
      </a>
      <div className="w-full">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="p-2 mt-4">
              <EventCard title={item.name} imageSrc={item.photo.url} slug={item.slug} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
