"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SignUpForEvent from '../../_components/Modal/SignUpForEvent';
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';
// Optional: If using date-fns
import { parse, isBefore } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function AboutEvent({ Data }) {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'event-about');
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isEventOver, setIsEventOver] = useState(false);

    // Cleaned monthMap
    const monthMap = {
        'января': 0, 'январь': 0, 'январ': 0,
        'февраля': 1, 'февраль': 1, 'февр': 1,
        'марта': 2, 'март': 2, 'мар': 2,
        'апреля': 3, 'апрель': 3, 'апр': 3,
        'мая': 4, 'май': 4,
        'июня': 5, 'июнь': 5, 'июн': 5,
        'июля': 6, 'июль': 6, 'июл': 6,
        'августа': 7, 'август': 7, 'авг': 7,
        'сентября': 8, 'сентябрь': 8, 'сен': 8,
        'октября': 9, 'октябрь': 9, 'окт': 9,
        'ноября': 10, 'ноябрь': 10, 'ноя': 10,
        'декабря': 11, 'декабрь': 11, 'дек': 11,
    };

    // Optional: Using date-fns for parsing
    const parseDate = (dateString) => {
        if (!dateString) {
            console.error("parseDate: dateString is undefined or null");
            return null;
        }

        const parts = dateString.split(' ');
        let parsedDate;

        if (parts.length === 2) {
            // Format: "day month"
            parsedDate = parse(dateString, 'd MMMM', new Date(), { locale: ru });
        } else if (parts.length === 3) {
            // Format: "day month year"
            parsedDate = parse(dateString, 'd MMMM yyyy', new Date(), { locale: ru });
        } else {
            console.error(`parseDate: dateString "${dateString}" is not in an expected format`);
            return null;
        }

        if (isNaN(parsedDate)) {
            console.error(`parseDate: Failed to parse dateString "${dateString}"`);
            return null;
        }

        return parsedDate;
    };

    useEffect(() => {
        console.log("Data.dateTo:", Data?.dateTo); // Debugging
        const currentDate = new Date();
        const eventEndDate = parseDate(Data?.dateTo);

        if (eventEndDate && isBefore(eventEndDate, currentDate)) {
            setIsEventOver(true);
        }
    }, [Data?.dateTo]);

    const openSignUpModal = () => setIsSignUpModalOpen(true);
    const closeSignUpModal = () => setIsSignUpModalOpen(false);

    return (
        <div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto gap-1 px-2'>
            <h2 className='text-[24px] mdx:text-[30px] mdl:text-[35px] lg:text-[36px] xl:text-[38px] font-semibold mb-4 xl:mb-[30px] uppercase xl:hidden'>
                {t('title')}
            </h2>
            <div className='xl:flex xl:flex-row-reverse overflow-visible relative mb-[100px] mdx:mb-[150px] xl:mb-[180px]'>
                <div className='bg-[#F4F7FE] p-6 w-full xl:sticky top-0 self-start xl:w-1/4 xl:ml-5 xl:flex xl:flex-col xl:justify-between'>
                    <div>
                        <p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
                            <strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
                                {t('date')}
                            </strong>{' '}
                            {Data?.dateFrom} - {Data?.dateTo}
                        </p>
                        <p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
                            <strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
                                {t('time')}
                            </strong>{' '}
                            {Data?.timeFrom} - {Data?.timeTo}
                        </p>
                        <p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
                            <strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
                                {t('adress')}
                            </strong>{' '}
                            {Data?.address}
                        </p>
                    </div>
                    {isEventOver ? (
                        <button
                            className='mt-4 w-full mdx:max-w-[296px] bg-gray-400 py-3 px-4 text-white xl:max-w-[100%] cursor-not-allowed'
                            disabled
                        >
                            {t('event-ended')} {/* Text when event is over */}
                        </button>
                    ) : (
                        <button
                            className='mt-4 w-full mdx:max-w-[296px] bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white xl:max-w-[100%]'
                            onClick={openSignUpModal}
                        >
                            {t('sign-up')} {/* Text for sign up when event is ongoing */}
                        </button>
                    )}
                </div>
                <div className='xl:w-3/4'>
                    <h2 className='text-[24px] mdx:text-[30px] mdl:text-[35px] lg:text-[36px] xl:text-[38px] font-semibold mb-4 xl:mb-[30px] uppercase hidden xl:block'>
                        {t('title')}
                    </h2>
                    {Data?.abouts.map((item) => (
                        <React.Fragment key={item.id}>
                            <p className='text-[15px] mdx:text-[18px] mdl:text-[24px] mt-[30px] font-semibold'>
                                {item.title}
                            </p>
                            <p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
                                {item.text}
                            </p>
                        </React.Fragment>
                    ))}
                    <h3 className='text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]'>
                        {t('сontacts')}
                    </h3>
                    <p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
                        {Data?.phoneNum}
                        <a
                            href={`mailto:${Data?.email}`}
                            className='text-[#E31E24] underline cursor-pointer'
                        >
                            {Data?.email}
                        </a>
                    </p>
                </div>
            </div>
            {/* Передаем eventId в модальное окно */}
            {isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} eventId={Data?.id} />}
        </div>
    );
}
