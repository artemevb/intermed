"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import sert from "@/public/images/main/intermed-sertificate.png";

export default function Sertificates() {
  const sertificates = [sert, sert, sert, sert, sert, sert, sert];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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
    <div className="w-full max-w-[1440px] flex flex-col gap-5 mx-auto px-2">
      <h2 className="text-3xl font-semibold max-mdl:text-2xl">
        НАГРАДЫ И СЕРТИФИКАТЫ
      </h2>
      <div>
        <Slider {...settings} className="h-auto flex">
          {sertificates.map((item, index) => (
            <div key={index} className="p-4"> 
              <div className="p-8 border">
                <Image
                  src={item}
                  width={500}
                  height={500}
                  alt="Intermed Sertificate"
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full justify-center flex">
        <Link
          href="/licenses"
          className="border border-neutral-300 px-12 py-3 transition-all duration-200 hover:bg-[#E94B50] hover:text-[#ffffff]"
        >
          Смотреть все
        </Link>
      </div>
    </div>
  );
}