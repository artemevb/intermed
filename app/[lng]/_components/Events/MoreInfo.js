"use client"
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function MoreInfo({Data}) {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'events-more-info');


    
    const infoData = [
        { label: organizer, value: Data?.organizer },
        { label: country, value: Data?.country },
        { label: date, value: `${Data?.dateFrom} - ${Data?.dateTo}` },
        { label: time, value:  `${Data?.timeFrom} - ${Data?.timeTo}`},
        { label: address, value: Data?.address },
        { label: price, value: "Бесплатно" },
        { label: phone, value: Data?.phoneNum },
        { label: email, value: Data?.email }
    ];

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-4 px-2">
            <div className="xl:flex xl:flex-row xl:gap-2 xl:justify-between">
                <div>
                    <h2 className="text-[25px] uppercase mdx:text-[33px] xl:text-[39px] font-semibold xl:w-[467px]">{t('info')}</h2>
                </div>
                <div className="grid grid-cols-2 mt-[30px] gap-x-5 gap-y-5">
                    <div className="text-[#808080]">{t('organizer')}</div>
                    <div>{infoData.organizer}</div>

                    <div className="text-[#808080]">{t('country')}</div>
                    <div>{infoData.country}</div>

                    <div className="text-[#808080]">{t('date')}</div>
                    <div>{infoData.date}</div>

                    <div className="text-[#808080]">{t('time')}</div>
                    <div>{infoData.time}</div>

                    <div className="text-[#808080]">{t('adress')}</div>
                    <div>{infoData.address}</div>

                    <div className="text-[#808080]">{t('price')}</div>
                    <div>{infoData.price}</div>

                    <div className="text-[#808080]">{t('number')}</div>
                    <div>{infoData.phone}</div>

                    <div className="text-[#808080]">{t('email')}</div>
                    <div>{infoData.email}</div>
                </div>
            </div>
        </div>
    );
}
