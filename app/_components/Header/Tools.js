"use client";
import { useState, useEffect, useRef } from "react";
import searchIcon from "@/public/svg/tools/search-icon.svg";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg";
import Menu from "../Menu";
import Link from "next/link";

export default function Tools({ navOptions }) {
  const [menu, setMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("RU");

  const menuRef = useRef(null);

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenu(!languageMenu);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setLanguageMenu(false);
    // Здесь можно добавить логику для смены языка приложения
  };

  // Закрытие меню при клике за его пределами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setLanguageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="h-full items-center flex mdx:gap-[16px] px-1 py-4">
      <button className="rounded-full max-mdx:px-1 max-mdx:py-1">
        <Image
          src={searchIcon}
          height={50}
          width={50}
          alt={`Tools Item SearchIcon`}
          className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
        />
      </button>
      <Link href={'/favorites'} className="flex items-center justify-center">
        <button className="rounded-full max-mdx:px-1 max-mdx:py-1">
          <Image
            src={heartIcon}
            height={50}
            width={50}
            alt={`Tools Item HeartIcon : Favorites`}
            className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
          />
        </button>
      </Link>
      <a href="tel:+998990909095" className="rounded-full max-mdx:px-1 max-mdx:py-1">
        <Image
          src={phoneIcon}
          height={50}
          width={50}
          alt={`Tools Item HeartIcon : Favorites`}
          className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
        />
      </a>
      <div ref={menuRef} className="mdx:relative xl:flex xl:items-center xl:text-left hidden z-[999]">
        <button
          id="dropdownButton"
          className="inline-flex items-center text-[19px] font-medium bg-white focus:outline-none ml-3"
          onClick={toggleLanguageMenu}
        >
          {selectedLanguage}
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {languageMenu && (
          <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="py-1">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeLanguage("RU")}
              >
                Русский
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeLanguage("UZ")}
              >
                O'zbekcha
              </li>
            </ul>
          </div>
        )}
      </div>

      <button onClick={handleOpenMenu} className="2xl:hidden max-mdx:px-1">
        <Image
          src={burgerMenu}
          height={50}
          width={50}
          alt={`Tools Item Burger Menu`}
          className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px] max-mdx:ml-1"
        />
      </button>
      {menu && (
        <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} />
      )}
    </div>
  );
}
