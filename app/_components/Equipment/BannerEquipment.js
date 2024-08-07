"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import banner1 from "@/public/images/equipment/EQ.png";
import banner2 from "@/public/images/equipment/EQ.png";
import banner3 from "@/public/images/equipment/EQ.png";

import Left from "@/public/svg/arrowLeftWhite.svg";
import Right from "@/public/svg/arrowRightWhite.svg";

import AskaQuestion from "@/app/_components/Modal/AskaQuestion";

const banners = [banner1, banner2, banner3];

export default function BannerCarousel() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true, // Enable dots navigation
        arrows: false, // Disable built-in arrows
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };


    const [isAskaQuestionModalOpen, setIsAskaQuestionModalOpen] = useState(false);

    const openAskaQuestionModal = () => setIsAskaQuestionModalOpen(true);
    const closeAskaQuestionModal = () => setIsAskaQuestionModalOpen(false);

    return (
        <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
            <div className="flex flex-col xl:flex-row bg-white overflow-hidden">
                <div className="xl:w-[50%] flex flex-col justify-center p-4 text-white ">
                    <h1 className="text-[25px] mdx:text-[35px] mdl:text-[40px] font-semibold text-[#E31E24]">
                        КОМПЛЕКСНОЕ <br />
                        <span className="text-black">ОСНАЩЕНИЕ КЛИНИК</span>
                    </h1>
                    <p className="mt-2 text-[#808080] text-[15px] mdx:text-[20px]">
                        Полное решение для оснащения <br />медицинских учреждений
                    </p>
                    <button className="mt-4 bg-[#E94B50] text-[white] text-[14px] mdx:text-[16px] font-semibold py-[14px] mdx:py-[15.5px] px-4 w-[224px] mb-[25px]"
                    onClick={openAskaQuestionModal}>
                        Заказать установку
                    </button>
                </div>
                <div className="xl:w-[50%] relative">
                    <Slider ref={sliderRef} {...settings}>
                        {banners.map((banner, index) => (
                            <div key={index} className="min-w-full flex justify-center">
                                <Image
                                    src={banner}
                                    alt={`Banner ${index + 1}`}
                                    width={1440}
                                    height={500}
                                    className="w-full h-auto object-cover "
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute bottom-0 flex flex-row items-center ml-[10px] mdx:ml-[30px] mb-[20px] xl:mb-[30px] ">
                        <div className="text-[#fff] lh text-[20px] max-w-[160px] md:max-w-[200px] mdx:max-w-[250px] mdl:max-w-[320px] md:text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[30px] xl:max-w-[230px] 2xl:max-w-[270px] 3xl:max-w-[340px] 3xl:text-[40px] ">
                            Оснащение Vitamed Medical
                        </div>
                        <div className="flex flex-row translate-x-[35%] slg:ml-[150px] transition-all duration-500 lg:ml-[250px] xl:ml-0">
                            <button
                                onClick={prevSlide}
                                className=" left-2 transform  p-1 opacity-70 hover:opacity-100 z-10 w-[45px] md:w-[50px] mdx:w-[60px] mdl:w-[70px] 3xl:w-[80px]"
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
                                className=" right-2 transform  p-1 opacity-70 hover:opacity-100 z-10 w-[45px] md:w-[50px] mdx:w-[60px] mdl:w-[70px] 3xl:w-[80px]"
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
