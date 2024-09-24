"use client";
import Image from "next/image";
import { useTranslation } from '../../../i18n/client';
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import VerticalCarousel from "./ProductCarousel";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import heartIconFilled from "@/public/svg/main/fav-filled.svg";
import SignUpForEvent from '../../_components/Modal/SendKp';
// import Head from 'next/head';

export default function ProductPreview({ productData }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'product-main');

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
    ));
  };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(item => item.slug === productData.slug));
  }, [productData.slug]);

  const handleFavoriteToggle = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter(item => item.slug !== productData.slug);
    } else {
      favorites.push({
        title: productData.name,
        description: productData.shortDescription,
        image: productData.gallery[0] ? productData.gallery[0].url : null,
        price: productData.originalPrice ? `${productData.originalPrice} y.e` : null,
        slug: productData.slug
      });
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {/* <Head>

        <title>{`${productData.name} — Купить в Ташкенте`}</title>
        <meta name="description" content={productData.shortDescription} />
        <meta name="keywords" content={productData.name} />


        <meta property="og:title" content={`${productData.name} — Купить в Ташкенте`} />
        <meta property="og:description" content={productData.shortDescription} />
        <meta property="og:image" content={productData.gallery[0]?.url || '/default-image.jpg'} />
        <meta property="og:url" content={`https://imed.uz/products/${productData.slug}`} />
        <meta property="og:type" content="product" />
        <meta property="og:availability" content="instock" />
      </Head> */}

      <div className="w-full flex flex-col lg:flex-row">
        <div className="flex-1 w-full">
          <VerticalCarousel images={productData.gallery} name={productData.name} new={productData.new} />
        </div>
        <div className="w-full flex-1 flex flex-col gap-5">
          <div className="flex gap-4 max-lg:hidden">
            <h1 className="text-3xl font-semibold">{productData.name}</h1>
            {productData.new && (
              <div className="py-2 px-5 font-bold rounded-full text-[#E31E24] bg-[#FCE8E9] max-h-[40px]">
                {t('new')}
              </div>
            )}
          </div>
          <p className="text-neutral-500 leading-5">
            {formatTextWithNewlines(productData.shortDescription)}
          </p>
          <hr />
          <div className="w-full flex justify-between items-center">
            <button className="w-full max-w-[220px] leading-5 cursor-default text-left">
              {t('support')} <span className="relative after:absolute after:w-full after:h-[1px] after:bg-black after:left-0 after:bottom-[-2px]">{t('technical-support')}</span>
            </button>
            <Image
              src={productData.brand.logo.url}
              width={400}
              height={400}
              alt={productData.brand.name}
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
            <button className="px-3 py-3 border flex items-center justify-center" onClick={handleFavoriteToggle}>
              <Image
                src={isFavorite ? heartIconFilled : heartIcon}
                width={100}
                height={100}
                quality={100}
                alt="Heart Icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
        {/* Передаем productData в качестве пропса product */}
        {isModalOpen && <SignUpForEvent product={productData} closeModal={handleCloseModal} />}
      </div>
    </>
  );
}
