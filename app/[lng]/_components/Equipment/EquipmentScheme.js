"use client"
import React, { useState } from "react";
import AskaQuestion from "../../_components/Modal/AskaQuestion";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Scheme() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'equipment-scheme')

    const [isAskaQuestionModalOpen, setIsAskaQuestionModalOpen] = useState(false);

    const openAskaQuestionModal = () => setIsAskaQuestionModalOpen(true);
    const closeAskaQuestionModal = () => setIsAskaQuestionModalOpen(false);

    return (
        <div className="bg-[#F6F8F9] xl:pt-[100px] xl:pb-[52px]">
            <div className="w-full max-w-[1440px] mx-auto px-[20px] flex flex-col gap-10">
                <div className="flex flex-col gap-8 xl:flex-row  xl:justify-beetwen xl:gap-[23%]">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[25px] mdx:text-[30px] mdl:text-[35px] mt-[30px] xl:text-[40px] font-semibold uppercase xl:w-[508px]">
                            {t('clinic_equipment_stages')}
                        </h2>
                        <p className="w-full max-w-[400px] text-[#808080] text-[16px] mdx:text-[18px]">
                            {t('step_by_step')}
                        </p>
                        <button className="mt-4 bg-[#E94B50] text-[white] text-[14px] mdx:text-[16px]  font-semibold py-[14px] mdx:py-[15.5px] px-4 max-w-[244px] mb-[25px] hover:bg-[#EE787C] hover:color-[#fff ]"
                            onClick={openAskaQuestionModal}>
                            {t('order_installation')}
                        </button>
                    </div>
                    <div className="grid w-full h-auto grid-cols-1 grid-rows-5 pl-4">
                        <div className="border-l-2 relative border-red-200 ">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                1
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    {t('consultation')}
                                </h1>
                                <p className="max-w-[600px]">
                                    {t('meeting_with_client')}
                                </p>
                            </div>
                        </div>
                        <div className="border-l-2 relative border-red-200">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                2
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    {t('design_planning')}
                                </h1>
                                <p className="max-w-[600px]">
                                    {t('equipment_plan_development')}
                                </p>
                            </div>
                        </div>
                        <div className="border-l-2 relative border-red-200 ">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                3
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    {t('equipment_supply')}
                                </h1>
                                <p className="max-w-[600px]">
                                    {t('purchase_delivery')}
                                </p>
                            </div>
                        </div>
                        <div className="border-l-2 relative border-red-200 ">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                4
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    {t('installation_training')}
                                </h1>
                                <p className="max-w-[600px]">
                                    {t('equipment_installation')}
                                </p>
                            </div>
                        </div>
                        <div className="relative border-red-200 ">
                            <div className="absolute -left-[12px] rounded-full px-2 bg-redMain text-white">
                                5
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    {t('maintenance_support')}
                                </h1>
                                <p className="max-w-[600px]">
                                    {t('technical_support')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isAskaQuestionModalOpen && <AskaQuestion closeModal={closeAskaQuestionModal} />}
        </div>
    )
}
