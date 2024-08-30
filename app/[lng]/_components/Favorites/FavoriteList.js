"use client"

import { useState, useEffect } from 'react';
import Catalogitem from '../Catalog/Catalogitem';
import SignUpForEvent from '../Modal/SendKp';
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function FavoriteList() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'favorites-favorite-list');

  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-[1440px] px-2 flex flex-col gap-12 mx-auto">
      <div className="w-full flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-3xl max-mdx:text-2xl xl:text-[38px] font-semibold uppercase">{t('favorite')}</h1>
        <button
          className="px-7 py-3 text-sm mdl:py-4 xl:text-[16px] xl:px-[58px] bg-contactBg text-white"
          onClick={handleOpenModal}
        >
          {t('send-kp')}
        </button>
      </div>
      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4">
        {favorites.map((item, index) => (
          <Catalogitem
            key={index}
            new={item.new}
            sale={item.sale}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            slug={item.slug}
          />
        ))}
      </div>
      {isModalOpen && <SignUpForEvent closeModal={handleCloseModal} />}
    </div>
  );
}
