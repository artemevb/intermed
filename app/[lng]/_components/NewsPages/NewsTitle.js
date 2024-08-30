'use client'

import Image from 'next/image'
import newsPhoto from '@/public/images/news/news-photo.png'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function NewsTitle() {
    const lng = useLanguage();
    const { t } = useTranslation(lng);
    const [news, setNews] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        const fetchNewsWithSlug = async () => {
            try {
                const response = await axios.get(
                    `http://213.230.91.55:8130/v1/new/get/${slug}`,
                    {
                        headers: { 'Accept-Language': lng },
                    }
                )
                setNews(response.data.data)
            } catch (error) {
                console.error('Failed to fetch news:', error.message)
                setNews(null) // Reset state if fetching fails
            }
        }
        fetchNewsWithSlug()
    }, [lng, slug])

    if (!news) return <div>Loading...</div> // Loading state or error handling

    return (
        <div className='w-full max-w-[832px] mx-auto flex flex-col gap-1 px-4 '>
            <div className='mt-4'>
                <p className='text-gray-400 text-[16px] mdx:text-[18px] xl:text-[20px]'>
                    {new Date(news.createdDate).toLocaleDateString(lng, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                <h1 className='text-[25px] text-black mb-2 mdx:text-[34px] xl:text-[40px] leading-[1.10] uppercase'>
                    {news.head.heading}
                </h1>
            </div>
            <div>
                <p className='text-[16px] mdx:text-[20px]'>{news.head.text}</p>
            </div>
            <div className='xl:mt-7 xl:mb-[80px] flex flex-row justify-center'>
                <Image
                    src={news.head.photo?.url || newsPhoto} // Use fallback if no image URL
                    width={1500}
                    height={1500}
                    quality={100}
                    alt={`News Image`}
                    className='w-full h-auto object-cover rounded-xl'
                />
            </div>

            {/* Rendering newOptions array */}
            {news.newOptions.map((item, index) => (
                <div className='mt-[60px] mb-[140px]' key={index}>
                    {item.heading && (
                        <h3 className='text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324]'>
                            {item.heading}
                        </h3>
                    )}
                    {item.text && (
                        <ol className='list-disc pl-4 mdx:pl-5'>
                            <li className='text-[16px] mdx:text-[20px]'>{item.text}</li>
                        </ol>
                    )}
                    {item.photo?.url && (
                        <div className='mt-[30px] mb-[10px] flex flex-row justify-center'>
                            <Image
                                src={item.photo.url} 
                                width={1500}
                                height={1500}
                                quality={100}
                                alt={`News Image`}
                                className='w-full h-auto max-w-[832px] max-h-[450px] object-cover rounded-xl'
                            />
                        </div>
                    )}
                </div>
            ))}

            <div className='mdl:flex mdl:justify-center'>
                {/* Any additional content or footer */}
            </div>
        </div>
    )
}
