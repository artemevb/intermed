"use client"
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Advantages() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'equipment-advantages');
    
    const services = [
        {
            title: t("quality_equipment"),
            description: t("high_quality_equipment"),
            highlight: false,
        },
        {
            title: t("comprehensive_solutions"),
            description: t("installation_training"),
            highlight: false,
        },
        {
            title: t("time_cost_savings"),
            description: t("certified_goods"),
            highlight: false,
        },
        {
            title: "",
            description: t("trusted_by"),
            highlight: true,
        },
    ];

    return (
        <>
            <div className="max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-3">
                <div className="text-[25px] font-semibold mdx:text-[36px] xl:text-[40px] px-2 mb-4 text-[#252324]">
                {t("advantages_title-1")} <br/>{t("advantages_title-2")}
                </div>
                <div className="grid gap-4 mdl:grid-cols-2 2xl:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex ${service.highlight ? 'justify-center items-center' : 'flex-col'} h-[230px] slg:h-[265px] 2xl:h-[280px] p-6 mdl:p-6 slg:p-9 2xl:p-3 3xl:p-5 border ${service.highlight ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                        >
                                       

                            {service.title && (
                                <div className="text-[22px] mdx:text-[28px] font-bold text-red-500 mb-4 mdl:mb-2 slg:mb-4">
                                    {service.title.split(' ').map((word, i) => (
                                        <span key={i}>
                                            {word}
                                            {i === 0 && <br />}
                                            {i !== 0 && ' '}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <div className={`text-[16px] mdx:text-[20px] ${service.highlight ? 'text-[20px] mdx:text-[24px]' : ''}`}>
                                {service.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}