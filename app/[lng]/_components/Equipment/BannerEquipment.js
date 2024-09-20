"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import Left from "@/public/svg/arrowLeftWhite.svg";
import Right from "@/public/svg/arrowRightWhite.svg";

import AskaQuestion from "../../_components/Modal/AskaQuestion";
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function BannerCarousel() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'banner-equipment');
    const [equipment, setEquipment] = useState([]);
    console.log('equipment:', equipment); // Store fetched data
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAskaQuestionModalOpen, setIsAskaQuestionModalOpen] = useState(false);

    useEffect(() => {
        const fetchBannerEquipment = async () => {
            try {
                const response = await axios.get(
                    "https://imed.uz/api/v1/complex-e",
                    {
                        headers: { 'Accept-Language': lng },
                    }
                );
                setEquipment(response.data.data); // Set equipment data from API
                console.log('Fetched equipment:', response.data.data); // Log the fetched data
            } catch (error) {
                console.error('Failed to fetch partner:', error.message);
            }
        };

        fetchBannerEquipment();
    }, [lng]);

    const openAskaQuestionModal = () => setIsAskaQuestionModalOpen(true);
    const closeAskaQuestionModal = () => setIsAskaQuestionModalOpen(false);

    return (
        <div className="relative w-full mx-auto overflow-hidden ">
            <div key={equipment.id} className="flex flex-col xl:flex-row bg-white overflow-hidden">
                <div className="xl:w-[50%] flex flex-col justify-center p-4 text-white 3xl:pl-[4%] 4xl:pl-[13%]">
                    <h1 className="text-[25px] uppercase mdx:text-[35px] mdl:text-[40px] font-semibold text-[#E31E24]">
                        {t('title-1')}<br />
                        <span className="text-black uppercase"> {t('title-2')}</span>
                    </h1>
                    <p className="mt-2 text-[#808080] text-[15px] mdx:text-[20px]">
                        {t('subtitle-1')}<br /> {t('subtitle-2')}
                    </p>
                    <button className="mt-4 bg-[#E94B50] text-[white] text-[14px] mdx:text-[16px] font-semibold py-[14px] mdx:py-[15.5px] px-4 max-w-[244px] mb-[25px] hover:bg-[#EE787C]"
                        onClick={openAskaQuestionModal}>
                        {t('button-1')}
                    </button>
                </div>

                <div className="xl:w-[50%] relative w-full h-auto">
                    {/* Slider is commented out, replace with a static image */}
                    {/* <Slider ref={sliderRef} {...settings}>
                        {equipment.map((item, index) => (
                            <div key={index} className="w-full flex justify-center items-center overflow-hidden ">
                                <Image
                                    src={item.photo.url} // Динамическое изображение из API
                                    alt={`Banner ${index + 1}`}
                                    width={2000}
                                    height={1000}
                                    quality={100} 
                                    layout="responsive"
                                    className="w-full h-full min-h-[485px] mdx:min-h-[606px] object-cover max-h-[640px] 4xl:max-h-[800px]"
                                />
                            </div>
                        ))}
                    </Slider> */}
                    {equipment.length > 0 && (
                        <Image
                            src={equipment[0].photo.url} // Display the first image as a static image
                            alt="Banner"
                            width={2000}
                            height={1000}
                            quality={100}
                            layout="responsive"
                            className="w-full h-full min-h-[485px] mdx:min-h-[606px] object-cover max-h-[640px] 4xl:max-h-[800px]"
                        />
                    )}
                </div>
            </div>
            {isAskaQuestionModalOpen && <AskaQuestion closeModal={closeAskaQuestionModal} />}
        </div>
    );
}
