"use client";

import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const VerticalCarousel = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  // Call useMediaQuery unconditionally
  const isBelow2xl = useMediaQuery({ maxWidth: 900 });

  // This effect ensures that the code runs only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = data.map((item, index) => ({
    original: item.url,
    thumbnail: item.url,
    originalAlt: `Slide ${index}`,
    thumbnailAlt: `Thumbnail ${index}`,
  }));

  // Only apply thumbnail position after the client has rendered
  const thumbnailPosition = isClient && isBelow2xl ? "bottom" : "left";

  // Render nothing on the server until the client is ready
  if (!isClient) return null;

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-2 mb-4">
      {/* Header */}
      <div className="flex gap-4 lg:hidden">
        <h1 className="text-3xl font-semibold">RESONA R9</h1>
        <div className="py-2 px-5 font-bold rounded-full text-redMain bg-[#FCE8E9]">
          Новинка
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full overflow-auto">
        <ImageGallery
          items={images}
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
