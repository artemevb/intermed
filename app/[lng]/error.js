"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/intermed-logo.png";
import notfound from "@/public/images/Error500.png";
import { useTranslation } from '../i18n/client';
import { useLanguage } from '../i18n/locales/LanguageContext';

function Custom500() {
    const lng = useLanguage();

    return (
        <main className="h-screen w-full bg-white">
            <div className="h-[70px] mx-auto flex justify-center w-full max-w-[1440px] 5xl:max-w-[2000px] items-center px-2 ">
                <div className="h-auto w-[243px]">
                    <Image
                        src={logo}
                        height={400}
                        width={400}
                        alt="Logo Image"
                        className="h-full w-auto"
                    />
                </div>
            </div>
            <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] h-full flex justify-center items-center mx-auto px-2">
                <div className="flex flex-col mdx:gap-8 gap-5 items-center">
                    <Image
                        src={notfound}
                        width={1000}
                        height={1000}
                        alt="Not Found Image"
                        className="max-w-[301px] w-full mdx:w-[100%]"
                    />
                    <div className="text-center flex flex-col gap-3 mdl:w-[400px]">
                        <h2 className="mdx:text-4xl text-2xl font-bold text-[#E94B50] mdx:text-[40px]">
                            Ошибка сервера
                        </h2>
                        <p className="max-w-[480px] w-full mx-auto text-neutral-400 text-[15px] mdx:text-[20px]">
                            Похоже нашему серверу требуется обследование, наши специалисты уже занимаются этим
                        </p>
                    </div>
                    <Link href={`/`}>
                        <button className="px-[76px] py-4 bg-[#E94B50] text-white font-semibold hover:bg-[#EE787C]">
                            На главную
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

// Добавляем флаг, чтобы layout.js мог понять, что это страница ошибки
Custom500.isErrorPage = true;

export default Custom500;
