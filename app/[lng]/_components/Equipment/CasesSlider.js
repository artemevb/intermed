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
    const [data, setData] = useState([])

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
                            <a href={`/${lng}/clients/${card.slug}`}>
                                <div className="max-h-[450px]">
                                    <div className="bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[270px] flex items-center">
                                        <div className="mdx:flex mdx:flex-row items-center justify-between w-full">
                                            {/* Контейнер изображения с фиксированной шириной и высотой */}
                                            <div className="w-full h-[200px] xl:max-h-[270px] relative mt-3 xl:mr-4 mx-auto xl:w-[40%]">
                                                {/* Изображение с фиксированной шириной и высотой */}
                                                <Image
                                                    src={card.logo.url}
                                                    alt={card.title}
                                                    quality={100}
                                                    layout="fill"
                                                    className="object-contain w-full h-full "
                                                />
                                            </div>
                                            <div className="mdx:mb-4 w-full xl:w-[60%]">
                                                <h2 className="text-xl font-bold right mt-3 mdx:mb-2 xl:text-[28px] mb-3">{card.name}</h2>
                                                <p className="mb-4 text-gray-600 xl:text-[18px]">{truncateDescription(card.description)}</p>
                                                <span className="text-[#E31E24] font-semibold hover:underline mdx:text-[18px]">
                                                    {t('more-info')} →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
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
