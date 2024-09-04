"use client"
import { useTranslation } from '../../../i18n/client'
import { useState } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function VideoReview() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'video-review')
    const [showAll, setShowAll] = useState(false);
    const videos = [
        {
            title: 'Релиз Resona R9',
            videoUrl: 'https://www.youtube.com/embed/your_video_id', // Замените на реальный URL видео
        },
        {
            title: 'Плюсы и минусы Resona R9',
            videoUrl: 'https://www.youtube.com/embed/another_video_id', // Another video URL
        },
        {
            title: 'Resona R9: отзывы от клиник и пред...',
            videoUrl: 'https://www.youtube.com/embed/third_video_id', // Third video URL
        },
    ];

    // Показываем все видео, если showAll = true, иначе показываем только первые 2
    const visibleVideos = showAll ? videos : videos.slice(0, 2);

    return (
        <section className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-8 px-2">
            <h2 className="text-3xl max-mdx:text-2xl font-bold uppercase">
                {t('video-review')}
            </h2>
            <div className="grid grid-cols-1 gap-4 mdx:grid-cols-2 xl:grid-cols-3">
                {visibleVideos.map((video, index) => (
                    <div key={index} className="w-full">
                        <div className="relative w-full h-0 pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={video.videoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-2 text-black font-medium text-[18px] mdx:text-[24px]">{video.title}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mb-[120px]">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className=" border text-[#252324] py-3 px-[55px] text-[14px] mdx:text-[16px] font-bold hover:text-[#fff] hover:bg-[#E94B50]"
                >
                    {showAll ? t('hide') : t('download')}
                </button>
            </div>
        </section>
    );
}
