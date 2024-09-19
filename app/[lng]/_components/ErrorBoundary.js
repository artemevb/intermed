"use client";
import Header from "@/app/[lng]/_components/Header/Header";
import Footer from './Footer/Footer';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import NotFound from '@/app/[lng]/not-found'; // Подключаем страницу 404

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

    // Проверяем, является ли текущая страница страницей ошибки или 404
    const isErrorPage = pathname === '/error' || pathname.includes('error');
    const isNotFoundPage = pathname === '/404' || pathname.includes('not-found');

    if (hasError) {
        return <>{children}</>; // Рендерим только children при ошибке
    }

    if (isNotFoundPage) {
        return (
            <>
                <Header lng={lng} />
                <main className="w-full bg-white relative">
                    <NotFound />
                </main>
                <Footer lng={lng} />
            </>
        );
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
