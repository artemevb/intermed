"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link
import intermed2 from "@/public/images/contacts/image49.png";
import alnair from "@/public/images/contacts/image50.png";
import Mrj from "@/public/images/contacts/Logo.png";
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function ContAddress() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'map-representatives');
    const data = [
        {
            title: "Intermed Innovation",
            address: "Tashkent, Chinobod Street 10A",
            country: "Uzbekistan",
            schedule: "09:00 - 18:00",
            email: "info@imed.uz",
            phones: ["+998781504747", "+998781504707"],
            imageSrc: intermed2,
            link: "/contacts/intermed-innovation-uzbekistan",
            isExternal: false,
            isClickable: false,
        },
        {
            title: "Alnair Medical",
            address: "Almaty, Timiryazev Street 42, building 15/109, office 301-304",
            country: "Kazakhstan",
            schedule: "09:00 - 18:00",
            email: "sales@alnair.kz",
            phones: ["+77008368710"],
            imageSrc: alnair,
            link: "https://alnair.kz/",
            isExternal: true,
            isClickable: true,
        },
        {
            title: "Intermed Innovation",
            address: "Moscow, Prospekt Mira Street, 106",
            country: "Russia",
            schedule: "09:00 - 18:00",
            email: "info@imedrf.ru",
            phones: ["+74959208100", "+79858100791"],
            imageSrc: intermed2,
            link: "/contacts/intermed-innovation-russia",
            isExternal: false,
            isClickable: false,
        },
        {
            title: "MRJ Trade",
            address: "Dubai, Deira, Baniyas road, Twin Towers, 20",
            country: "United Arab Emirates",
            schedule: "09:00 - 18:00",
            email: "info@mrjtrade.ae",
            phones: ["+9710524979914"],
            imageSrc: Mrj,
            link: "http://mrj-trade.com/",
            isExternal: true,
            isClickable: true,
        },
    ];

    return (
        <div className="max-w-[1440px] 5xl:max-w-[2000px] mx-auto w-full mb-[180px]">
            <div className="mx-[10px]">
                <h2 className="mt-[120px] text-3xl font-semibold uppercase mdx:mt-[170px] mb-8">{t('title')}</h2>

                <div className="grid gap-6 slg:grid-cols-2 xl:grid-cols-3 w-full">
                    {data.map((item, i) => {
                        const isMrjTrade = item.title === "MRJ Trade";
                        const CardContent = (
                            <div className="bg-white rounded-3xl shdwcustom overflow-hidden">
                                <div className="">
                                    <div className="p-4 mx-auto flex items-center">
                                        <div className="w-full slg:max-w-[443px] h-[234px] bg-[#F4F7FE] rounded-2xl flex items-center justify-center 5xl:max-w-full">
                                            <Image
                                                className="h-auto w-[80%] slg:w-full object-contain max-h-[60px]"
                                                src={item.imageSrc}
                                                quality={100}
                                                width={300}
                                                height={300}
                                                alt={item.title}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        {/* Conditional Class for Title */}
                                        <div className={`tracking-wide text-[22px] mdx:text-[24px] xl:text-[30px] ${isMrjTrade ? 'text-[#088133]' : 'text-redMain'} font-semibold`}>
                                            {item.title}
                                        </div>
                                        <div></div>

                                        <p className="block mt-1 border-b-2 pb-5 text-lg leading-tight font-medium text-black text-[15px] mdx:text-[18px] xl:text-[20px]">{item.address}</p>

                                        <div className="flex flex-row items-end mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                            <p className="text-[#BABABA]">Country:</p>
                                            <p className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]">{item.country}</p>
                                        </div>

                                        <div className="flex flex-row items-end mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                            <p className="text-[#BABABA]">Schedule:</p>
                                            <p className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]"> {item.schedule}</p>
                                        </div>

                                        <div className="flex flex-row items-end mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                            <p className="text-[#BABABA]">E-mail:</p>
                                            <p className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]"> {item.email}</p>
                                        </div>

                                        <div className="flex flex-row items-start mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                            <p className="text-[#BABABA]">Phone:</p>
                                            <div className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]">
                                                {item.phones.map((phone, index) => (
                                                    <p key={index}>{phone}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        if (item.isClickable) {
                            if (item.isExternal) {
                                return (
                                    <a
                                        key={i}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block cursor-pointer"
                                    >
                                        {CardContent}
                                    </a>
                                );
                            } else {
                                return (
                                    <Link key={i} href={item.link} className="block cursor-pointer">
                                        {CardContent}
                                    </Link>
                                );
                            }
                        } else {
                            return (
                                <div key={i} className="block">
                                    {CardContent}
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
