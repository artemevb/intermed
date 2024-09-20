"use client"
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/intermed-logo.png";
import notfound from "@/public/images/Error404.png";
import { useTranslation } from './i18n/client'
import { useLanguage } from './i18n/locales/LanguageContext'
import React from 'react';
import { useState, useEffect } from "react";

export default function NotFound() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'not-found');
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <main className="w-full bg-white flex flex-col items-center mt-[50px]">
            {isMounted && t && (
                <div>
                    <div className="h-[30px] flex justify-center w-full max-w-[1440px] items-center px-2 mdx:h-[61px]">
                        <div className="h-full flex items-center">
                            <Image
                            quality={100}
                                src={logo}
                                height={400}
                                width={400}
                                alt="Logo Image"
                                className="h-auto w-full max-w-[223px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-8 mb-[11%] xl:flex-row">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row items-end">
                                <p className="text-[123px] font-bold text-[#E94B50] mt-4 mdx:text-[150px] mr-3">4</p>
                                <div>
                                    <Image
                                    quality={100}
                                        src={notfound}
                                        width={1500}
                                        height={500}
                                        alt="Not Found Image"
                                        className="h-full w-auto max-h-[216px] mdx:max-h-[299px]"
                                    />
                                </div>
                                <p className="text-[123px] font-bold text-[#E94B50] mt-4 mdx:text-[150px] ml-3">4</p>
                            </div>
                            <h3 className="text-[30px] font-bold text-[#E31E24] mdx:text-[40px]">{t('title')}</h3>
                            <p className="max-w-[480px] w-full mx-auto text-neutral-400 text-center mt-4 mdx:text-[20px]">
                                {t('description')}
                            </p>
                            <a href={`/`}>
                                <button className="px-[76px] py-4 bg-[#E94B50] text-white font-semibold mt-8 hover:bg-[#EE787C]">
                                    {t('goHome')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
