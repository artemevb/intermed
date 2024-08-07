"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import partnerPhoto1 from "@/public/images/clients/image1.png";
import GreenArrow from "../Buttons/GreenArrow";

const clients = [
    {
        id: 1,
        imageSrc: partnerPhoto1,
        title: "Browiner",
        description: "Browiner is one of the leading suppliers of medical devices and solutions in the field of mobile digital radiography",
        link: "browiner"
    },
    {
        id: 2,
        imageSrc: partnerPhoto1,
        title: "United Imaging",
        description: "United Imaging is a leading global developer and manufacturer of advanced medical imaging and radiotherapy equipment",
        link: "imaging"
    },
    {
        id: 3,
        imageSrc: partnerPhoto1,
        title: "Zoncare Global",
        description: "Zoncare is a leading high-tech medical device manufacturer and supplier located in the Optical Valley of China",
        link: "zoncare"
    },
    {
        id: 4,
        imageSrc: partnerPhoto1,
        title: "Mindray",
        description: "Mindray is a global leader in the development and manufacture of medical devices and solutions",
        link: "mindray"
    },
    {
        id: 5,
        imageSrc: partnerPhoto1,
        title: "Hefei Shendeng Medical Equipment Co.",
        description: "Is a leading provider of medical equipment and solutions",
        link: "Shendeng"
    },
    {
        id: 6,
        imageSrc: partnerPhoto1,
        title: "lingen",
        description: "Lingen Precision Medical Products Co., Ltd. is a custom manufacturer specializing in medical products",
        link: "lingen"
    },
    {
        id: 7,
        imageSrc: partnerPhoto1,
        title: "Partner 7",
        description: "Description for partner 7",
        link: "partner7"
    },
    {
        id: 8,
        imageSrc: partnerPhoto1,
        title: "Partner 8",
        description: "Description for partner 8",
        link: "partner8"
    },
    {
        id: 9,
        imageSrc: partnerPhoto1,
        title: "Partner 9",
        description: "Description for partner 9",
        link: "partner9"
    },
    {
        id: 10,
        imageSrc: partnerPhoto1,
        title: "Partner 10",
        description: "Description for partner 10",
        link: "partner10"
    },
    {
        id: 11,
        imageSrc: partnerPhoto1,
        title: "Partner 11",
        description: "Description for partner 11",
        link: "partner11"
    },
    {
        id: 12,
        imageSrc: partnerPhoto1,
        title: "Partner 12",
        description: "Description for partner 12",
        link: "partner12"
    },
];

export default function ListClients() {
    const [visibleCount, setVisibleCount] = useState(6);

    const showMoreClients = () => {
        setVisibleCount(clients.length);
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mb-[110px] mdx:mb-[130px] xl:mb-[180px]">
            <h1 className="font-semibold text-[25px] mdx:text-[30px] lg:text-[35px] xl:text-[40px] uppercase mt-[60px]">Кейсы</h1>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {clients.slice(0, visibleCount).map(card => (
                    <div key={card.id} className="bg-white p-4 w-full border-[1px] border-gray-200 mdx:p-0 mdl:p-5 slg:h-auto">
                        <div className="mdx:flex mdx:flex-row items-center justify-between ">
                            <div className="mdx:w-[50%] h-[70px] relative mt-3">
                                <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" />
                            </div>
                            <div className='mdx:mb-4 mdx:w-[50%]'>
                                <h2 className="text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]">{card.title}</h2>
                                <p className="mb-4 text-gray-600 xl:text-[18px]">{card.description}</p>
                                <Link href={`/clients/${card.link}`}>
                                    <span className="text-[#E31E24] font-semibold mdx:text-[18px]">
                                        <GreenArrow title={"Подробнее"} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCount < clients.length && (
                <div className="flex justify-center items-center">
                    <button 
                        onClick={showMoreClients} 
                        className="bg-[#E94B50] text-[#fff] text-[14px] mdx:text-[16px] py-3 px-[60px]">
                        Загрузить все
                    </button>
                </div>
            )}
        </div>
    );
}
