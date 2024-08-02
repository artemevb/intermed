"use client"
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Close from '@/public/svg/close.svg';
import RadioButton from '@/public/svg/RadioButton.svg';
import EllipseButton from '@/public/svg/EllipseButton.svg';
import Image from "next/image";

export default function Dropdown({ handleFilter }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    handleFilter(filter);
    closeModal();
  };

  return (
    <div className="w-1/2">
      <Menu as="div" className="relative w-full lg:hidden">
        <div>
          <Menu.Button
            className="inline-flex justify-center items-center w-full px-4 py-3 font-medium text-black bg-white border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
            onClick={openModal}
          >
            {selectedFilter === 'all' ? 'Все товары' : selectedFilter === 'new' ? 'Новинки' : 'Акции'}
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          </Menu.Button>
        </div>
      </Menu>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 w-80 mdx:w-[90%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[22px] mdx:text-[27px]  font-semibold ">Сортировать</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <Image
                  src={Close}
                  width={500}
                  height={500}
                  alt={`Close`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] mdx:max-w-[140px]  mdx:max-h-[140px] rounded-2xl "
                /></button>
            </div>
            <div className="flex flex-col space-y-4 divide-y ">
              <button
                className={`pt-3 text-[18px] mdx:text-[18px] flex items-center ${selectedFilter === 'all' ? 'text-red-600' : 'text-gray-900'}`}
                onClick={() => handleFilterChange('all')}
              >
                {selectedFilter === 'all' ? <span className="mr-2">                <Image
                  src={RadioButton}
                  width={500}
                  height={500}
                  alt={`Close`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] mdx:max-w-[140px]  mdx:max-h-[140px] rounded-2xl "
                /></span> : <span className="mr-2"><Image
                  src={EllipseButton}
                  width={500}
                  height={500}
                  alt={`Close`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] mdx:max-w-[140px]  mdx:max-h-[140px] rounded-2xl "
                /></span>}
                Все товары
              </button>
              <button
                className={`pt-3 text-[18px] mdx:text-[18px] flex items-center ${selectedFilter === 'promotions' ? 'text-red-600' : 'text-gray-900'}`}
                onClick={() => handleFilterChange('promotions')}
              >
                {selectedFilter === 'promotions' ? <span className="mr-2"><Image
                  src={RadioButton}
                  width={500}
                  height={500}
                  alt={`Close`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] mdx:max-w-[140px]  mdx:max-h-[140px] rounded-2xl "
                /></span> : <span className="mr-2"><Image
                  src={EllipseButton}
                  width={500}
                  height={500}
                  alt={`Close`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] mdx:max-w-[140px]  mdx:max-h-[140px] rounded-2xl "
                /></span>}
                Акции
              </button>
              <button
                className={`pt-3 text-[18px] mdx:text-[18px] flex items-center ${selectedFilter === 'new' ? 'text-red-600' : 'text-gray-900'}`}
                onClick={() => handleFilterChange('new')}
              >
                {selectedFilter === 'new' ? <span className="mr-2"><Image
                  src={RadioButton}
                  width={500}
                  height={500}
                  alt={`Close`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] mdx:max-w-[140px]  mdx:max-h-[140px] rounded-2xl "
                /></span> : <span className="mr-2"><Image
                  src={EllipseButton}
                  width={500}
                  height={500}
                  alt={`Close`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] mdx:max-w-[140px]  mdx:max-h-[140px] rounded-2xl "
                /></span>}
                Новинки
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
