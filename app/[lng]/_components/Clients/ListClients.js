"use client"
import { useState , useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import GreenArrow from "../Buttons/GreenArrow";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import axios from 'axios';


export default function ListClients() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'list-clients')
    const [clients , setClients] = useState([])

    const [visibleCount, setVisibleCount] = useState(6);

    const showMoreClients = () => {
        setVisibleCount(clients.length);
    };

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get(`https://imed.uz/api/v1/client/all`, {
              headers: { 'Accept-Language': lng },
            });
            setClients(response.data.data);
          } catch (error) {
            console.error('Failed to fetch news:', error.message);
          } 
        };
    
        fetchNews();
      }, [lng]);

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 mb-[110px] mdx:mb-[130px] xl:mb-[180px]">
            <h1 className="font-semibold text-[25px] mdx:text-[30px] lg:text-[35px] xl:text-[40px] uppercase mt-[60px]">{t('cases')}</h1>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {clients.slice(0, visibleCount).map(card => (
                    <div key={card.id} className="bg-white p-4 w-full border-[1px] border-gray-200 mdx:p-0 mdl:p-5 slg:h-auto">
                        <div className="mdx:flex mdx:flex-row items-center justify-between ">
                            <div className="mdx:w-[50%] h-[70px] relative mt-3">
                                <Image src={card.logo.url} alt={card.title} layout="fill" objectFit="contain" />
                            </div>
                            <div className='mdx:mb-4 mdx:w-[50%]'>
                                <h2 className="text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]">{card.name}</h2>
                                <p className="mb-4 text-gray-600 xl:text-[18px]">{card.description.length > 100 ? card.description.slice(0 ,100) + '...' : card.description }</p>
                                <a href={`/${lng}/clients/${card.slug}`}>
                                    <span className="text-[#E31E24] font-semibold mdx:text-[18px]">
                                        <GreenArrow title={t('more-details')} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCount < clients.length && (
                <div className="flex justify-center items-center">
                    <button
                        onClick={showMoreClients}
                        className="bg-[#E94B50] text-[#fff] text-[14px] mdx:text-[16px] py-3 px-[60px]">
                        {t('download-all')}
                    </button>
                </div>
            )}
        </div>
    );
}
