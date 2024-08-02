"use client"
import Image from 'next/image';
import partnerPhoto1 from "@/public/images/clients/image1.png"; // Пример изображения партнера
import location from "@/public/svg/clients/location.svg"; // Иконка местоположения

const partners = [
    {
        id: 1,
        imageSrc: partnerPhoto1,
        title: "VITAMED MEDICAL",
        description: "VITAMED - это современный, уникальный, многопрофильный медицинский центр с широким спектром амбулаторно-поликлинических услуг, реабилитационной стационарной помощью, высококвалифицированными специалистами, современным лабораторным, диагностическим и лечебным оборудованием на уровне международных стандартов",
        country: "Ташкент"
    },
    
    
];

const TitleMain = () => {
    const partner = partners[0]; 

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-6 bg-white">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">{partner.title}</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 border-b pb-5">{partner.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center bg-red-100 rounded-md py-3 px-5">
                    <Image
                        src={location}
                        alt="location"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    <span className="text-red-500 font-medium">{partner.country}</span>
                </div>
                <div className="relative w-full max-w-[156px] h-[90px]">
                    <Image
                        src={partner.imageSrc}
                        alt={partner.title}
                        layout="fill"
                        objectFit="contain"
                        className="w-full h-full"
                    />
                </div>

            </div>
        </div>
    );
};

export default TitleMain;
