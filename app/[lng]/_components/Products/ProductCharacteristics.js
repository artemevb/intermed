"use client";
import Image from "next/image";
import mindray from "@/public/images/aboutUs/partners/image58.png";
import arrowred from "@/public/svg/arrow-right-red.svg";
import Modal from "../Modal/AttachedFiles";
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function ProductCharacteristics() {
  const data = [
    {
      category: 'description',
      desc: true,
      data: 'Основной предшествующей моделью Mindray Resona R9 является УЗИ аппарат Resona 7, а референсными аппаратами – Mindray DC-80, M6, MX7, M9, а также Samsung RS85, Esaote MyLab Twice, Philips EPIQ 7, Supersonic Aixplorer, GE Logiq E9 и Voluson E8, Mindray TE7 и DC-80A. Режимы визуализации на УЗИ аппарате Mndray Resona R9: В, М, цветной М-режим, цветной допплер, амплитудный допплер, PWD, CWD, комбинированные режимы (B+M, PW+B, Color+B, Power+B, PW+Color+B, Power+PW+B), TDI, Smart 3D, 4D, iScape View, THI, Эластография, контрастирование, STQ, STE, V Flow. Точно такие же режимы доступны на УЗИ аппарате Resona 7'
    },
    {
      category: 'characteristics',
      desc: false,
      data: [
        {
          title: 'Display',
          data: [
            '23.8" high-resolution LED monitor',
            '13.3" tilting gesture control touch screen'
          ]
        },
      ]
    },
    {
      category: 'client',
      desc: false,
      data: [
        {
          name: 'Vitamed Medical',
          description: 'VITAMED - это современный, уникальный, многопрофильный медицинский центр с широким спектр...',
          logo: mindray,
        },
      ]
    },
    {
      files: [
        {
          id: 7,
          name: "7-Zoncare%2",
          size: "6.30 Mb",
          downloadLink: "http://213.230.91.55:8130/v1/product/file/7-Zoncare%20Catalog%20--2024.pdf"
        },
        {
          id: 8,
          name: "8-Quotation%2",
          size: "0.27 Mb",
          downloadLink: "http://213.230.91.55:8130/v1/product/file/8-Quotation%20for%20Browiner%20X-ray.pdf"
        },
        {
          id: 9,
          name: "9-Perla%20Denta",
          size: "0.18 Mb",
          downloadLink: "http://213.230.91.55:8130/v1/product/file/9-Perla%20Dental%20Unit%20Product%20List.pdf"
        }
      ]
    }
  ];

  const lng = useLanguage();
  const { t } = useTranslation(lng, 'product-characteristics')

  const [active, setActive] = useState(data[0].category);
  const [filtered, setFiltered] = useState(data[0]);
  const [selectedAttachedFiles, setSelectedAttachedFiles] = useState(null);

  const openModal = (files) => {
    setSelectedAttachedFiles(files);
  };

  const closeModal = () => {
    setSelectedAttachedFiles(null);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col relative">
        <div className="w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto">
          <button
            onClick={() => {
              setActive('description');
              setFiltered(data[0]);
            }}
            className={`z-10 w-auto text-lg transition-text font-medium ${active === 'description'
              ? "text-[#E31E24] border-b-2 border-b-[#E31E24]"
              : "text-neutral-400"
              }`}
          >
            <h3 className="my-2 whitespace-nowrap">{t('description')}</h3>
          </button>

          <button
            onClick={() => {
              setActive('characteristics');
              setFiltered(data[1]);
            }}
            className={`z-10 w-auto text-lg transition-text font-medium ${active === 'characteristics'
              ? "text-[#E31E24] border-b-2 border-b-[#E31E24]"
              : "text-neutral-400"
              }`}
          >
            <h3 className="my-2 whitespace-nowrap">{t('characteristics')}</h3>
          </button>

          <button
            onClick={() => {
              setActive('client');
              setFiltered(data[2]);
            }}
            className={`z-10 w-auto text-lg transition-text font-medium ${active === 'client'
              ? "text-[#E31E24] border-b-2 border-b-[#E31E24]"
              : "text-neutral-400"
              }`}
          >
            <h3 className="my-2 whitespace-nowrap">{t('client')}</h3>
          </button>
        </div>
        <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
      </div>
      <div>
        {filtered.desc ? (
          <p className="text-lg leading-5">{filtered.data}</p>
        ) : (
          <div className="flex flex-col gap-6 w-full">
            {filtered.category === 'characteristics' && (
              filtered.data.map((item, i) => (
                <div key={i} className="w-full flex gap-3">
                  <p className="w-full text-neutral-400 max-w-[100px] md:max-w-[150px] mdx:max-w-[200px] lg:max-w-[400px]">
                    {item.title}
                  </p>
                  <div className="flex w-full flex-col">
                    {item.data.map((subitem, j) => (
                      <p key={j}>{subitem}</p>
                    ))}
                  </div>
                </div>
              ))
            )}

            {filtered.category === 'client' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filtered.data.map((client, index) => (
                  <div key={index} className="border  p-4 ">
                    <div className="flex flex-col items-center mdx:flex-row">
                      <Image src={client.logo} alt={client.name} className="w-full max-w-[320px] h-auto mb-2 p-5 object-contain lg:max-w-[340px]" />
                      <div className="mt-2">
                        <h3 className="font-bold text-lg mdx:text-2xl mdx:mb-2">{client.name}</h3>
                        <p className="text-[#808080] mdx:mb-4">{client.description}</p>
                        <button className="text-[#E31E24] mt-2 flex items-center">{t('more')} <Image
                          src={arrowred}
                          width={100}
                          height={100}
                          alt="Arrow Icon"
                          className="w-5 h-5"
                        /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-start mt-2">
        <button
          className="bg-[#FCE8E9] text-[#E31E24] py-4 px-[30px] font-bold hover:text-[#EE787C]"
          onClick={() => openModal(data[3].files)}
        >
          {t('attached-files')}
        </button>
      </div>
      <Modal selectedAttachedFiles={selectedAttachedFiles} closeModal={closeModal} />
    </div>
  );
}
