"use client";

import newsPhoto from "@/public/images/events/events1.png";
import EventCard from "../Events/EventCard";
import Pagination from "../News/Pagination";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import PropTypes from 'prop-types';

export default function EventsPages({ Data }) {
    const lng = useLanguage();
    console.log('Current language:', lng); // Для отладки

    // Проверка, что lng определён
    if (!lng) {
        console.error('Language is undefined');
        return null; // Или можно вернуть сообщение об ошибке
    }

    const { t } = useTranslation(lng, 'events-pages');
    const [isMounted, setIsMounted] = useState(false);

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

    // Извлекаем уникальные адреса из Data для опций фильтрации
    const uniqueCities = Array.from(new Set(
        Data
            .map(item => item.address)
            .filter(address => typeof address === 'string' && address.trim() !== '')
    ));
    const cities = uniqueCities.length > 0 ? ["Все", ...uniqueCities] : [];

    // Логирование для отладки
    console.log('Unique cities:', uniqueCities);
    console.log('Cities with "Все":', cities);

    // Фильтруем события на основе выбранного города
    const filteredData = selectedCity === "Все" 
        ? Data 
        : Data.filter(item => item.address === selectedCity);

    // Логирование для отладки
    console.log('Filtered data length:', filteredData.length);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2">
            {isMounted && (
                <div className="flex flex-col gap-8 mb-[120px] overflow-hidden mx-auto w-full">
                    <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase mt-[40px]">{t('title')}</h2>

                    {/* Блок с городами */}
                    {cities.length > 0 && (
                        <div
                            ref={containerRef}
                            className="flex gap-4 overflow-x-auto no-scrollbar"
                        >
                            {cities.map((city) => (
                                <button
                                    key={city}
                                    onClick={() => {
                                        setSelectedCity(city);
                                        setCurrentPage(1);
                                    }}
                                    className={`px-4 py-2 rounded-full transition-colors duration-200 ${selectedCity === city
                                            ? "bg-[#E31E24] text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Блок с событиями */}
                    <div className="w-full grid gap-4 grid-cols-1 xl:grid-cols-2 h-auto">
                        {currentItems.map((item, i) => (
                            <Link key={i} href={`/${lng}/events/${item.slug}`} className="mb-5">
                                {item.photo?.url && (
                                    <EventCard
                                        title={item.name}
                                        imageSrc={item.photo.url}
                                        slug={item.slug}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Пагинация */}
                    <div className="flex w-full justify-center">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                </div>
            )}
        </div>
    );
}
