"use client";
import { useState } from 'react';
import Image from "next/image";
import SignUpForEvent from "@/app/_components/Modal/SignUpForEvent";

export default function AboutEvent() {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openSignUpModal = () => setIsSignUpModalOpen(true);
    const closeSignUpModal = () => setIsSignUpModalOpen(false);
    return (
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-1 px-2">
            <h2 className="text-[24px] mdx:text-[30px] mdl:text-[35px] lg:text-[36px] xl:text-[38px] font-semibold mb-4 xl:mb-[30px] uppercase">О мероприятии</h2>
            <div className="xl:flex xl:flex-row-reverse xl:items-start">
                <div className="bg-[#F4F7FE] p-6 w-full relative xl:w-1/4 xl:ml-5 xl:flex xl:flex-col xl:justify-between">
                    <div>
                        <p className="flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]">
                            <strong className="text-[#BABABA] font-normal mdx:text-[20px]">Дата</strong> 17 Июля - 25 Июля
                        </p>
                        <p className="flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]">
                            <strong className="text-[#BABABA] font-normal mdx:text-[20px]">Время</strong> 17:00 - 20:00
                        </p>
                        <p className="flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]">
                            <strong className="text-[#BABABA] font-normal mdx:text-[20px]">Адрес</strong> Узбекистан, г. Ташкент, НВК &quot;Узэкспоцентр&quot;
                        </p>
                    </div>
                    <button className="mt-4 w-full mdx:max-w-[296px] bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white xl:max-w-[100%]"
                    onClick={openSignUpModal}>
                        Записаться
                    </button>
                </div>
                <div className="mb-[100px] mdx:mb-[150px] xl:mb-[180px] xl:w-3/4">
                    <p className="text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[30px]">
                        Мы рады пригласить вас на одно из самых значимых событий в области медицины этого года &ndash; Презентация Новейших Технологий в Медицине, которая пройдет в Ташкенте 17 июля 2024 года. Мероприятие соберет ведущих специалистов и экспертов из различных медицинских дисциплин, чтобы обсудить и продемонстрировать последние достижения и инновации в сфере здравоохранения.
                    </p>
                    <h3 className="text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]">Основные темы мероприятия</h3>
                    <ol className="list-disc pl-4 mdx:pl-5">
                        <li className="text-[16px] mdx:text-[20px]">Инновационные технологии в диагностике и лечении</li>
                        <li className="text-[16px] mdx:text-[20px]">Достижения в области генетики и биотехнологий</li>
                        <li className="text-[16px] mdx:text-[20px]">Современные подходы к лечению хронических заболеваний</li>
                    </ol>
                    <h3 className="text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]">Участие и регистрация</h3>
                    <p className="text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[30px]">
                        Для участия в мероприятии необходимо зарегистрироваться до 10 августа 2024 года. Регистрация доступна онлайн на нашем официальном сайте. Количество мест ограничено, поэтому рекомендуем зарегистрироваться заранее, чтобы гарантировать себе место на этом уникальном событии.
                    </p>
                    <p className="text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]">
                        Не упустите возможность познакомиться с последними достижениями в медицине и расширить свои профессиональные горизонты. Ждем вас на Презентации Новейших Технологий в Медицине в Ташкенте!
                    </p>
                    <h3 className="text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]">Контакты</h3>
                    <p className="text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]">
                        Для получения дополнительной информации и вопросов о мероприятии, пожалуйста, свяжитесь с организационным комитетом по телефону +998 78 150-47-47 или электронной почте <span className="text-[#E31E24] underline">info@imed.uz</span>
                    </p>
                </div>
            </div>
            {isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} />}
        </div>
    );
}
