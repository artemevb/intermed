"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Carousel } from "react-spring-carousel";
import banner1 from "@/public/images/banners/banner.png";
import banner2 from "@/public/images/banners/banner.png";
import banner3 from "@/public/images/banners/banner.png";

import left from "@/public/svg/arrowleftbanners.svg";
import right from "@/public/svg/arrowrightbanners.svg";

const banners = [banner1, banner2, banner3];

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const slides = banners.map((banner, index) => ({
    id: index,
    renderItem: (
      <div key={index} className="min-w-full flex justify-center">
        <Image
          src={banner}
          alt={`Banner ${index + 1}`}
          width={1440}
          height={500}
          className="w-full h-auto object-cover rounded-2xl xl:max-w-[92%]"
        />
      </div>
    ),
  }));

  return (
    <div
      className="relative w-full max-w-[1440px] mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Carousel
        items={slides}
        activeItemIndex={currentSlide}
        onActiveItemChange={({ itemIndex }) => setCurrentSlide(itemIndex)}
        autoPlayInterval={7000}
        autoPlay
      />
      <button
        onClick={prevSlide}
        className="hidden xl:block absolute top-1/2 left-2 transform -translate-y-1/2 p-2 opacity-70 hover:opacity-100 z-10"
      >
        <Image
          src={left}
          width={1440}
          height={500}
          className="w-full h-auto"
        />
      </button>
      <button
        onClick={nextSlide}
        className="hidden xl:block absolute top-1/2 right-2 transform -translate-y-1/2 p-2 opacity-70 hover:opacity-100 z-10"
      >
        <Image
          src={right}
          width={1440}
          height={500}
          className="w-full h-auto"
        />
      </button>
      <div className="flex justify-center mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-red-500" : "bg-gray-300"} mx-1`}
          ></button>
        ))}
      </div>
    </div>
  );
}