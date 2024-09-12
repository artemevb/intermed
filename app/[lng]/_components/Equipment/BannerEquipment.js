"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
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

    // Fetch data from API
    // useEffect(() => {
    //     axios("https://imed.uz/api/v1/complex-e", {
    //         headers: {
    //             "Accept-Language": lng,
    //         },
    //     }).then((response) => {
    //         setEquipment(response.data.data); // Set equipment data from API
    //     });
    // }, [lng]);
    useEffect(() => {
        const fetchBannerEquipment = async () => {
            try {
                const response = await axios.get(
                    `https://imed.uz/api/v1/complex-e`,
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



    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

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
                    <button className="mt-4 bg-[#E94B50] text-[white] text-[14px] mdx:text-[16px] font-semibold py-[14px] mdx:py-[15.5px] px-4 max-w-[244px] mb-[25px]"
                        onClick={openAskaQuestionModal}>
                        {t('button-1')}
                    </button>
                </div>


                <div className="xl:w-[50%] relative w-full h-auto">
                    <Slider ref={sliderRef} {...settings}>
                        {equipment.map((item, index) => (
                            <div key={index} className="w-full flex justify-center items-center overflow-hidden ">
                                <Image
                                    src={item.photo.url} // Динамическое изображение из API
                                    alt={`Banner ${index + 1}`}
                                    width={2000}
                                    height={1000}
                                    quality={100} // Заменяем layout на fill для полного заполнения
                                    layout="responsive"
                                    className="w-full h-full min-h-[485px] mdx:min-h-[606px] object-cover max-h-[640px] 4xl:max-h-[800px]" // Растягиваем по высоте и ширине
                                />
                            </div>

                        ))}
                    </Slider>

                    <div className="absolute bottom-0 flex flex-row  ml-[10px] mdx:ml-[20px] mdl:ml-[30px] mb-[30px] xl:mb-[35px]">
                        <div className="text-[#ffff] lh text-[25px] max-w-[160px] md:max-w-[180px] mdx:max-w-[300px] mdl:max-w-[370px] md:text-[30px] mdx:text-[35px] mdl:text-[35px] xl:text-[30px] xl:max-w-[400px] 2xl:max-w-[400px] 3xl:text-[40px] break-words whitespace-normal">
                            {equipment[currentSlide]?.name}
                        </div>
                    </div>
                    <div className="absolute bottom-0 flex flex-row items-center  right-[5%] mb-[30px] xl:mb-[35px]">
                        <div className="flex flex-row ml-auto transition-all duration-500">
                            <button
                                onClick={prevSlide}
                                className="right-2 transform p-1 opacity-70 hover:opacity-100 z-10 w-[45px] md:w-[50px] mdx:w-[60px] mdl:w-[70px] 3xl:w-[80px]"
                            >
                                <Image
                                    src={Left}
                                    width={50}
                                    height={50}
                                    className="w-full h-auto"
                                />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="right-2 transform p-1 opacity-70 hover:opacity-100 z-10 w-[45px] md:w-[50px] mdx:w-[60px] mdl:w-[70px] 3xl:w-[80px]"
                            >
                                <Image
                                    src={Right}
                                    width={50}
                                    height={50}
                                    className="w-full h-auto"
                                />
                            </button>
                        </div>
                    </div>



                </div>



            </div>
            {isAskaQuestionModalOpen && <AskaQuestion closeModal={closeAskaQuestionModal} />}
        </div>
    );
}
