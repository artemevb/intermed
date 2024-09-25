"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import Catalogitem from "../Catalog/Catalogitem";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function AlsoTake({data}) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'also-take')

  const settings = {
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-8 px-2">
      <h2 className="text-3xl max-mdx:text-2xl font-bold uppercase">
        {t('also-take')}
      </h2>
      <div className="w-full">
        <div className="w-full mdx:px-2 xl:px-4">
          <Slider {...settings} className="h-auto flex">
            {data.map((item, index) => (
              <div key={index} className="p-2">
                <Catalogitem
                new={item.new}
                sale={item.sale}
                image={item.gallery[0]?.url}
                title={item.name}
                description={item.shortDescription}
                price={item.originalPrice}
                slug={item.slug}
                discount={item.discount}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex w-full justify-center">
        {/* <a
          href={`/${lng}/categories`}
          className="border border-greenView px-12 py-3 hover:bg-[#E94B50] transition-all font-bold duration-200 hover:text-[#FFF]"
        >
          {t('all-products')}
        </a> */}
      </div>
    </section>
  );
}
