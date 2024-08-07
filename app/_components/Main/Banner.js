"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import banner1 from "@/public/images/banners/banner.png";
import banner2 from "@/public/images/banners/banner.png";
import banner3 from "@/public/images/banners/banner.png";

import left from "@/public/svg/arrowleftbanners.svg";
import right from "@/public/svg/arrowrightbanners.svg";

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
    dots: false, // Disable built-in dots navigation
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
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden px-2 lg:px-12">
      <Slider ref={sliderRef} {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="min-w-full flex justify-center px-2"> {/* Added px-2 for spacing */}
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={1440}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        ))}
      </Slider>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-0 transform -translate-y-1/2 p-2 opacity-70 hover:opacity-100 z-10 hidden lg:block"
      >
        <Image
          src={left}
          width={50}
          height={50}
          className="w-full h-auto"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-0 transform -translate-y-1/2 p-2 opacity-70 hover:opacity-100 z-10 hidden lg:block"
      >
        <Image
          src={right}
          width={50}
          height={50}
          className="w-full h-auto"
        />
      </button>
      <div className="flex justify-center mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-red-500" : "bg-gray-300"} mx-1`}
          ></button>
        ))}
      </div>
    </div>
  );
}