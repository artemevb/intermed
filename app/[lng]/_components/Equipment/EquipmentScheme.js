"use client"
import React, { useState } from "react";
import AskaQuestion from "@/app/_components/Modal/AskaQuestion";

export default function Scheme() {
    const [isAskaQuestionModalOpen, setIsAskaQuestionModalOpen] = useState(false);

    const openAskaQuestionModal = () => setIsAskaQuestionModalOpen(true);
    const closeAskaQuestionModal = () => setIsAskaQuestionModalOpen(false);

    return (
        <div className="bg-[#F6F8F9] xl:pt-[100px] xl:pb-[52px]">
            <div className="w-full max-w-[1440px] mx-auto px-[20px] flex flex-col gap-10">
                <div className="flex flex-col gap-8 xl:flex-row  xl:justify-beetwen xl:gap-[23%]">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[25px] mdx:text-[30px] mdl:text-[35px] mt-[30px] xl:text-[40px] font-semibold uppercase xl:w-[508px]">
                            Этапы оснащения клиник
                        </h2>
                        <p className="w-full max-w-[400px] text-[#808080] text-[16px] mdx:text-[18px]">Шаг за шагом к совершенству медицинского обслуживания</p>
                        <button className="mt-4 bg-[#E94B50] text-[white] text-[14px] mdx:text-[16px]  font-semibold py-[14px] mdx:py-[15.5px] px-4 w-[224px] mb-[25px] hover:bg-[#EE787C] hover:color-[#fff ]"
                            onClick={openAskaQuestionModal}>
                            Заказать установку
                        </button>
                    </div>
                    <div className="grid w-full h-auto grid-cols-1 grid-rows-5 pl-4">
                        <div className="border-l-2 relative border-red-200 ">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                1
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    Консультация
                                </h1>
                                <p className="max-w-[600px]">
                                    Встреча с клиентом, оценка потребностей
                                </p>
                            </div>
                        </div>
                        <div className="border-l-2 relative border-red-200">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                2
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    Проектирование и планирование
                                </h1>
                                <p className="max-w-[600px]">
                                    Разработка плана оснащения
                                </p>
                            </div>
                        </div>
                        <div className="border-l-2 relative border-red-200 ">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                3
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    Поставка оборудования
                                </h1>
                                <p className="max-w-[600px]">
                                    Закупка и доставка оборудования.
                                </p>
                            </div>
                        </div>
                        <div className="border-l-2 relative border-red-200 ">
                            <div className="absolute -left-[14px] rounded-full px-2 bg-redMain text-white">
                                4
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    Установка и обучение
                                </h1>
                                <p className="max-w-[600px]">
                                    Монтаж оборудования и обучение персонала
                                </p>
                            </div>
                        </div>
                        <div className="relative border-red-200 ">
                            <div className="absolute -left-[12px] rounded-full px-2 bg-redMain text-white">
                                5
                            </div>
                            <div className="pl-8 pb-12 flex flex-col gap-2">
                                <h1 className="text-2xl text-redMain font-semibold">
                                    Обслуживание и поддержка
                                </h1>
                                <p className="max-w-[600px]">
                                    Техническое обслуживание и поддержка
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
