"use client"
import Link from 'next/link'
import logoBig from "@/public/images/intermed-logo.png";
import telegram from "@/public/svg/tools/telegram.svg";
import facebook from "@/public/svg/tools/facebook.svg";
import instagram from "@/public/svg/tools/instagram.svg";
import youtube from "@/public/svg/tools/youtube.svg";
import arrowRight from "@/public/svg/arrow-right-red.svg";
import resultLogo from "@/public/images/footer/result-logo.png";
import { useTranslation } from '../../../i18n/client'
import Image from "next/image";

const handleButtonClick = (buttonType) => {
  fetch(`https://imed.uz/api/v1/counter/add?button=${buttonType}`, {
    method: "POST",
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      console.log(`Button ${buttonType} clicked`);
    })
    .catch(e => {
      console.error(`Error logging button click for ${buttonType}`, e);
    });
};

export default function Footer({ lng }) {
  const { t } = useTranslation(lng, 'footer-main')
  return (
    <div className="bg-snowy w-full px-2 pt-12">
      <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] flex flex-col gap-12 mx-auto">
        <div className="w-full flex justify-between max-lg:flex-col gap-12">
          <div className="flex lg:flex-col max-lg:justify-between flex-col  gap-5">
            <div className="flex flex-col gap-5 ">
              <a href={`/${lng}`}>
                <Image
                  src={logoBig}
                  width={1000}
                  height={1000}
                  quality={100}
                  alt="Mrj Logo Big"
                  className="w-48 "
                />
              </a>
            </div>
            <div className="flex gap-3">
              <a href="https://t.me/intermedtrade" target="_blank" onClick={() => handleButtonClick('telegram')}>
                <Image
                  src={telegram}
                  width={200}
                  height={200}
                  quality={100}
                  alt="Telegram"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.facebook.com/intermed.mindray" target="_blank" onClick={() => handleButtonClick('facebook')}>
                <Image
                  src={facebook}
                  width={200}
                  height={200}
                  quality={100}
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" onClick={() => handleButtonClick('instagram')}>
                <Image
                  src={instagram}
                  width={200}
                  height={200}
                  quality={100}
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.youtube.com/@intermedinnovation9644" target="_blank" onClick={() => handleButtonClick('youtube')}>
                <Image
                  src={youtube}
                  width={200}
                  height={200}
                  quality={100}
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex max-mdx:gap-5">
            <div className="flex-1 flex flex-col text-sm gap-4 text-[#808080] lg:pr-7">
              <h2 className="text-lg font-semibold text-[#252324] uppercase">{t('catalog')}</h2>
              <a href={`/${lng}/categories/catalog/`}>
                {t('uzd_equipment')}
              </a>

              <a href={`/${lng}/categories/catalog/`}>{t('life_support')}</a>
              <a href={`/${lng}/categories/catalog/`}>{t('lab_equipment')}</a>
              <a href={`/${lng}/categories/catalog/`}>{t('reagents_consumables')}</a>
              <a
                href={`/${lng}/categories`}
                className="flex gap-2 hover:gap-4 items-center transition-all duration-200"
              >
                <p className="text-redMain font-bold text-lg">{t('all_categories')}</p>
                <Image
                  src={arrowRight}
                  width={200}
                  height={200}
                  quality={100}
                  alt="Arrow Right Icon Green"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="flex-1 flex flex-col text-sm gap-4  text-[#808080]">
              <h2 className="text-lg font-semibold text-[#252324] uppercase">{t('company')}</h2>
              <a href={`/${lng}/about-company`}>{t('about_company')}</a>
              <a href={`/${lng}/partners`}>{t('partners')}</a>
              <a href={`/${lng}/contacts`}>{t('contacts')}</a>
              <a href={`/${lng}/news`}>{t('news')}</a>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <hr />
          <div className="my-6 w-full flex justify-between items-center">
            <p className="w-full max-mdx:max-w-[150px] text-[#808080]">
              2024 © Intermed Innovation. {t('all_rights_reserved')}
            </p>
            <a href="https://result-me.uz/api/redirect?from=aW1lZA==" target="_blank">
              <Image
                src={resultLogo}
                width={1000}
                height={1000}
                quality={100}
                alt="Result Logo"
                className="h-auto w-[110px] xl:w-[130px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
