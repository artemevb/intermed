"use client"
import Image from "next/image";
import { useState } from "react";
import VerticalCarousel from "./ProductCarousel";
import Link from "next/link";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import SignUpForEvent from '@/app/_components/Modal/SendKp';

export default function ProductPreview({productData}) {
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
        <VerticalCarousel  data={productData.gallery}/>
      </div>
      <div className="w-full flex-1 flex flex-col gap-5">
        <div className="flex gap-4 max-lg:hidden">
          <h1 className="text-3xl font-semibold">{productData.name}</h1>
          <div className="py-2 px-5 font-bold rounded-full text-[#E31E24] bg-[#FCE8E9]">
            Новинка
          </div>
        </div>
        <p className="text-neutral-500 leading-5">
         {productData.shortDescription}
        </p>
        <hr />
        <div className="w-full flex justify-between items-center">
          {/* <Link href={`/partners/${card.link}`}>
            <span className="text-[#E31E24] font-semibold mdx:text-[18px]">
              <GreenArrow title={"Подробнее"} />
            </span>
          </Link> */}
          <Link href={`/technical-support/xojik`}>
          <button className="w-full max-w-[220px] leading-5 cursor-pointer text-left"
            >
            Гарантия от производителя <span className="relative after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px]">Техническая поддержка</span>
          </button>
          </Link>
          <Image
            src={productData.brand.logo.url}
            width={300}
            height={300}
            alt="Mindray"
            quality={100}
            className="w-[150px]"
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