"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';



export default function CasesSlider() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'equipment-cases')
    const [data , setData] = useState([])
   
    const truncateDescription = (description) => {
        if (description.length > 89) {
            return description.substring(0, 94) + '...';
        }
        return description;
    };
    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get(`https://imed.uz/api/v1/client/all`, {
              headers: { 'Accept-Language': lng },
            });
            setData(response.data.data);
          } catch (error) {
            console.error('Failed to fetch news:', error.message);
          } 
        };
    
        fetchNews();
      }, [lng]);
 
    const settings = {
        arrows: false,
        infinite: true,
        spaceBetween: 20,
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
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] flex flex-col mx-auto">
            <h2 className="mx-[10px] text-3xl max-mdx:text-2xl font-semibold uppercase mb-[20px] ">
                {t('cases')}
            </h2>
            <div className="block">
                <Slider
                    {...settings}
                >
                    {data?.map(card => (
                        <div key={card.id} className="px-3">
                            <div className="max-h-[450px]">
                                <div className="bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[270px] flex items-center">
                                    <div className="mdx:flex mdx:flex-row items-center justify-between w-full">
                                        <div className="w-full max-w-[40%] h-[95px] relative mt-3 xl:mr-4 mx-auto xl:max-w-[45%] xl:h-[125px]">
                                            <Image src={card.logo.url} alt={card.title} quality={100} layout="fill" objectFit="contain" />
                                        </div>
                                        <div className="mdx:mb-4">
                                            <h2 className="text-xl font-bold right mt-3 mdx:mb-2 xl:text-[28px] mb-3">{card.name}</h2>
                                            <p className="mb-4 text-gray-600 xl:text-[18px]">{truncateDescription(card.description)}</p>
                                            <a href={`/${lng}/clients/${card.slug}`}>
                                                <span className="text-[#E31E24] font-semibold hover:underline mdx:text-[18px]">
                                                    {t('more-info')} →
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mt-[60px] flex items-center justify-center">
                <a
                    href={`/${lng}/clients`}
                    className="px-12 py-3 transition-all text-[#fff] duration-200 bg-[#E94B50] hover:bg-[#EE787C] hover:text-[#ffffff]"
                >
                    {t('see-all')}
                </a>
            </div>
        </div>
    );
}
