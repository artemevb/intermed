"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "@/app/_styles/globals.css"
import banner from "@/public/images/main/banner.png";
import Image from "next/image";

const BannerCarousel = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto relative px-2">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="relative"
      >
        <SwiperSlide>
          <div className="w-full relative">
            <Image
              src={banner}
              width={1500}
              height={1500}
              alt="Surgical Equipment Banner"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative">
            <Image
              src={banner}
              width={1500}
              height={1500}
              alt="Surgical Equipment Banner"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative">
            <Image
              src={banner}
              width={1500}
              height={1500}
              alt="Surgical Equipment Banner"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative">
            <Image
              src={banner}
              width={1500}
              height={1500}
              alt="Surgical Equipment Banner"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;