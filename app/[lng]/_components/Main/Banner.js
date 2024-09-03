"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import banner1 from "@/public/images/banners/Banner01.jpg";
import banner2 from "@/public/images/banners/Banner02.jpg";
import banner3 from "@/public/images/banners/Banner03.jpg";
import banner4 from "@/public/images/banners/Banner04.jpg";
import banner5 from "@/public/images/banners/Banner05.jpg";
import banner6 from "@/public/images/banners/Banner06.jpg";
import banner7 from "@/public/images/banners/Banner07.jpg";
import banner8 from "@/public/images/banners/Banner08.jpg";
import banner9 from "@/public/images/banners/Banner09.jpg";
import banner10 from "@/public/images/banners/Banner10.jpg";

import left from "@/public/svg/arrowleftbanners.svg";
import right from "@/public/svg/arrowrightbanners.svg";

const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9, banner10];

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
          width={2000}
          height={2000}
          className="w-full h-auto object-cover rounded-2xl xl:max-w-[92%] max-h-[604px]"
        />
      </div>
    ),
  }));

  return (
    <div className="relative w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto overflow-hidden px-2 lg:px-12">
      <Slider ref={sliderRef} {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="min-w-full flex justify-center px-2">
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={2000}
              height={2000}
              className="w-full h-auto object-cover rounded-2xl "
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


// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import banner1 from "@/public/images/banners/Banner01.jpg";
// import banner2 from "@/public/images/banners/Banner02.jpg";
// import banner3 from "@/public/images/banners/Banner03.jpg";

// import left from "@/public/svg/arrowleftbanners.svg";
// import right from "@/public/svg/arrowrightbanners.svg";

// const banners = [
//   {
//     id: 1,
//     image: banner1,
//     title: "MPT uMR 670",
//     subtitle: "Превосходная визуализация для глубокой диагностики",
//     features: "Точность • Технологии",
//   },
//   {
//     id: 2,
//     image: banner2,
//     title: "Another Equipment",
//     subtitle: "High-quality imaging for accurate diagnosis",
//     features: "Precision • Innovation",
//   },
//   {
//     id: 3,
//     image: banner3,
//     title: "Third Equipment",
//     subtitle: "Advanced technology for better healthcare",
//     features: "Efficiency • Safety",
//   },
//   // Add more slides as needed
// ];

// export default function BannerCarousel() {
//   const sliderRef = useRef(null);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     dots: false,
//     arrows: false,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//   };

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const prevSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   const goToSlide = (index) => {
//     sliderRef.current.slickGoTo(index);
//   };

//   return (
//     <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden px-2 lg:px-12">
//       <Slider ref={sliderRef} {...settings}>
//         {banners.map((banner, index) => (
//           <div key={index} className="min-w-full flex justify-center px-2">
//             <div className="w-full h-auto object-cover rounded-2xl xl:max-w-[92%] max-h-[604px] relative">
//               <Image
//                 src={banner.image}
//                 alt={`Banner ${index + 1}`}
//                 width={1440}
//                 height={500}
//                 className="w-full h-auto object-cover rounded-2xl"
//               />
//               <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white p-6  bg-opacity-50 rounded-2xl">
//                 <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
//                 <p className="text-lg mb-2">{banner.subtitle}</p>
//                 <p className="text-base">{banner.features}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 -left-0 transform -translate-y-1/2 p-2 opacity-70 hover:opacity-100 z-10 hidden lg:block"
//       >
//         <Image src={left} width={50} height={50} className="w-full h-auto" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 -right-0 transform -translate-y-1/2 p-2 opacity-70 hover:opacity-100 z-10 hidden lg:block"
//       >
//         <Image src={right} width={50} height={50} className="w-full h-auto" />
//       </button>
//       <div className="flex justify-center mt-4">
//         {banners.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full ${
//               currentSlide === index ? "bg-red-500" : "bg-gray-300"
//             } mx-1`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
