"use client"
import Image from "next/image";
import { useState } from "react";
import VerticalCarousel from "./ProductCarousel";
import mindray from "@/public/images/aboutUs/partners/image41.png";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import SignUpForEvent from '@/app/_components/Modal/SendKp'; 

export default function ProductPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="flex-1 w-full">
        <VerticalCarousel />
      </div>
      <div className="w-full flex-1 flex flex-col gap-5">
        <div className="flex gap-4 max-lg:hidden">
          <h1 className="text-3xl font-semibold">RESONA R9</h1>
          <div className="py-2 px-5 font-bold rounded-full text-[#E31E24] bg-[#FCE8E9]">
            Новинка
          </div>
        </div>
        <p className="text-neutral-500 leading-5">
          Основной предшествующей моделью Mindray Resona R9 является УЗИ аппарат Resona 7, а референсными аппаратами – Mindray DC-80, M6, MX7, M9, а также Samsung RS85, Esaote MyLab Twice, Philips EPIQ 7, Supersonic Aixplorer, GE Logiq E9 и Voluson E8, Mindray TE7 и DC-80A.
          Режимы визуализации на УЗИ аппарате Mndray Resona R9: В, М, цветной М-режим, цветной допплер, амплитудный допплер, PWD, CWD, комбинированные режимы (B+M, PW+B, Color+B, Power+B, PW+Color+B, Power+PW+B), TDI, Smart 3D, 4D, iScape View, THI, Эластография, контрастирование, STQ, STE, V Flow
        </p>
        <hr />
        <div className="w-full flex justify-between items-center">
          <p className="w-full max-w-[220px] leading-4">
            {`Гарантия от производителя Техническая поддержка`}
          </p>
          <Image
            src={mindray}
            width={300}
            height={300}
            alt="Mindray"
            className="w-32 h-10"
          />
        </div>
        <div className="flex gap-4">
          <button
            className="py-4 px-[60px] text-sm font-semibold text-white bg-[#E94B50] lg:px-[80px] 2xl:px-[90px]"
            onClick={handleOpenModal}
          >
            Отправить КП
          </button>
          <button className="px-3 py-3 border flex items-center justify-center">
            <Image
              src={heartIcon}
              width={100}
              height={100}
              alt="Heart Icon"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
      {isModalOpen && <SignUpForEvent closeModal={handleCloseModal} />}
    </div>
  );
}