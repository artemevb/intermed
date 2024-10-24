"use client"
import Image from 'next/image';
import innovationMedical from "@/public/images/equipment/innovationMedical.png";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Title() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'equipment-title')

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto">
            <div className='mx-[15px]'>
                <h1 className="text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] mb-4 uppercase xl:hidden font-semibold">
                    {t('innovation_health')}
                </h1>
                <div className='xl:flex xl:flex-row'>
                    <div className=" w-[100%] h-auto mb-4 xl:w-[43%] px-[20px] xl:px-0">
                        <Image
                            src={innovationMedical}
                            alt={t('main_photo')}
                            width={1500}
                            height={1500}
                            quality={100}
                            
                            className='w-full h-auto object-contain' />
                    </div>
                    <div className='xl:w-[50%] xl:ml-[62px] xl:mt-[20px]'>
                        <h2 className="font-semibold text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] mb-4 uppercase hidden xl:block text-[#252324]" >
                            {t('innovation_health')}
                        </h2>
                        <p className="text-[#808080] text-[15px] mdx:text-[20px]">
                            {t('clinic_equipment_intro')}<br /><br />
                            {t('clinic_equipment_details')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}