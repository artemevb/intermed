'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import arrowred from '@/public/svg/arrow-right-red.svg'
import Modal from '../Modal/AttachedFiles'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function ProductCharacteristics({ data }) {
    const lng = useLanguage()
    const { t } = useTranslation(lng, 'product-characteristics')
    const [isMounted, setIsMounted] = useState(false)

    const categories = [
        {
            category: 'descriptions',
            title: t('description'),
            dataKey: 'descriptions',
        },
        {
            category: 'characteristics',
            title: t('characteristics'),
            dataKey: 'characteristics',
        },
        {
            category: 'clients',
            title: t('client'),
            dataKey: 'client'
        },
    ]

    // Инициализация активной категории и отфильтрованных данных
    const [active, setActive] = useState(categories[0].category)
    const [filtered, setFiltered] = useState(data[categories[0].dataKey] || [])
    const [selectedAttachedFiles, setSelectedAttachedFiles] = useState(null)

    // Открыть модальное окно с прикрепленными файлами
    const openModal = files => {
        setSelectedAttachedFiles(files)
    }

    // Закрыть модальное окно
    const closeModal = () => {
        setSelectedAttachedFiles(null)
    }

    // Обработка изменения категории
    const handleCategoryChange = (category, dataKey) => {
        setActive(category)
        setFiltered(data[dataKey] || [])
    }

    // Вспомогательная функция для обработки новых строк и замены их на <br />
    const formatTextWithNewlines = (text) => {
        if (!text) return null // Проверка на null или undefined
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ))
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Функция для проверки наличия значимых данных в категории
    const hasData = (categoryKey) => {
        if (!data[categoryKey] || !Array.isArray(data[categoryKey])) return false

        // Проверяем, есть ли хотя бы один элемент с непустыми полями в зависимости от категории
        return data[categoryKey].some(item => {
            switch (categoryKey) {
                case 'descriptions':
                case 'characteristics':
                    return (item.title && item.title.trim() !== '') || (item.value && item.value.trim() !== '')
                case 'client':
                    return (item.name && item.name.trim() !== '') || (item.description && item.description.trim() !== '')
                default:
                    return false
            }
        })
    }

    return (
        <div className='w-full flex flex-col'>
            {isMounted && (
                <>
                    <div className='w-full flex flex-col relative mt-[20px]'>
                        <div className="text-container w-max">
                            <div className="w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto">
                                {categories.map((item, index) => (
                                    // Проверка наличия значимых данных для текущей категории перед рендерингом кнопки
                                    hasData(item.dataKey) && (
                                        <button
                                            key={index}
                                            onClick={() => handleCategoryChange(item.category, item.dataKey)}
                                            className={`z-10 w-auto text-lg transition-text font-medium ${active === item.category
                                                    ? 'text-[#E31E24] border-b-2 border-b-[#E31E24]'
                                                    : 'text-neutral-400'
                                                }`}
                                        >
                                            <h3 className='my-2 whitespace-nowrap'>{item.title}</h3>
                                        </button>
                                    )
                                ))}
                            </div>
                            <hr className="w-full border-t-1 " />
                        </div>
                    </div>

                    <div className='mt-[20px]'>
                        {active === 'descriptions' && filtered.length > 0 && (
                            <div className='text-lg leading-5'>
                                {filtered.map((item, i) => (
                                    <div key={i}>
                                        {item.title && (
                                            <p className='text-[18px] text-[#252324] mdx:text-[24px] lg:text-[20px] font-bold my-[20px]'>
                                                {formatTextWithNewlines(item.title)}
                                            </p>
                                        )}
                                        {item.value && (
                                            <ul className='py-2'>
                                                <li>{formatTextWithNewlines(item.value)}</li>
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {active === 'characteristics' && filtered.length > 0 && (
                            <div className='flex flex-col gap-6 w-full'>
                                {filtered.map((item, i) => (
                                    <div key={i} className='w-full flex gap-3'>
                                        <p className='w-full text-neutral-400 max-w-[100px] md:max-w-[150px] mdx:max-w-[200px] lg:max-w-[400px]'>
                                            {formatTextWithNewlines(item.title)}
                                        </p>
                                        <div className='flex w-full flex-col'>
                                            <p>{formatTextWithNewlines(item.value)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {active === 'clients' && filtered.length > 0 && (
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                {filtered.map((client, index) => (
                                    <a href={`/${lng}/clients/${client.slug}`} key={index} className='border p-4'>
                                        <div className='mdx:flex mdx:flex-row items-center justify-between w-full'>
                                            <div className='mdx:w-[50%] h-[230px] relative mt-3'>
                                                <Image
                                                    src={client.logo.url}
                                                    alt={client.name}
                                                    layout="fill"
                                                    quality={100}
                                                    objectFit="cover"
                                                    className='w-full h-full mdx:pr-3'
                                                />
                                            </div>
                                            <div className='mdx:mb-4 mdx:w-[50%]'>
                                                <h3 className='text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]'>
                                                    {client.name}
                                                </h3>
                                                <p className='mb-4 text-gray-600 xl:text-[18px]'>
                                                    {client.description.length > 100
                                                        ? `${client.description.slice(0, 100)}...`
                                                        : client.description}
                                                </p>
                                                <button className='text-[#E31E24] mt-2 flex items-center font-bold text-[16px] mdx:text-[18px]'>
                                                    {t('more')}
                                                    <Image
                                                        quality={100}
                                                        src={arrowred}
                                                        width={100}
                                                        height={100}
                                                        alt='Arrow Icon'
                                                        className='w-5 h-5'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='flex justify-start mt-[25px]'>
                        {data.files && data.files.length > 0 && (
                            <button
                                className='bg-[#FCE8E9] text-[#E31E24] py-4 px-[30px] font-bold hover:text-[#EE787C]'
                                onClick={() => openModal(data.files || [])}
                            >
                                {t('attached-files')}
                            </button>
                        )}
                    </div>
                    <Modal
                        selectedAttachedFiles={selectedAttachedFiles}
                        closeModal={closeModal}
                    />
                </>
            )}
        </div>
    )
}
