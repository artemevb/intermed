// BannerCarousel.js
"use client"; // Объявляем, что это клиентский компонент

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

// Компонент для отображения текста с переносами строк
const TextWithNewlines = ({ text }) => {
  if (!text) {
    return null;
  }
  return (
    <>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default function BannerCarousel({ banners }) { // Принимаем баннеры через пропсы
  const sliderRef = useRef(null);
  const slideRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  // Обрабатываем высоту слайдов после загрузки изображений
  useEffect(() => {
    if (slideRefs.current.length > 0) {
      const images = Array.from(document.images);
      const promises = images.map((img) => {
        if (img.complete) {
          return Promise.resolve(img.naturalHeight !== 0);
        }
        return new Promise((resolve) => {
          img.addEventListener('load', () => resolve(true));
          img.addEventListener('error', () => resolve(false));
        });
      });

      Promise.all(promises).then(() => {
        const heights = slideRefs.current.map(
          (slide) => slide.getBoundingClientRect().height
        );
        const maxHeight = Math.max(...heights);
        slideRefs.current.forEach((slide) => {
          slide.style.height = `${maxHeight}px`;
        });
      });
    }
  }, [banners]); // Зависимость от баннеров

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {banners?.sliders?.map((banner, index) => (
          <a
            key={index}
            href={banner.link || '#'} // Используем ссылку баннера, если доступна
            target="_blank"
            rel="noopener noreferrer"
            className="block" // Убедитесь, что ссылка оборачивает весь слайд
          >
            <div
              ref={(el) => (slideRefs.current[index] = el)}
              className="relative min-w-full max-slg:min-h-[525px] slg:min-h-[780px] xl:min-h-0"
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: `${banner.backgroundColour}`, zIndex: 0 }}
              ></div>
              <div className="relative z-10">
                <div className="flex flex-col xl:flex-row xl:h-[600px]">
                  <div className="text w-full pl-[16px] flex flex-col gap-[8px] justify-center xl:w-[40%] xl:gap-[24px] xl:pl-[80px] max-xl:pt-[20px] max-mdx:pb-[30px] max-xl:pb-[50px]">
                    <p className="text-[#E31E24] text-[14px] md:text-[16px] font-medium xl:text-[20px]">
                      <TextWithNewlines text={banner.categoryName} />
                    </p>

                    <h3 className="text-[#252324] text-[28px] leading-[33.6px] mdx:text-[45px] mdx:leading-[54px] font-bold xl:text-[70px] xl:leading-[84px]">
                      <TextWithNewlines text={banner.title} />
                    </h3>
                    <p className="text-[#252324] text-[14px] opacity-50 md:text-[16px] xl:text-[20px] border-b border-[#EBEBEB] pb-[13px]">
                      <TextWithNewlines text={banner.subTitle} />
                    </p>
                    <div className="text-[#E31E24] text-[14px] md:text-[16px] xl:text-[20px]">
                      {banner.tagName.split(',').map((tag, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span className="mx-2">•</span>}
                          <span>{tag.trim()}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div
                    className="text w-full relative order-[-1] xl:w-[60%] xl:order-1"
                    style={{
                      backgroundImage: `url(${banner.productBackground?.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="max-w-[81px] absolute right-[10px] top-[10px] h-auto z-[99999] xl:right-5 mdx:max-w-[89px] mdx:right-[20px] mdl:max-w-[127px] mdx:top-[20px] xl:top-5">
                      <Image
                        src={banner.logo?.url}
                        alt={`Banner ${index + 1}`}
                        width={320}
                        height={350}
                        quality={100}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <div className="w-full z-[9999] xl:absolute xl:bottom-0 xl:left-0">
                      <Image
                        src={banner.photo?.url}
                        alt={`Banner ${index + 1}`}
                        width={2000}
                        height={1000}
                        quality={100}
                        className="w-full h-auto object-contain max-h-[604px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </Slider>
      <div className="flex justify-center mt-4">
        {banners?.sliders?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300'} mx-1`}
          ></button>
        ))}
      </div>
    </div>
  );
}
