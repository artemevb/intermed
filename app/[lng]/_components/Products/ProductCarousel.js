"use client";

import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

const VerticalCarousel = ({ images, name, new: isNew }) => {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'product-main')
  const [isClient, setIsClient] = useState(false);

  const isBelow2xl = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    setIsClient(true);

  }, []);

  const galleryImages = images.map((image, index) => ({
    original: image.url,
    thumbnail: image.url,
    originalAlt: `Slide ${index}`,
    thumbnailAlt: `Thumbnail ${index}`,
  }));

  const thumbnailPosition = isClient && isBelow2xl ? "bottom" : "left";

  if (!isClient) return null;

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-2 mb-4">

      <div className="flex gap-4 lg:hidden">
        <h1 className="text-3xl font-semibold">{name}</h1>
        {isNew && (
          <div className="py-2 px-5 font-bold rounded-full text-redMain bg-[#FCE8E9] self-start">
            {t('new')}
          </div>
        )}
      </div>

      <div className="w-full overflow-auto">
        <ImageGallery
          items={galleryImages}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          thumbnailPosition={thumbnailPosition}
          showBullets={false}
          showIndex={false}
          renderItem={(item) => (
            <div className="w-full h-auto mb-[30px] flex flex-row justify-center cursor-default items-center">
              <img
                src={item.original}
                alt={item.originalAlt}
                className="object-contain w-full h-96 xl:px-4"
              />
            </div>
          )}

          renderThumbInner={(item) => (
            <div className="cursor-pointer mb-4 mr-4 lg:mr-0 overflow-hidden w-full h-auto">
              <img
                src={item.thumbnail}
                alt={item.thumbnailAlt}
                className="object-contain w-full h-full"
              />
            </div>
          )}

        />
      </div>
    </div>
  );
};

export default VerticalCarousel;
