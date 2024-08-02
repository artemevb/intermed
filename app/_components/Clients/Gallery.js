"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import partnerPhoto1 from "@/public/images/clients/gallery1.png";
import partnerPhoto2 from "@/public/images/clients/gallery2.png";
import partnerPhoto3 from "@/public/images/clients/gallery3.png";

const gallery = [
    {
        id: 1,
        imageSrc: partnerPhoto1,
        alt: "VITAMED MEDICAL",
    },
    {
        id: 2,
        imageSrc: partnerPhoto2,
        alt: "ANOTHER MEDICAL",
    },
    {
        id: 3,
        imageSrc: partnerPhoto3,
        alt: "ANOTHER MEDICAL",
    },
    {
        id: 4,
        imageSrc: partnerPhoto1,
        alt: "VITAMED MEDICAL",
    },
    {
        id: 5,
        imageSrc: partnerPhoto2,
        alt: "ANOTHER MEDICAL",
    },
    {
        id: 6,
        imageSrc: partnerPhoto1,
        alt: "VITAMED MEDICAL",
    },
    {
        id: 7,
        imageSrc: partnerPhoto2,
        alt: "ANOTHER MEDICAL",
    },
    {
        id: 8,
        imageSrc: partnerPhoto3,
        alt: "ANOTHER MEDICAL",
    },
    {
        id: 9,
        imageSrc: partnerPhoto1,
        alt: "VITAMED MEDICAL",
    },
    {
        id: 10,
        imageSrc: partnerPhoto2,
        alt: "ANOTHER MEDICAL",
    },
];

const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 photos

    const showMorePartners = () => {
        setVisibleCount(gallery.length); // Show all photos on button click
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-6 bg-white mb-[120px] mdl:mb-[150px]">
            <h2 className="text-[20px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold mb-6 mt-[120px]">ГАЛЕРЕЯ</h2>
            <div className="grid grid-cols-1 gap-6 mdl:grid-cols-2 mdl:gap-3 xl:grid-cols-3">
                {gallery.slice(0, visibleCount).map((item) => (
                    <div key={item.id} className="w-full h-auto">
                        <Image
                            src={item.imageSrc}
                            alt={item.alt}
                            layout="responsive"
                            objectFit="cover"
                            className='w-full h-full max-h-[200px] mdl:max-h-[275px]'
                        />
                    </div>
                ))}
            </div>
            {visibleCount < gallery.length && (
                <div className="flex justify-center items-center mt-[40px] ">
                    <button
                        onClick={showMorePartners}
                        className="bg-[#fff] text-[14px] mdx:text-[16px] py-3 px-[60px] border hover:bg-[#E94B50] hover:text-[#fff]">
                        Загрузить все
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
