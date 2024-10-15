// Main.js
"use client"; // Объявляем, что это клиентский компонент

import React from 'react';
import Banner from './Banner';
import Equipments from "./Equipments";
import Scheme from "./Scheme";
import FullEquipment from "./FullEquipment";
import ProfessionalEquipments from "./ProfessionalEquipments";
import AboutUs from "./AboutUs";
import Application from "./Application";
import Partners from "../About/Partners";
import News from "./News";
import Sertificates from "./Sertificates";
import Contacts from "./Contacts";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function Main({ banners }) { // Принимаем баннеры через пропсы
  const lng = useLanguage()
  const { t } = useTranslation(lng, 'main')

  const closeModal = () => {

  };

  return (
    <div className="w-full bg-white flex flex-col gap-28 xl:gap-36">
      <h1 className='hidden'>{t('title')}</h1>{/* медицинская техника в Ташкенте или Узбекистане, сделано для seo */}
      <div className="flex w-full flex-col gap-12 lg:gap-[130px]">
        <Banner banners={banners} /> 
        <ProfessionalEquipments />
      </div>
      <Equipments />
      <AboutUs />
      <Scheme />
      <FullEquipment />
      <Sertificates />
      <Partners />
      <News />
      <Contacts />
      <Application closeModal={closeModal} />
    </div>
  );
}
