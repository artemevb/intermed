"use client";
import { useState, useEffect, useRef } from "react";
import RightIcon from "./Icons/RightIcon";
import Image from "next/image";
import Link from "next/link";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import close from "@/public/svg/close.svg";
import { useLanguage } from '../../i18n/locales/LanguageContext';
import { languages, cookieName } from '../../i18n/settings';
import { useCookies } from 'react-cookie';
import { useTranslation } from '../../i18n/client';

const Menu = ({ menu, closeMenu, navOptions }) => {
  const lng = useLanguage();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(lng.toUpperCase());
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [cookies, setCookie] = useCookies([cookieName]);

  const menuRef = useRef(null);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lang) => {
    const newLng = lang.toLowerCase();
    setSelectedLanguage(lang);
    setLanguageMenuOpen(false);

    // Обновляем cookie и URL при смене языка
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

  // Закрытие меню при клике за его пределами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className={`fixed z-[9999] top-0 right-0 w-full max-w-[300px] bg-white h-full shadow-md ${menu ? "transform translate-x-0" : "transform translate-x-full"
        }`}
    >
      <div className="border-b py-4 flex">
        <div className="w-full flex justify-between mx-4">
          <div ref={menuRef} className="relative flex items-center text-left">
            <button
              id="dropdownButton"
              className="inline-flex items-center text-[18px] mdx:text-[20px] font-medium bg-white focus:outline-none"
              onClick={toggleLanguageMenu}
            >
              {selectedLanguage}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {languageMenuOpen && (
              <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="py-1">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => changeLanguage("RU")}
                  >
                    RU
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => changeLanguage("UZ")}
                  >
                    <p>O&apos;Z</p>
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => changeLanguage("EN")}
                  >
                    EN
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center gap-4">
            <a href={`/${lng}/favorites`}>
              <button className="flex items-center justify-center">
                <Image
                  src={heartIcon}
                  height={100}
                  width={100}
                  alt={`Tools Item HeartIcon : Favorites`}
                  className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
                />
              </button>
            </a>
            <a href="tel:+998990909095" className="flex items-center justify-center">
              <Image
                src={phoneIcon}
                height={100}
                width={100}
                alt={`Tools Item PhoneIcon : Call`}
                className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
              />
            </a>
            <button onClick={closeMenu} className="flex items-center justify-center">
              <Image
                src={close}
                height={100}
                width={100}
                alt={`Tools Item CloseIcon : Close Menu`}
                className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
              />
            </button>
          </div>
        </div>
      </div>
      <nav className="flex flex-col font-semibold mt-2">
        {navOptions.map((item, index) => (
          <a
            onClick={closeMenu}
            href={`/${lng}/${item.slug}`}
            key={index}
            className="py-4"
          >
            <div className="flex justify-between mx-4">
              <p>{item.title}</p>
              <RightIcon />
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
