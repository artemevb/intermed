"use client"
import RightIcon from "@/app/_components/Icons/RightIcon";
import Image from "next/image";
import Link from "next/link";
import ToolItem from "./Header/ToolItem";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import close from "@/public/svg/close.svg";

const Menu = ({ menu, closeMenu, navOptions }) => {
  return (
    <div
      className={`fixed z-[9999] top-0 right-0 w-full max-w-[300px] bg-white h-full shadow-md ${menu ? "transform translate-x-0" : "transform translate-x-full"
        }`}
    >
      <div className="border-b py-4 flex">
        <div className="w-full flex justify-between mx-4">
          <div class="relative  flex items-center text-left">
            <button id="dropdownButton" class="inline-flex items-center text-sm font-medium  bg-white   focus:outline-none">
              RU
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Link href={'/favorites'}>
              <button className="flex items-center justify-center">
                <Image
                  src={heartIcon}
                  height={100}
                  width={100}
                  alt={`Tools Item HeartIcon : Favorites`}
                  className="w-5 h-5 max-mdx:w-5 max-mdx:h-5"
                />
              </button>
            </Link>
            <a href="tel:+998990909095" className="flex items-center justify-center">
              <Image
                src={phoneIcon}
                height={100}
                width={100}
                alt={`Tools Item PhoneIcon : Call`}
                className="w-5 h-5 max-mdx:w-5 max-mdx:h-5"
              />
            </a>
            <button onClick={closeMenu} className="flex items-center justify-center">
              <Image
                src={close}
                height={100}
                width={100}
                alt={`Tools Item CloseIcon : Close Menu`}
                className="w-5 h-5 max-mdx:w-5 max-mdx:h-5"
              />
            </button>
          </div>
        </div>
      </div>
      <nav className="flex flex-col font-semibold mt-2">
        {/* <Link
            onClick={closeMenu}
            href={`/`}
            className="py-4"
          >
            <div className="flex justify-between mx-4">
              <p>Home</p>
              <RightIcon />
            </div>
          </Link> */}
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
