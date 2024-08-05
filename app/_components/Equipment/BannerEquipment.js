"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import bunner1 from "@/public/images/equipment/EQ.png";
import bunner2 from "@/public/images/equipment/EQ.png";
import Left from "@/public/svg/arrowLeftWhite.svg";
import Right from "@/public/svg/arrowRightWhite.svg";

const slides = [
    {
        image: bunner1,
        caption: "Оснащение Vitamed Medical",
    },
    {
        image: bunner2, // Replace with the path to your second image
        caption: "Another Slide",
    },
    // Add more slides as needed
];

export default function BannerEquipmentSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef(null);

    useEffect(() => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 7000);
        return () => clearInterval(slideInterval.current);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <div className="bg-white overflow-hidden">
                <div>
                    <div className="p-4 text-white flex flex-col justify-start">
                        <h1 className="text-[25px] mdx:text-[35px] mdl:text-[40px] font-semibold text-[#E31E24]">
                            КОМПЛЕКСНОЕ <br />
                            <span className="text-black">ОСНАЩЕНИЕ КЛИНИК</span>
                        </h1>
                        <p className="mt-2 text-[#808080] text-[15px] mdx:text-[20px]">
                            Полное решение для оснащения медицинских учреждений
                        </p>
                        <button className="mt-4 bg-[#E94B50] text-[white] text-[14px] font-semibold py-[14px] mdx:py-[15.5px] px-4 w-[224px] mb-[25px]">
                            Заказать установку
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className="relative flex transition-transform duration-700"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full flex justify-center">
                                <Image
                                    src={slide.image}
                                    alt={`Banner ${index + 1}`}
                                    width={1440}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="relative flex justify-between ">
                        <button
                            onClick={prevSlide}
                            className="hidden xl:block absolute top-1/2 left-2 transform -translate-y-1/2  p-2 opacity-70 hover:opacity-100 z-10"
                        >
                            <Image
                                src={Left}
                                width={1440}
                                height={500}
                                className="w-full h-auto "
                            />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="hidden xl:block absolute top-1/2 right-2 transform -translate-y-1/2  p-2 opacity-70 hover:opacity-100 z-10"
                        >
                            <Image
                                src={Right}
                                width={1440}
                                height={500}
                                className="w-full h-auto "
                            />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
