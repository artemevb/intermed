"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import mindrayDC60 from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения
import mindraySV300 from "@/public/images/equipments/equip-uzi.png"; // Пример изображения, замените на ваши изображения
import cl900i from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения
import mindrayBeneHeart from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения

const VerticalCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    mindraySV300,
    mindrayDC60,
    mindrayBeneHeart,
    cl900i,
    mindraySV300,
    mindrayDC60,
    mindrayBeneHeart,
    cl900i,
  ];

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-2 mb-4">
      <div className="flex gap-4 lg:hidden">
        <h1 className="text-3xl font-semibold">RESONA R9</h1>
        <div className="py-2 px-5 font-bold rounded-full text-redMain bg-[#FCE8E9]">
          Новинка
        </div>
      </div>
      <div className="w-full h-auto">
        <Carousel
          selectedItem={selectedImage}
          onChange={(index) => setSelectedImage(index)}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          className="main-carousel"
          showArrows={false}
        >
          {images.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`Slide ${index}`}
                className="object-contain h-96 w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-full max-w-[550px] mt-4 flex justify-center h-auto">
        <Carousel
          selectedItem={selectedImage}
          onChange={(index) => setSelectedImage(index)}
          axis="horizontal"
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          className="thumbnail-carousel"
          centerMode={true}
          centerSlidePercentage={20}
          swipeable={false}
          emulateTouch={true}
          showArrows={false}
        >
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer ml-2 h-[100%] rounded-xl ${
                selectedImage === index ? "border-2 border-greenView" : "border"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${index}`}
                className="object-contain h-full rounded-xl w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VerticalCarousel;
