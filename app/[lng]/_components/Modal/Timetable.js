"use client";
import { useState } from 'react';
import Image from "next/image";
import close from "@/public/svg/close.svg"
import SignUpForEvent from "@/app/_components/Modal/SignUpForEvent";


export default function Timetable({ closeModal }) {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openSignUpModal = () => setIsSignUpModalOpen(true);
    const closeSignUpModal = () => setIsSignUpModalOpen(false);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 shadow-md w-[90%] max-w-[500px] relative">
                <button
                    className="absolute w-[23px] top-4 right-3 xl:right-5 text-black"
                    onClick={closeModal}
                >
                    <Image
                        src={close}
                        width={100}
                        height={100}
                        alt="Icon"
                        className="h-full w-full"
                    />
                </button>
                <h2 className="text-xl font-semibold mb-4 xl:text-[28px] xl:mb-[30px]">Расписание</h2>
                <div >
                    <p className="flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]"><strong className="text-[#BABABA] font-normal mdx:text-[20px]">Дата</strong> 17 Июля - 25 Июля</p>
                    <p className="flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]"><strong className="text-[#BABABA] font-normal mdx:text-[20px]">Время</strong> 17:00 - 20:00</p>
                    <p className="flex flex-col font-semibold border-b-[1px] mb-4 pb-2 xl:w-[80%] mdx:text-[22px] xl:text-[24px]"><strong className="text-[#BABABA] font-normal mdx:text-[20px]">Адрес</strong> Узбекистан, г. Ташкент, НВК &quot;Узэкспоцентр&quot;</p>
                </div>
                <button className="mt-4 w-full bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white"
                onClick={openSignUpModal}>
                    Записаться
                </button>
            </div>
            {isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} />}
        </div>
    );
}
