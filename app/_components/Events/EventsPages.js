"use client";

import newsPhoto from "@/public/images/events/events1.png";
import EventCard from "@/app/_components/Events/EventCard";
import Pagination from "@/app/_components/News/Pagination";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';

export default function EventsPages() {
    const cities = ["Все", "Ташкент", "Самарканд", "Фергана", "Хорезм", "Бухара", "Андижан", "Навои", "Джизак", "Кашкадарья", "Наманган", "Сурхандарья", "Сырдарья"];
    const data = [
        {
            title: "Презентация Новейших Технологий в Медицине: Ташкент 2024",
            imageSrc: newsPhoto,
            city: "Ташкент",
            slug: "telemedicine",
        },
        {
            title: "Презентация Новейших Технологий в Медицине: Ташкент 2024",
            imageSrc: newsPhoto,
            city: "Фергана",
            slug: "telemedicine",
        },
        {
            title: "The Impact of Portable Medical Devices on Healthcare Accessibility",
            imageSrc: newsPhoto,
            city: "Самарканд",
            slug: "medical-devices",
        },
        {
            title: "The Future of Telemedicine and Remote Patient Monitoring",
            imageSrc: newsPhoto,
            city: "Хорезм",
            slug: "telemedicine",
        },
        {
            title: "Презентация Новейших Технологий в Медицине: Ташкент 2024",
            imageSrc: newsPhoto,
            city: "Ташкент",
            slug: "telemedicine",
        },
        {
            title: "The Impact of Portable Medical Devices on Healthcare Accessibility",
            imageSrc: newsPhoto,
            city: "Самарканд",
            slug: "medical-devices",
        },
        {
            title: "The Future of Telemedicine and Remote Patient Monitoring",
            imageSrc: newsPhoto,
            city: "Хорезм",
            slug: "telemedicine",
        },
        {
            title: "Презентация Новейших Технологий в Медицине: Ташкент 2024",
            imageSrc: newsPhoto,
            city: "Ташкент",
            slug: "telemedicine",
        },
        {
            title: "The Impact of Portable Medical Devices on Healthcare Accessibility",
            imageSrc: newsPhoto,
            city: "Самарканд",
            slug: "medical-devices",
        },
        {
            title: "The Future of Telemedicine and Remote Patient Monitoring",
            imageSrc: newsPhoto,
            city: "Хорезм",
            slug: "telemedicine",
        },
        {
            title: "Презентация Новейших Технологий в Медицине: Ташкент 2024",
            imageSrc: newsPhoto,
            city: "Ташкент",
            slug: "telemedicine",
        },
        {
            title: "The Impact of Portable Medical Devices on Healthcare Accessibility",
            imageSrc: newsPhoto,
            city: "Самарканд",
            slug: "medical-devices",
        },
        
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCity, setSelectedCity] = useState("Все");
    const itemsPerPage = 12;

    const containerRef = useRef(null);

    // Handle horizontal scroll on mouse wheel
    useEffect(() => {
        const container = containerRef.current;
        const handleWheel = (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                container.scrollLeft += event.deltaY;
            }
        };
        container.addEventListener("wheel", handleWheel);
        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, []);

    // Filter the events based on selected city
    const filteredData = selectedCity === "Все" ? data : data.filter(item => item.city === selectedCity);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mb-[120px] overflow-hidden">
            <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase mt-[40px]">Мероприятия</h2>
            <div ref={containerRef} className="flex gap-4 overflow-x-auto no-scrollbar">
                {cities.map(city => (
                    <button
                        key={city}
                        onClick={() => {
                            setSelectedCity(city);
                            setCurrentPage(1); // Reset to first page when changing filter
                        }}
                        className={`px-4 py-2 rounded-full ${selectedCity === city ? "bg-[#E31E24] text-white" : "bg-gray-100 "}`}
                    >
                        {city}
                    </button>
                ))}
            </div>
            <div className="w-full grid gap-4 grid-cols-1 xl:grid-cols-2 h-auto">
                {currentItems.map((item, i) => (
                    <Link key={i} href={`/events/${item.slug}`} className="mb-5">
                        <EventCard
                            key={i}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            slug={item.slug}
                        />
                    </Link>
                ))}
            </div>
            <div className="flex w-full justify-center ">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    );
}
