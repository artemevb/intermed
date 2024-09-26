"use client";
import { useEffect, useRef, useCallback } from 'react';
import CatalogList from '../Catalog/CatalogBar';
import Image from 'next/image';
import close from '@/public/svg/close-gray.svg';
import { useTranslation } from '../../../i18n/client';

export default function Category({
  handleClose,
  allCategories,
  setCategoryID,
  setCatalogID,
  handleCatalogOpen,
  lng,
  currentCategoryId, // Принимаем проп
}) {
  const { t } = useTranslation(lng, 'modal-category');
  const modalRef = useRef(null); // Ref для модального окна

  // Функция для проверки кликов вне модального окна
  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose(); // Закрыть модальное окно
    }
  }, [handleClose]);

  // Добавить и удалить обработчик кликов
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='fixed lg:hidden inset-0 z-[9999] bg-modalBg flex justify-center items-center px-2 py-12'>
      <div
        className='w-full h-full overflow-y-auto no-scrollbar bg-white relative px-6 pt-8'
        ref={modalRef} // Присоединить ref к модальному окну
      >
        <button
          onClick={handleClose}
          className='w-6 h-6 absolute right-6 top-8 focus:outline-none'
          aria-label={t('close')}
        >
          <Image
            src={close}
            width={24}
            height={24}
            quality={100}
            alt='Close icon'
            className='h-full w-full'
          />
        </button>
        <h2 className='mb-8 text-3xl text-left font-semibold'>
          {t('category')}
        </h2>
        <CatalogList
          allCategories={allCategories}
          onCatalogOpen={handleCatalogOpen}
          setCategoryID={setCategoryID}
          setCatalogID={setCatalogID}
          lng={lng}
          handleClose={handleClose} // Передача функции handleClose в CatalogList
          currentCategoryId={currentCategoryId} // Передача выбранной категории
        />
      </div>
    </div>
  );
}
