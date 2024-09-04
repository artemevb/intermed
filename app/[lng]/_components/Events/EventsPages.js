"use client";

import newsPhoto from "@/public/images/events/events1.png";
import EventCard from "../Events/EventCard";
import Pagination from "../News/Pagination";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function EventsPages({Data}) {
   
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'events-pages')
    const [isMounted, setIsMounted] = useState(false);
    const cities = ["Все", "Ташкент", "Самарканд", "Фергана", "Хорезм", "Бухара", "Андижан", "Навои", "Джизак", "Кашкадарья", "Наманган", "Сурхандарья", "Сырдарья"];
   

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCity, setSelectedCity] = useState("Все");
    const itemsPerPage = 12;

    const containerRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const container = containerRef.current;
        if (container) {
            const handleWheel = (event) => {
                if (event.deltaY !== 0) {
                    event.preventDefault();
                    container.scrollLeft += event.deltaY;
                }
            };
            container.addEventListener("wheel", handleWheel);
            return () => {
                if (container) {
                    container.removeEventListener("wheel", handleWheel);
                }
            };
        }
    }, [isMounted]);

    // Filter the events based on selected city
    const filteredData = selectedCity === "Все" ? Data : Data.filter(item => item.address === selectedCity);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 ">
            {
                isMounted && <div className="flex flex-col gap-8 mb-[120px] overflow-hidden mx-auto w-full">
                    <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase mt-[40px]">{t('title')}</h2>
                    <div ref={containerRef} className="flex gap-4 overflow-x-auto no-scrollbar">
                        {cities.map(city => (
                            <button
                                key={city}
                                onClick={() => {
                                    setSelectedCity(city);
                                    setCurrentPage(1);
                                }}
                                className={`px-4 py-2 rounded-full ${selectedCity === city ? "bg-[#E31E24] text-white" : "bg-gray-100 "}`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                    <div className="w-full grid gap-4 grid-cols-1 xl:grid-cols-2 h-auto">
                        {currentItems.map((item, i) => (
                            <a key={i} href={`/${lng}/events/${item.slug}`} className="mb-5">
                                <EventCard
                                    title={item.name}
                                    imageSrc={item.photo.url}
                                    slug={item.slug}
                                />
                            </a>
                        ))}
                    </div>
                    <div className="flex w-full justify-center ">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                </div>
            }
        </div>
    );
}