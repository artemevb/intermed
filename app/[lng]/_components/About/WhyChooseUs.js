"use client"
import React from 'react';
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function WhatWeDo() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'why-choose-us')
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    return (
        <div className="max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-3">
            {
                isMounted && <div>
                    <div className="text-[25px] mdx:text-[36px] xl:text-[40px] px-2 mb-4 font-semibold">{t('why_choose_us')}</div>
                    <div className="grid gap-4 mdl:grid-cols-2 2xl:grid-cols-4">
                        <div className="flex flex-col h-[230px] slg:h-[265px] 2xl:h-[280px] p-6 mdl:p-6 slg:p-9 2xl:p-3 3xl:p-5 border bg-white text-black">
                            <div className="text-[25px] mdx:text-[27px] font-bold text-red-500 mb-4 mdl:mb-2 slg:mb-4 slg:text-[30px]">
                                {t('on_site_service')}
                            </div>
                            <div className="text-[19px] mdx:text-[21px] mdl:text-[22px] xl:text-[24px]">{t('all_over_uzbekistan')}</div>
                        </div>
                        <div className="flex flex-col h-[230px] slg:h-[265px] 2xl:h-[280px] p-6 mdl:p-6 slg:p-9 2xl:p-3 3xl:p-5 border bg-white text-black">
                            <div className="text-[25px] mdx:text-[27px] font-bold text-red-500 mb-4 mdl:mb-2 slg:mb-4 slg:text-[30px]">
                                {t('service_maintenance')}
                            </div>
                            <div className="text-[19px] mdx:text-[21px] mdl:text-[22px] xl:text-[24px]">{t('installation_and_training')}</div>
                        </div>
                        <div className="flex flex-col h-[230px] slg:h-[265px] 2xl:h-[280px] p-6 mdl:p-6 slg:p-9 2xl:p-3 3xl:p-5 border bg-white text-black">
                            <div className="text-[25px] mdx:text-[27px] font-bold text-red-500 mb-4 mdl:mb-2 slg:mb-4 slg:text-[30px]">
                                {t('quality_guarantee')}
                            </div>
                            <div className="text-[19px] mdx:text-[21px] mdl:text-[22px] xl:text-[24px]">{t('certified_products')}</div>
                        </div>
                        <div className="flex justify-center items-center h-[230px] slg:h-[265px] 2xl:h-[280px] p-6 mdl:p-6 slg:p-9 2xl:p-3 3xl:p-5 border bg-red-500 text-white">
                            <div className="text-[19px] mdx:text-[21px] mdl:text-[22px] xl:text-[24px]">{t('trusted_by_medical_institutions')}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}