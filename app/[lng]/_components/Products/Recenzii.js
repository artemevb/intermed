"use client";
import { useTranslation } from '../../../i18n/client';
import { useState } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import Image from 'next/image';

export default function Reviews({ reviews }) {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'recenzii');

    const [showAll, setShowAll] = useState(false);
    const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

    const formatTextWithNewlines = (text) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ))
    }

    return (
        <div className="max-w-[1440px] 5xl:max-w-[2000px] mx-auto p-4 w-full">
            <h2 className="uppercase text-[25px] font-semibold mdx:text-[25px]">
                {t('recenzii')}
            </h2>
            {visibleReviews.map((review, index) => (
                <div key={index} className="bg-white p-6 mb-6">
                    <div className="flex items-center mb-4">
                        <Image
                            src={review.doctorPhoto?.url || '/fallback-image.png'}
                            alt="Doctor"
                            width={60}
                            height={60}
                            className="rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-bold">
                                {review.nameDoctor}
                            </h2>
                            <h3 className="text-md text-gray-400">
                                {formatTextWithNewlines(review.position)}
                            </h3>
                        </div>
                    </div>
                    <div className="list-disc pl-5 mb-4">
                        {review.options.map((option, idx) => (
                            <div key={idx} className="mb-4">
                                <h4 className="text-lg font-semibold">
                                    {formatTextWithNewlines(option.title)}
                                </h4>
                                <p>{formatTextWithNewlines(option.value)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="border text-[#252324] py-3 px-[35px] mdx:px-[50px] font-bold hover:text-[#fff] hover:bg-[#E94B50]"
                >
                    {showAll ? t('hide') : t('see-all')}
                </button>
            </div>
        </div>
    );
}
