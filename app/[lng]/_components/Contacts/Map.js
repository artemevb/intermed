"use client"

import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Map() {

    const lng = useLanguage();
    const { t } = useTranslation(lng, 'map-map')

    return (
        <div className="mx-auto relative w-full">
            <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
                <div className="h-[350px] mdx:h-[450px] xl:h-[620px] w-full xl:max-w-[950px] xl:max-h-[750px] 5xl:max-w-[1400px]">
                    {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A91d36eeb34d790da6904a560f5fd9b0e0072a93a42f95bc0fe3dd8ae45fdaf0c&amp;source=constructor" width="100%" height="400" className="relative top-0 left-0 w-full h-full border-none " frameborder="0"></iframe> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11980.576319452191!2d69.28673930863411!3d41.34922195465565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef35418406693%3A0xf91e0631f842852c!2sINTERMED%20Innovation!5e0!3m2!1sru!2s!4v1723049950593!5m2!1sru!2s"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className=" mx-[14px] 3xl:mx-auto">
                    <div className="mt-4 max-w-[1440px] 5xl:max-w-[2000px] xl:mx-5">
                        <form className="flex flex-col xl:grid xl:gap-8">
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col items-start gap-1 pb-3'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">{t('address')}</p>
                                </div>
                                <div>
                                    <a href="https://maps.app.goo.gl/woz2gPqNxyCKeoV18" target="_blank" rel="noopener noreferrer" className="block text-black text-[20px] mdx:text-[28px] xl:text-[30px] mdx:w-[470px]">
                                        {t('city-tashkent')}
                                    </a>
                                </div>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder   flex flex-col gap-1 items-start pb-3'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]"> {t('telephone')}</p>
                                </div>
                                <div>
                                    <a href="tel:+971543980707" className="hover:underline text-black text-[20px] mdx:text-[28px] xl:text-[30px]">+998 78 150-47-47</a>
                                </div>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 '>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">{t('schedule')}</p>
                                </div>
                                <p className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]"> {t('schedule-time')}</p>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 xl:border-b-0'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">E-mail</p>
                                </div>
                                <div>
                                    <a href="mailto:info@mrjtrade.ae" className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]">info@imed.uz</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}