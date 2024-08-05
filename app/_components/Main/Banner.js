"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import banner1 from "@/public/images/banners/banner.png";
import banner2 from "@/public/images/banners/banner.png";
import left from "@/public/svg/arrowleftbanners.svg";
import right from "@/public/svg/arrowrightbanners.svg";

const banners = [banner1, banner2];

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
      <div
        className="relative flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="min-w-full flex justify-center">
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={1440}
              height={500}
              className="w-full h-auto object-cover rounded-2xl xl:max-w-[92%]"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="hidden xl:block absolute top-1/2 left-2 transform -translate-y-1/2  p-2 opacity-70 hover:opacity-100 z-10"
      >
        <Image
          src={left}
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
          src={right}
          width={1440}
          height={500}
          className="w-full h-auto "
        />
      </button>
      <div className="flex justify-center mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-red-500" : "bg-gray-300"
              } mx-1`}
          ></button>
        ))}
      </div>
    </div>
  );
}
