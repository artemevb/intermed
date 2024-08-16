"use client";
import { useState, useEffect, useRef } from "react";
import RightIcon from "@/app/_components/Icons/RightIcon";
import Image from "next/image";
import Link from "next/link";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import close from "@/public/svg/close.svg";

const Menu = ({ menu, closeMenu, navOptions }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("RU");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setLanguageMenuOpen(false);
    // Здесь можно добавить логику для смены языка приложения
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
          <div className="flex justify-between items-center gap-4">
            <Link href={'/favorites'}>
              <button className="flex items-center justify-center">
                <Image
                  src={heartIcon}
                  height={100}
                  width={100}
                  alt={`Tools Item HeartIcon : Favorites`}
                  className="w-[30px] h-[30px] max-mdx:w-[25px] max-mdx:h-[25px]"
                />
              </button>
            </Link>
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
          <Link
            onClick={closeMenu}
            href={`/${item.slug}`}
            key={index}
            className="py-4"
          >
            <div className="flex justify-between mx-4">
              <p>{item.title}</p>
              <RightIcon />
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
