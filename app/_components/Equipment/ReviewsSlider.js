"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import partnerPhoto1 from "@/public/svg/reviews/Ellipse1.svg";
import partnerPhoto2 from "@/public/svg/reviews/Ellipse2.svg";
import partnerPhoto3 from "@/public/svg/reviews/Ellipse3.svg";

export default function ReviewsSlider() {
    const partnersSlider = [
        {
            id: 1,
            imageSrc: partnerPhoto1,
            title: "Fergana Premium Medical",
            date: "24.07.2024",
            description: "Уважаемая команда iMed! Клиника Fergana Premium Medical выражает искреннюю благодарность компании iMed за комплексное оснащение нашего медицинского учреждения. Благодаря вашему профессионализму и высококачественному оборудованию, наша клиника теперь обладает всем необходимым для предоставления первоклассных медицинских услуг.",
            link: "fergana-premium-medical"
        },
        {
            id: 2,
            imageSrc: partnerPhoto2,
            title: "Another Partner",
            date: "15.06.2024",
            description: "Уважаемая команда iMed! Клиника Fergana Premium Medical выражает искреннюю благодарность компании iMed за комплексное оснащение нашего медицинского учреждения. Благодаря вашему профессионализму и высококачественному оборудованию, наша клиника теперь обладает всем необходимым для предоставления первоклассных медицинских услуг.",
            link: "another-partner"
        },
        {
            id: 3,
            imageSrc: partnerPhoto3,
            title: "Zoncare Global",
            date: "10.05.2024",
            description: "Уважаемая команда iMed! Клиника Fergana Premium Medical выражает искреннюю благодарность компании iMed за комплексно",
            link: "zoncare"
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
            <h2 className="mx-[10px] text-[25px] mb-[20px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold uppercase">
                Отзывы
            </h2>
            <div className="block">
                <Slider {...settings}>
                    {partnersSlider.map(card => (
                        <div key={card.id} className="px-3">
                            <div className="max-h-[450px]">
                                <div className="bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[370px] flex flex-col justify-between">
                                    <div className="mdx:p-8 xl:p-0">
                                        <div className="flex justify-start items-center gap-3 xl:items-start mb-4">
                                            <div className="h-[60px] w-[60px] mdx:h-[80px] mdx:w-[80px] relative xl:mr-4">
                                                <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" className="w-full h-auto" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold right mt-3 mdx:mb-2 xl:text-[28px] mb-1">{card.title}</h2>
                                                <p className="text-gray-400">{card.date}</p>
                                            </div>
                                        </div>
                                        <p className="mb-4 mdx:text-[18px]">{card.description}</p>
                                    </div>
                                    <Link href={`/reviews/${card.link}`}>
                                        <span className="text-[#E31E24] font-semibold hover:underline mdx:text-[18px] mdx:flex mdx:justify-end">
                                            Читать полностью
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mt-[60px] flex items-center justify-center">
                <Link
                    href="/reviews"
                    className="px-12 py-3 transition-all text-[#fff] duration-200 bg-[#E94B50] hover:bg-[#EE787C] hover:text-[#ffffff]"
                >
                    Смотреть все
                </Link>
            </div>
        </div>
    );
}
