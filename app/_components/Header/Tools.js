"use client";
import { useState } from "react";
import searchIcon from "@/public/svg/tools/search-icon.svg";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg";
import Menu from "../Menu";
import Link from "next/link";

export default function Tools({ navOptions }) {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <div className="h-full items-center flex mdx:gap-5 px-1">
      <button className="rounded-full max-mdx:px-2 max-mdx:py-2">
        <Image
          src={searchIcon}
          height={100}
          width={100}
          alt={`Tools Item SearchIcon`}
          className="w-[29px] h-[29px] max-mdx:w-[24px] max-mdx:h-[24px]"
        />
      </button>
      <Link href={'/favorites'} className="flex items-center justify-center">
        <button className="rounded-full max-mdx:px-2 max-mdx:py-2">
          <Image
            src={heartIcon}
            height={100}
            width={100}
            alt={`Tools Item HeartIcon : Favorites`}
            className="w-[29px] h-[29px] max-mdx:w-[24px] max-mdx:h-[24px]"
          />
        </button>
      </Link>
      <a href="tel:+998990909095" className="rounded-full max-mdx:px-2 max-mdx:py-2">
        <Image
          src={phoneIcon}
          height={100}
          width={100}
          alt={`Tools Item HeartIcon : Favorites`}
          className="w-[29px] h-[29px] max-mdx:w-[24px] max-mdx:h-[24px]"
        />
      </a>
      <div class="mdx:relative  xl:flex xl:items-center xl:text-left hidden">
        <button id="dropdownButton" class="inline-flex items-center text-[18px] font-medium  bg-white   focus:outline-none ml-3">
          RU
          <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      <button
        onClick={handleOpenMenu}
        className="2xl:hidden max-mdx:px-1"
      >
        <Image
          src={burgerMenu}
          height={100}
          width={100}
          alt={`Tools Item Burger Menu`}
          className="w-[29px] h-[29px] max-mdx:w-[24px] max-mdx:h-[24px]"
        />
      </button>
      {menu ? (
        <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} />
      ) : (
        <></>
      )}
    </div>
  );
}
