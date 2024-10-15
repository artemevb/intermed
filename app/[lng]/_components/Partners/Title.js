"use client"
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Title() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'partners-title')

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 mt-7 mdx:mt-[60px]">
            <div>
                <h2 className="text-[25px] mdx:text-[35px] xl:text-[40px] mb-[5px]  font-semibold uppercase">{t('partners')}</h2>
                <p className="text-[14px] mdx:text-[20px] text-[#808080]">{t('description')}</p>
            </div>
        </div>
    )
}
