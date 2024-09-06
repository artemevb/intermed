"use client";
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import  React  from 'react';

export default function MoreInfo({ Data }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'events-more-info');

  const infoData = [
    { label: t('organizer'), value: Data?.organizer },
    { label: t('country'), value: Data?.country },
    { label: t('date'), value: `${Data?.dateFrom} - ${Data?.dateTo}` },
    { label: t('time'), value: `${Data?.timeFrom} - ${Data?.timeTo}` },
    { label: t('adress'), value: Data?.address },
    { label: t('price'), value: t('coast') }, // Assuming price is hardcoded as "Free"
    { label: t('number'), value: Data?.phoneNum },
    { label: t('email'), value: Data?.email }
  ];

  return (
    <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-4 px-2">
      <div className="xl:flex xl:flex-row xl:gap-2 xl:justify-between">
        <div>
          <h2 className="text-[25px] uppercase mdx:text-[33px] xl:text-[39px] font-semibold xl:w-[467px]">
            {t('info')}
          </h2>
        </div>
        <div className="grid grid-cols-2 mt-[30px] gap-x-5 gap-y-5">
          {infoData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-[#808080]">{item.label}</div>
              <div>{item.value}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
