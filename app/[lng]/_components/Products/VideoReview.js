"use client"
import { useTranslation } from '../../../i18n/client';
import { useState } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function VideoReview({ videos }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'video-review');
  const [showAll, setShowAll] = useState(false);

  const visibleVideos = showAll ? videos : videos.slice(0, 3);

  const extractVideoId = (url) => {
    try {
      let videoId = null;
      const urlObj = new URL(url);

      // Обработка коротких ссылок youtu.be
      if (urlObj.hostname === 'youtu.be') {
        videoId = urlObj.pathname.slice(1);
      }
      // Обработка стандартных ссылок youtube.com
      else if (
        urlObj.hostname === 'www.youtube.com' ||
        urlObj.hostname === 'youtube.com'
      ) {
        if (urlObj.searchParams.has('v')) {
          videoId = urlObj.searchParams.get('v');
        }
        // Обработка /embed/ID или /v/ID
        else if (urlObj.pathname.startsWith('/embed/') || urlObj.pathname.startsWith('/v/')) {
          videoId = urlObj.pathname.split('/')[2];
        }
      }

      return videoId;
    } catch (e) {
      console.error("Invalid URL:", url);
      return null;
    }
  };

  return (
    <section className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-8 px-2">
      <h2 className="text-3xl max-mdx:text-2xl font-bold uppercase">
        {t('video-review')}
      </h2>
      <div className="grid grid-cols-1 gap-4 mdx:grid-cols-2 xl:grid-cols-3">
        {visibleVideos.map((video, index) => {
          const videoId = extractVideoId(video.url);
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          return (
            videoId && (
              <div key={index} className="w-full">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-2 text-black font-medium text-[18px] mdx:text-[24px] font-semibold">
                  {video.title || "No title"}
                </div>
              </div>
            )
          );
        })}
      </div>
      {videos.length > 3 && (
        <div className="flex justify-center mb-[120px]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border text-[#252324] py-3 px-[55px] text-[14px] mdx:text-[16px] font-bold hover:text-[#fff] hover:bg-[#E94B50]"
          >
            {showAll ? t('hide') : t('download')}
          </button>
        </div>
      )}
    </section>
  );
}
