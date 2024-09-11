"use client";

import { useState, useEffect, useRef } from "react";
import searchIcon from "@/public/svg/tools/search-icon.svg";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg";
import Menu from "../Menu";
import Link from "next/link";
import { useTranslation } from '../../../i18n/client';
import { languages, cookieName } from '../../../i18n/settings';
import { useCookies } from 'react-cookie';
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import Search from "../Modal/Search";

export default function Tools({ navOptions }) {
  const lng = useLanguage();
  const [menu, setMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);

  const { i18n, t } = useTranslation();
  const [cookies, setCookie] = useCookies([cookieName]);

  useEffect(() => {
    if (searchMenu) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [searchMenu]);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleLanguageChange = (newLng) => {
    setCookie(cookieName, newLng, { path: '/' });
    const currentPath = window.location.pathname;
    const pathArray = currentPath.split('/');
    if (pathArray[1] === i18n.language) {
      pathArray[1] = newLng;
    } else {
      pathArray.unshift(newLng);
    }
    const newPath = pathArray.join('/');
    i18n.changeLanguage(newLng);
    window.location.href = newPath;
  };

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

  if (!mounted) {
    return null;
  }


  
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

  const handleClick = () => {
    handleButtonClick('call');
  };


  return (
    <div className="h-full items-center flex mdx:gap-[16px] px-1 py-4">
      {searchMenu && <Search setSearchMenu={setSearchMenu} />} {/* Передача функции setSearchMenu */}
      <button
        onClick={() => setSearchMenu((prev) => !prev)}
        className="rounded-full px-2 py-1"
      >
        <Image
          src={searchIcon}
          height={30}
          width={30}
          alt="Search Icon"
          className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
        />
      </button>
      <a href={`/${i18n.language}/favorites`} className="flex items-center justify-center">
        <button className="rounded-full max-mdx:px-1 max-mdx:py-1">
          <Image
            src={heartIcon}
            height={50}
            width={50}
            alt={`Tools Item HeartIcon : Favorites`}
            className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
          />
        </button>
      </a>
      <a href="tel:+998781504747" className="rounded-full max-mdx:px-1 max-mdx:py-1" onClick={handleClick}>
        <Image
          src={phoneIcon}
          height={50}
          width={50}
          alt={`Tools Item PhoneIcon : Call`}
          className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
        />
      </a>
      <div ref={menuRef} className="mdx:relative xl:flex xl:items-center xl:text-left hidden z-[9999]">
        <button
          id="dropdownButton"
          className="inline-flex items-center text-[19px] font-medium bg-white focus:outline-none ml-3"
          onClick={toggleLanguageMenu}
        >
          {i18n.language.toUpperCase()}
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
              {languages.map((lng) => (
                <li key={lng} className="px-4 py-2 hover:bg-gray-100 cursor-pointer z-[999]" onClick={() => handleLanguageChange(lng)}>
                  {lng.toUpperCase()}
                </li>
              ))}
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
