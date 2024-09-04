"use client"
import Image from "next/image";
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import VerticalCarousel from "./ProductCarousel";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import SignUpForEvent from '../../_components/Modal/SendKp';

export default function ProductPreview({productData}) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'product-main')

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formatTextWithNewlines = (text) => {
		return text.split('\n').map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		))
	}

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="flex-1 w-full">
        <VerticalCarousel  data={productData.gallery}/>
      </div>
      <div className="w-full flex-1 flex flex-col gap-5">
        <div className="flex gap-4 max-lg:hidden">
        <h1 className="text-3xl font-semibold">{productData.name}</h1>
          <div className="py-2 px-5 font-bold rounded-full text-[#E31E24] bg-[#FCE8E9]">
          {t('new')}
          </div>
        </div>
        <p className="text-neutral-500 leading-5">
         {
         formatTextWithNewlines(productData.shortDescription)
         }
        </p>
        <hr />
        <div className="w-full flex justify-between items-center">
          {/* <Link href={`/partners/${card.link}`}>
            <span className="text-[#E31E24] font-semibold mdx:text-[18px]">
              <GreenArrow title={"Подробнее"} />
            </span>
          </Link> */}
          <a href={`/technical-support/xojik`}>
            <button className="w-full max-w-[220px] leading-5 cursor-pointer text-left"
            >
              {t('support')} <span className="relative after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px]">{t('technical-support')}</span>
            </button>
          </a>
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
            {t('kp')}
          </button>
          <button className="px-3 py-3 border flex items-center justify-center">
            <Image
              src={heartIcon}
              width={100}
              height={100}
              quality={100}
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