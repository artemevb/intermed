'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import left from '@/public/svg/arrowleftbanners.svg'
import right from '@/public/svg/arrowrightbanners.svg'
import { useParams } from 'next/navigation'

export default function BannerCarousel() {

	const sliderRef = useRef(null)
	const [banner, setBanners] = useState([])
	const params = useParams()
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
	}

	useEffect(() => {
		const fetAllBanners = async () => {
			try {
				const response = await axios.get('https://imed.uz/api/v1/banner', {
					headers: {
						'Accept-Language': params.lng,
					},
				})
				setBanners(response.data.data)
			} catch (error) {
				console.error('Failed to fetch categories', error)
				setBanners([])
			}
		}

		fetAllBanners()
	}, [params.lng])

	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		sliderRef.current.slickNext()
	}

	const prevSlide = () => {
		sliderRef.current.slickPrev()
	}

	const goToSlide = index => {
		sliderRef.current.slickGoTo(index)
	}

	return (
		<div className='relative w-full  mx-auto overflow-hidden mt-[-48px] xl:pt-12'>
			<Slider ref={sliderRef} {...settings}>
				{banner.sliders?.map((banner, index) => (
					<div key={index} className='min-w-full '>
						<div className='flex flex-col gap-[20px] xl:flex-row xl:flex xl:h-[600px]'>
							<div
								className='text w-full pl-[16px] flex flex-col  gap-[8px]  justify-center xl:w-[40%] xl:gap-[24px] xl:pl-[80px] xl:rounded-l-[20px] '
								style={{ backgroundColor: `${banner.backgroundColour}` }}
							>
								<p className='text-[#E31E24] text-[14px] md:text-[16px] font-medium xl:text-[20px]'>
									{' '}
									{banner.categoryName}
								</p>

								<h3
									className='text-[#252324] text-[28px] leading-[
33.6px] mdx:text-[45px] mdx:leading-[54px] font-bold  xl:text-[70px] xl:leading-[84px] '
								>
									{banner.title}
								</h3>
								<p className='text-[#252324] text-[14px] opacity-50 md:text-[16px] xl:text-[20px]'>
									{banner.subTitle}
								</p>
								<div className='text-[#E31E24] text-[14px] md:text-[16px] xl:text-[20px]'>
									{banner.tagName.split(',').map((tag, index) => (
										<React.Fragment key={index}>
											{index > 0 && <span className='mx-2'>•</span>}
											<span>{tag.trim()}</span>
										</React.Fragment>
									))}
								</div>
							</div>
							{/* BACK BANNER */}
							<div
								className='text w-full relative  order-[-1] xl:w-[60%] xl:order-1  xl:rounded-r-[20px]'
								style={{
									backgroundImage: `url(${banner.productBackground?.url})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								{/* LOGO */}
								<div className='w-[51px] absolute right-[10px] top-[10px] h-[15px]  z-[99999] xl:right-5 mdx:w-[127px] mdx:h-[32px] mdx:right-[20px] mdx:top-[30px] xl:top-5 xl:w-[120px] xl:h-[32px]'>
									<Image
										src={banner.logo?.url}
										alt={`Banner ${index + 1}`}
										width={150}
										height={150}
										quality={100}
										className='w-full h-auto object-cover rounded-2xl'
									/>
								</div>

								{/*  PRODUCT  PHOTO */}
								<div className='w-full z-[9999] xl:absolute xl:bottom-0 xl:left-0'>
									<Image
										src={banner.photo?.url}
										alt={`Banner ${index + 1}`}
										width={1000}
										height={1000}
										quality={100}
										className='w-full h-auto object-cover rounded-2xl'
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<div className='flex justify-center mt-4'>
				{banner.sliders?.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300'
							} mx-1`}
					></button>
				))}
			</div>
		</div>
	)
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
