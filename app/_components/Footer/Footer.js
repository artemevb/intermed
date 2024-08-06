import logoBig from "@/public/images/intermed-logo.png";
import telegram from "@/public/images/footer/telegram.png";
import facebook from "@/public/images/footer/facebook.png";
import instagram from "@/public/images/footer/instagram.png";
import youtube from "@/public/images/footer/youtube.png";
import arrowRight from "@/public/svg/arrow-right-red.svg";
import resultLogo from "@/public/images/footer/result-logo.png";
import Link from "next/link";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-snowy w-full px-2 pt-12">
      <div className="w-full max-w-[1440px] flex flex-col gap-12 mx-auto">
        <div className="w-full flex justify-between max-lg:flex-col gap-12">
          <div className="flex lg:flex-col max-lg:justify-between flex-col  gap-5">
            <div className="flex flex-col gap-5 ">
              <Link href="/">
                <Image
                  src={logoBig}
                  width={500}
                  height={500}
                  alt="Mrj Logo Big"
                  className="w-48 "
                />
              </Link>
            </div>
            <div className="flex gap-3">
              <a href="https://t.me/intermedtrade" target="_blank">
                <Image
                  src={telegram}
                  width={100}
                  height={100}
                  alt="Telegram"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.facebook.com/intermed.mindray" target="_blank">
                <Image
                  src={facebook}
                  width={100}
                  height={100}
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
                <Image
                  src={instagram}
                  width={100}
                  height={100}
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.youtube.com/@intermedinnovation9644" target="_blank">
                <Image
                  src={youtube}
                  width={100}
                  height={100}
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex max-mdx:gap-5">
            <div className="flex-1 flex flex-col text-sm gap-4 text-[#808080] lg:pr-7">
              <h2 className="text-lg font-semibold text-[#252324] uppercase">Каталог</h2>
              <a href="/categories/catalog/">УЗД оборудование</a>
              <a href="/categories/catalog/">Жизнеобеспечение и <brd/>мониторинг паицента</a>
              <a href="/categories/catalog/">Лабораторное оборудование</a>
              <a href="/categories/catalog/">Реагенты и расходные материалы</a>
              <a
                href="/categories"
                className="flex gap-2 hover:gap-4 items-center transition-all duration-200"
              >
                <p className="text-redMain font-semibold text-lg">Все категории</p>
                <Image
                  src={arrowRight}
                  width={100}
                  height={100}
                  alt="Arrow Right Icon Green"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="flex-1 flex flex-col text-sm gap-4  text-[#808080]">
              <h2 className="text-lg font-semibold text-[#252324] uppercase">Компания</h2>
              <a href="/about">О компании</a>
              <a href="/partners">Партнеры</a>
              <a href="/contacts">Контакты</a>
              <a href="/news">Новости</a>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <hr />
          <div className="my-6 w-full flex justify-between items-center">
            <p className="w-full max-mdx:max-w-[150px] text-[#808080]">
              2024 © Intermed Innovation. Все права защищены
            </p>
            <a href="https://result-me.uz" target="_blank">
              <Image
                src={resultLogo}
                width={500}
                height={500}
                alt="Result Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
