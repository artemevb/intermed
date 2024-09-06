"use client";
import { useState, useEffect, useRef } from "react";
import RightIcon from "../_components/Icons/RightIcon";
import Image from "next/image";
import Link from "next/link";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import close from "@/public/svg/close.svg";
import { useTranslation } from '../../i18n/client';
import { useCookies } from 'react-cookie';
import { languages, cookieName } from '../../i18n/settings';

const Menu = ({ menu, closeMenu, navOptions }) => {
  const { i18n, t } = useTranslation(); // Translation hook
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language.toUpperCase()); // Set current language
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [cookies, setCookie] = useCookies([cookieName]);
  const menuRef = useRef(null); // Ref for menu element

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lang) => {
    const newLang = lang.toLowerCase();
    setSelectedLanguage(lang);
    setLanguageMenuOpen(false);

    // Set cookie for the selected language
    setCookie(cookieName, newLang, { path: '/' });

    // Change language in i18n
    i18n.changeLanguage(newLang);

    // Adjust URL to reflect the language change
    const currentPath = window.location.pathname;
    const pathArray = currentPath.split('/');
    if (languages.includes(pathArray[1])) {
      pathArray[1] = newLang;
    } else {
      pathArray.unshift(newLang);
    }

    const newPath = pathArray.join('/');
    window.location.href = newPath;
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // Close the menu when clicking outside
      }
    };

    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <div
      ref={menuRef} // Attach the ref to the div
      className={`fixed z-[9999] top-0 right-0 w-full max-w-[300px] bg-white h-full shadow-md ${menu ? "transform translate-x-0" : "transform translate-x-full"
        }`}
    >
      <div className="border-b py-4 flex">
        <div className="w-full flex justify-between mx-4">
          <div className="relative flex items-center text-left">
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
                    Русский
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => changeLanguage("EN")}
                  >
                    English
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
          <div className="flex justify-between items-center gap-4">
            <Link href={'/favorites'}>
              <button
                className="flex items-center justify-center"
                onClick={closeMenu} // Close the menu when clicking the favorites button
              >
                <Image
                  quality={100}
                  src={heartIcon}
                  height={100}
                  width={100}
                  alt={`Tools Item HeartIcon : Favorites`}
                  className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
                />
              </button>
            </Link>

            <a href="tel:+998781504747" className="flex items-center justify-center">
              <Image
                quality={100}
                src={phoneIcon}
                height={100}
                width={100}
                alt={`Tools Item PhoneIcon : Call`}
                className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
              />
            </a>
            <button onClick={closeMenu} className="flex items-center justify-center">
              <Image
                quality={100}
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
            href={`/${item.slug}`}
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
