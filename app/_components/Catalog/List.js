"use client";
import { useState } from 'react';
import CatalogList from './CatalogBar';
import mindrayDC60 from '@/public/images/equipments/equip-lab.png'; 
import mindraySV300 from '@/public/images/equipments/equip-uzi.png'; 
import cl900i from '@/public/images/equipments/equip-lab.png'; 
import mindrayUniBase from '@/public/images/equipments/equip-uzi.png'; 
import mindrayBeneHeart from '@/public/images/equipments/equip-lab.png'; 
import Catalogitem from './Catalogitem';
import Dropdown from './DropDown';
import tableCatalog from '@/public/svg/table-catalog.svg';
import Image from 'next/image';
import Category from '../Modal/Category';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const categories = [
  {
    title: 'Все товары',
    slug: 'all',
  },
  {
    title: 'Новинки',
    slug: 'new',
  },
  {
    title: 'Акции',
    slug: 'promotions',
  },
];

const data = [
  {
    category: '1-ultrasound-diagnostic-systems',
    catalogList: [
      {
        catalog: '4-portable',
        data: [
          {
            title: 'MINDRAY DC 60 X-insight',
            description: 'A high-end ultrasound scanner that allows for high-quality diagnostics',
            image: mindrayDC60,
            new: false,
            promotions: true,
            price: '2500000 y.e',
            sale: '-35%',
            slug: '1-mindray',
          },
          {
            title: 'MINDRAY SV300',
            description: 'Advanced solution for mechanical ventilation in clinical settings',
            image: mindraySV300,
            new: true,
            promotions: false,
            slug: '2-mindray',
          },
          {
            title: 'CL-900i',
            description: 'One of the smallest fully automated chemiluminescent immunoassay analyzers',
            image: cl900i,
            new: true,
            promotions: false,
            sale: '-5%',
            slug: '1-cl',
          },
          {
            title: 'MINDRAY UniBase 30',
            description: 'Reliable and durable operating table at an affordable price',
            image: mindrayUniBase,
            new: true,
            promotions: false,
            slug: '2-mindray',
          },
          {
            title: 'MINDRAY BeneHeart',
            description: 'Mindray’s new solution for non-invasive electrocardiography',
            image: mindrayBeneHeart,
            new: false,
            promotions: true,
            price: '2500 y.e',
            sale: '-5%',
            slug: '4-mindray',
          },
          {
            title: 'MINDRAY DC 60 X-insight',
            description: 'A high-end ultrasound scanner that allows for high-quality diagnostics',
            image: mindrayDC60,
            new: false,
            promotions: true,
            price: '2500 y.e',
            sale: '-55%',
            slug: '5-mindray',
          },
          {
            title: 'MINDRAY SV300',
            description: 'Advanced solution for mechanical ventilation in clinical settings',
            image: mindraySV300,
            new: true,
            promotions: false,
            slug: '6-mindray',
          },
          {
            title: 'CL-900i',
            description: 'One of the smallest fully automated chemiluminescent immunoassay analyzers',
            image: cl900i,
            new: true,
            promotions: false,
            slug: '2-cl',
          },
          {
            title: 'MINDRAY UniBase 30',
            description: 'Reliable and durable operating table at an affordable price',
            image: mindrayUniBase,
            new: true,
            promotions: false,
            slug: '7-mindray',
          },
          {
            title: 'MINDRAY BeneHeart',
            description: 'Mindray’s new solution for non-invasive electrocardiography',
            image: mindrayBeneHeart,
            new: false,
            promotions: true,
            price: '2500 y.e',
            sale: '-25%',
            slug: '8-mindray',
          },
        ],
      },
    ],
  },
];

export default function List() {
  const [categoryModal, setCategoryModal] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setDisplayAll(false); // Reset display state when changing filter
  };

  const handleClose = () => {
    setCategoryModal(false);
  };

  const handleLoadMore = () => {
    setDisplayAll(true);
  };

  const getFilteredData = () => {
    let items = data[0].catalogList[0].data;

    if (selectedCategory === 'new') {
      items = items.filter((item) => item.new);
    } else if (selectedCategory === 'promotions') {
      items = items.filter((item) => item.promotions);
    }

    return displayAll ? items : items.slice(0, 10);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:gap-20 gap-5 px-2 py-24">
      {categoryModal && <Category handleClose={handleClose} />}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-5">
        <h1 className="text-3xl max-mdx:text2xl font-semibold">КАТАЛОГ</h1>
        <div className="z-[999] flex items-center justify-between">
          <button
            onClick={() => setCategoryModal(true)}
            className="px-4 py-3 justify-center backdrop-opacity-10 flex items-center lg:hidden w-1/2 border border-gray-300"
          >
            Категории
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          </button>
          <Dropdown handleFilter={handleFilter} />
          <div className="w-full items-start  flex-col gap-2 hidden lg:flex">
            <div className="hidden lg:flex flex-col relative items-end ">
              <div className="overflow-x-scroll gap-4 lg:gap-6 scrollbar-hide touch-auto  hidden lg:flex ">
                {categories.map((item, index) => (
                  <button
                    onClick={() => handleFilter(item.slug)}
                    key={index}
                    className={`z-10 w-auto text-lg transition-text font-semibold ${selectedCategory == item.slug
                      ? 'text-redMain border-b-2 border-b-redMain'
                      : 'text-neutral-400'
                      }`}
                  >
                    <h3 className="my-2 whitespace-nowrap">{item.title}</h3>
                  </button>
                ))}
              </div>
              <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-10">
        <div className="w-full max-w-[350px] max-2xl:max-w-[280px]  max-lg:hidden">
          <CatalogList />
        </div>
        <div>
          <div className="w-full grid grid-cols-1 mdl:grid-cols-2 3xl:grid-cols-3 gap-4">
            {getFilteredData().map((item, index) => (
              <div key={index}>
                <Catalogitem
                  new={item.new}
                  sale={item.sale}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  slug={item.slug}
                />
              </div>
            ))}
          </div>
          {!displayAll && (
            <div className="flex justify-center mt-[50px] mdx:mt-[70px]">
              <button className="border p-3 text-[14px] mdx:text-[16px] px-[50px] hover:bg-[#F9D2D3]" onClick={handleLoadMore}>
                Загрузить еще
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
