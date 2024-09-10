"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const VerticalCarousel = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 mb-4">
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
          {data.map((item, index) => (
            <div key={index}>
              <Image
                src={item.url} 
                alt={`Slide ${index}`}
                className="object-contain h-96 w-full"
                width={1440}
                height={960}
                quality={100}
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
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer ml-2 h-[100%] rounded-xl ${
                selectedImage === index ? "border-2 border-greenView" : "border"
              }`}
            >
              <Image
                src={item.url} // url ni olish
                alt={`Thumbnail ${index}`}
                className="object-contain h-full rounded-xl w-full max-h-[102px] max-w-[102px]"
                width={302} // Add appropriate width and height
                height={300}
                quality={100}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VerticalCarousel;
