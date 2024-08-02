"use client";
import { useState } from "react";
import Image from "next/image";
import mindray from "@/public/images/aboutUs/partners/image58.png";
import arrowred from "@/public/svg/arrow-right-red.svg";

export default function ProductCharacteristics() {
  const data = [
    {
      category: 'description',
      title: 'Описание',
      desc: true,
      data: 'Основной предшествующей моделью Mindray Resona R9 является УЗИ аппарат Resona 7, а референсными аппаратами – Mindray DC-80, M6, MX7, M9, а также Samsung RS85, Esaote MyLab Twice, Philips EPIQ 7, Supersonic Aixplorer, GE Logiq E9 и Voluson E8, Mindray TE7 и DC-80A. Режимы визуализации на УЗИ аппарате Mndray Resona R9: В, М, цветной М-режим, цветной допплер, амплитудный допплер, PWD, CWD, комбинированные режимы (B+M, PW+B, Color+B, Power+B, PW+Color+B, Power+PW+B), TDI, Smart 3D, 4D, iScape View, THI, Эластография, контрастирование, STQ, STE, V Flow. Точно такие же режимы доступны на УЗИ аппарате Resona 7'
    },
    {
      category: 'characteristics',
      title: 'Характеристики',
      desc: false,
      data: [
        {
          title: 'Display',
          data: [
            '23.8" high-resolution LED monitor',
            '13.3" tilting gesture control touch screen'
          ]
        },
        {
          title: 'Control Panel',
          data: [
            '6-directional floating control panel'
          ]
        },
        {
          title: 'Transducer Ports',
          data: [
            'Five pinless transducer ports with light indicators'
          ]
        },
        {
          title: 'Heating and Handling',
          data: [
            'Temperature-controlled gel warmer'
          ]
        },
        {
          title: 'Locking Mechanism',
          data: [
            'Central and swivel lock'
          ]
        },
        {
          title: 'Technology',
          data: [
            'iClear+ for higher signal-to-noise ratio and reduced speckle noise',
            'UWN Contrast Imaging for improved contrast visualization',
            'Plane-Wave-Based CEUS for high frame rate contrast-enhanced ultrasound',
            'Micro Flow Enhancement for detailed blood flow imaging',
            'High Frame Rate CEUS (HiFR CEUS) for dynamic contrast studies',
          ]
        },
      ]
    },
    {
      category: 'client',
      title: 'Клиент',
      desc: false,
      data: [
        {
          name: 'Vitamed Medical',
          description: 'VITAMED - это современный, уникальный, многопрофильный медицинский центр с широким спектр...',
          logo: mindray,
        },
        {
          name: 'Akfa Medline',
          description: 'AKFA Medline University Hospital (AMUH) - это медицинское учреждение с высококвалифицированными специали...',
          logo: mindray,
        },
        {
          name: 'ZARMED PRATIKSHA',
          description: 'ZARMED PRATIKSHA Bogi’shamol - первая клиника в Самарканде, которая является образцом высокоэтичной стациона...',
          logo: mindray,
        },
        {
          name: 'Fergana Premium Medical',
          description: 'Многопрофильный медицинский центр Fergana Premium Medical оказывает качественные лечеб...',
          logo: mindray,
        }
      ]
    },
  ];

  const [active, setActive] = useState(data[0].category);
  const [filtered, setFiltered] = useState(data[0]);

  const handleFilter = (catname) => {
    setActive(catname);
    const filteredArr = data.find((item) => item.category === catname);
    setFiltered(filteredArr);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col relative">
        <div className="w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto">
          {data.map((item, index) => {
            return (
              <button
                onClick={() => handleFilter(item.category)}
                key={index}
                className={`z-10 w-auto text-lg transition-text font-medium ${active == item.category
                  ? "text-[#E31E24] border-b-2 border-b-[#E31E24]"
                  : "text-neutral-400"
                  }`}
              >
                <h3 className="my-2 whitespace-nowrap">{item.title}</h3>
              </button>
            );
          })}
        </div>
        <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
      </div>
      <div>
        {filtered.desc ? (
          <p className="text-lg leading-5">{filtered.data}</p>
        ) : (
          <div className="flex flex-col gap-6 w-full">
            {filtered.category === 'characteristics' ? (
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
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filtered.data.map((client, index) => (
                  <div key={index} className="border  p-4 ">

                    <div className="flex flex-col items-center mdx:flex-row">
                      <Image src={client.logo} alt={client.name} className="w-full max-w-[320px] h-auto mb-2 p-5 object-contain lg:max-w-[340px]" />
                      <div className="mt-2">
                        <h3 className="font-bold text-lg mdx:text-2xl mdx:mb-2">{client.name}</h3>
                        <p className="text-[#808080] mdx:mb-4">{client.description}</p>
                        <button className="text-[#E31E24] mt-2 flex items-center">Подробнее <Image
                          src={arrowred}
                          width={100}
                          height={100}
                          alt="Heart Icon"
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
    </div>
  );
}
