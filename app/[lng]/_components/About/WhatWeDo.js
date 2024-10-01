"use client"
import Image from "next/image";
import imed from "@/public/images/main/scheme-im.png";
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function WhatWeDo() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'what-we-do-about')
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="max-w-[1440px] 5xl:max-w-[2000px] px-2 mx-auto xl:mt-[700px] 2xl:mt-0">
            {
                isMounted && <div>
                    <div className="max-w-md mx-auto bg-white md:max-w-[1440px] 5xl:max-w-[2000px]">
                        <div className="uppercase text-[25px] tracking-wide text-[#252324] font-semibold mdx:text-[35px] xl:hidden">
                            {t("What we do for our clients?")}
                        </div>
                        <div className="my-[25px] xl:flex xl:flex-row">
                            <div className="xl:block xl:pr-[40px] 2xl:pr-[60px] w-full xl:max-w-[720px] 5xl:max-w-[900px]">
                                <Image
                                    quality={100}
                                    src={imed}
                                    alt="Medical Equipment"
                                    objectFit="contain"
                                    className="w-full h-full xl:w-[720px] xl:h-[631px]"
                                />
                            </div>
                            <div>
                                <div className="hidden uppercase text-[25px] tracking-wide text-[#252324] font-semibold mdx:text-[35px] xl:block">
                                    {t("What we do for our clients?")}
                                </div>
                                <div className="p-3 divide-y divide-gray-200 my-2">
                                    <div>
                                        <p className="my-4 text-[#252324] text-[16px] mdx:text-[20px] mdx:mr-[10%] 2xl:mr-[21%]">
                                            {t("Fast delivery of equipment from stock or on order")}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="my-4 text-[#252324] text-[16px] mdx:text-[20px] mdx:mr-[10%] 2xl:mr-[21%]">
                                            {t("Installation of equipment and training of staff to work with it")}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="my-4 text-[#252324] text-[16px] mdx:text-[20px] mdx:mr-[10%] 2xl:mr-[21%]">
                                            {t("We carry out prompt registration of new equipment")}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="my-4 text-[#252324] text-[16px] mdx:text-[20px] mdx:mr-[10%] 2xl:mr-[21%]">
                                            {t("Warranty and post-warranty service of supplied equipment")}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="my-4 text-[#252324] text-[16px] mdx:text-[20px] mdx:mr-[10%] 2xl:mr-[21%]">
                                            {t("Transfer of medical equipment provided on lease")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}