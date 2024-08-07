"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import partnerPhoto1 from "@/public/images/clients/image1.png";
import partnerPhoto2 from "@/public/images/clients/image1.png";
import partnerPhoto3 from "@/public/images/clients/image1.png";
import partnerPhoto4 from "@/public/images/clients/image2.png";
import partnerPhoto5 from "@/public/images/clients/image2.png";
import partnerPhoto6 from "@/public/images/clients/image2.png";


export default function CasesSlider() {
    const partnersSlider = [
        {
            id: 1,
            imageSrc: partnerPhoto1,
            title: "Browiner",
            description: "Browiner is one of the leading suppliers of medical devices and solutions in the field of mobile digital radiography",
            link: "browiner"
        },
        {
            id: 2,
            imageSrc: partnerPhoto2,
            title: "United Imaging",
            description: "United Imaging is a leading global developer and manufacturer of advanced medical imaging and radiotherapy equipment",
            link: "imaging"
        },
        {
            id: 3,
            imageSrc: partnerPhoto3,
            title: "Zoncare Global",
            description: "Zoncare is a leading high-tech medical device manufacturer and supplier located in the Optical Valley of China",
            link: "zoncare"
        },
        {
            id: 4,
            imageSrc: partnerPhoto4,
            title: "Mindray",
            description: "Mindray is a global leader in the development and manufacture of medical devices and solutions",
            link: "mindray"
        },
        {
            id: 5,
            imageSrc: partnerPhoto5,
            title: "Hefei Shendeng Medical Equipment Co.",
            description: "development development development development development development development development   ",
            link: "Shendeng"
        },
        {
            id: 6,
            imageSrc: partnerPhoto6,
            title: "lingen",
            description: "f f f f f f f f development development fdsgdsfg f fgdsgfd f f f f f f fsdgfdsgdf",
            link: "lingen"
        },
    ];

    const settings = {
        arrows: false,
        infinite: true,
        spaceBetween: 20,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-[1440px] flex flex-col mx-auto">
            <h2 className="mx-[10px] text-[25px] mb-[20px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-bold uppercase">
                Кейсы
            </h2>
            <div className="block">
                <Slider
                    {...settings}
                >
                    {partnersSlider.map(card => (
                        <div key={card.id} className="px-3">
                            <div className="max-h-[450px]">
                                <div className="bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[270px] flex items-center">
                                    <div className="mdx:flex mdx:flex-row items-center justify-between w-full">
                                        <div className="w-full max-w-[40%] h-[95px] relative mt-3 xl:mr-4 mx-auto xl:max-w-[45%] xl:h-[125px]">
                                            <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" />
                                        </div>
                                        <div className="mdx:mb-4">
                                            <h2 className="text-xl font-bold right mt-3 mdx:mb-2 xl:text-[28px] mb-3">{card.title}</h2>
                                            <p className="mb-4 text-gray-600 xl:text-[18px]">{card.description}</p>
                                            <Link href={`/partners/${card.link}`}>
                                                <span className="text-[#E31E24] font-semibold hover:underline mdx:text-[18px]">
                                                    Подробнее →
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mt-[60px] flex items-center justify-center">
            <Link
                href="/clients"
                className="px-12 py-3 transition-all text-[#fff] duration-200 bg-[#E94B50] hover:bg-[#EE787C] hover:text-[#ffffff]"
            >
                Смотреть все
            </Link>
            </div> 
        </div>
    );
}
