"use client";
import Header from "@/app/[lng]/_components/Header/Header";
import Footer from './Footer/Footer';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

function ErrorBoundary({ lng, children }) {
    const [hasError, setHasError] = useState(false);
    const pathname = usePathname(); // Получаем текущий путь

    // Используем useEffect для обработки ошибок
    useEffect(() => {
        const handleError = () => {
            setHasError(true);
        };

        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    // Проверяем, является ли текущая страница страницей ошибки
    const isErrorPage = pathname === '/error' || pathname.includes('error');

    if (hasError) {
        return <>{children}</>; // Рендерим только children при ошибке
    }

    return (
        <>
            {!isErrorPage && <Header lng={lng} />}
            <main className="w-full bg-white relative">{children}</main>
            {!isErrorPage && <Footer lng={lng} />}
        </>
    );
}

export default ErrorBoundary;
