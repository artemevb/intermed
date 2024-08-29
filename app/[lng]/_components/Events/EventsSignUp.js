"use client";
import { useState } from 'react';
import Image from "next/image";
import newsPhoto from "@/public/images/events/eventsSignUp.png";
import Timetable from "@/app/_components/Modal/Timetable";
import SignUpForEvent from "@/app/_components/Modal/SignUpForEvent";

export default function EventSignUp() {
    const [isTimetableModalOpen, setIsTimetableModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openTimetableModal = () => setIsTimetableModalOpen(true);
    const closeTimetableModal = () => setIsTimetableModalOpen(false);

    const openSignUpModal = () => setIsSignUpModalOpen(true);
    const closeSignUpModal = () => setIsSignUpModalOpen(false);

    return (
        <div className="w-full mx-auto flex flex-col gap-1 px-2 mb-[100px] mdl:mb-[150px] xl:mb-[200px] xl:px-0">
            <div className="xl:flex xl:flex-row xl:gap-9 items-center">
                <div className="xl:w-1/2 xl:ml-[2%] 2xl:ml-[4%] 4xl:ml-[12%]">
                    <h2 className="uppercase text-[30px] font-semibold mdx:text-[38px] mdl:text-[44px] 2xl:text-[48px] mt-[52px] lh">
                        Презентация Новейших Технологий в Медицине: Ташкент 2024
                    </h2>
                    <div className="flex flex-row justify-between mt-[20px] mdx:justify-normal mdx:gap-2 xl:gap-4">
                        <button className="w-[49%] bg-[#E94B50] hover:bg-[#EE787C] py-[15px] text-white font-semibold mdx:max-w-[220px]"
                            onClick={openSignUpModal}>
                            Записаться
                        </button>
                        <button
                            className="w-[49%] border-[1px] bg-[#fff] py-[15px] font-semibold mdx:max-w-[220px] hover:bg-[#E94B50] hover:text-[#ffffff]"
                            onClick={openTimetableModal}
                        >
                            Расписание
                        </button>
                    </div>
                </div>
                <div className="xl:w-1/2 max-xl:mt-[40px]">
                    <Image
                        src={newsPhoto}
                        alt={'title'}
                        objectFit="cover"
                        className="object-cover w-full h-full "
                    />
                </div>
            </div>

            {isTimetableModalOpen && <Timetable closeModal={closeTimetableModal} />}
            {isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} />}
        </div>
    );
}
