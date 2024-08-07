

"use client";
import lingen from "@/public/images/aboutUs/partners/image28.png";
import united from "@/public/images/aboutUs/partners/image32.png";
import browiner from "@/public/images/aboutUs/partners/image41.png";
import dollar from "@/public/images/aboutUs/partners/image42.png";
import mindray from "@/public/images/aboutUs/partners/image3.png";
import zoncare from "@/public/images/aboutUs/partners/image27.png";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  const logos = [
    { src: lingen, alt: "Lingen Logo" },
    { src: united, alt: "United Imaging Logo" },
    { src: browiner, alt: "Browiner Logo" },
    { src: mindray, alt: "Mindray Logo" },
    { src: dollar, alt: "Dollar Logo" },
    { src: zoncare, alt: "Zoncare Logo" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-10 mx-auto px-2">
      <h2 className="text-3xl font-semibold max-mdl:text-2xl">
        НАШИ ПАРТНЕРЫ
      </h2>
      <div>
        <Slider {...settings} className="h-auto flex">
          {logos.map((item, index) => (
            <div key={index}> {/* Adjust margin or padding here */}
              <div className="p-16 border h-[200px] flex justify-center items-center">
                <Image
                  src={item.src}
                  width={500}
                  height={500}
                  alt="Intermed Sertificate"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
