'use client'

import newsPhoto from '@/public/images/news/news-photo.png'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import NewCardMain from '../News/NewCardMain'
import PaginationForNews from '../News/PaginationForNews'

export default function NewsComp() {
    const lng = useLanguage()
    const params = useParams()
    const { t } = useTranslation(lng, 'news-comp')
    const [news, setNews] = useState([]) // Состояние для новостей
    const [loading, setLoading] = useState(true) // Состояние загрузки
    const [error, setError] = useState(null) // Состояние ошибки
    const [currentPage, setCurrentPage] = useState(1) // Состояние текущей страницы
    const newsPerPage = 10 // Количество новостей на странице

    // Запрашиваем все новости при смене языка
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await axios.get(
                    `http://213.230.91.55:8130/v1/new/get-all`,
                    {
                        headers: { 'Accept-Language': lng },
                    }
                )
                setNews(response.data.data) // Обновляем новости из ответа
            } catch (error) {
                console.error('Ошибка при получении новостей:', error.message)
                setError('Не удалось загрузить новости')
            } finally {
                setLoading(false) // Выключаем индикатор загрузки
            }
        }

        fetchNews()
    }, [lng])

    // Вычисляем индекс последней и первой новости на текущей странице
    const indexOfLastNews = currentPage * newsPerPage
    const indexOfFirstNews = indexOfLastNews - newsPerPage
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if (loading) return <div>Загрузка...</div> // Индикатор загрузки
    if (error) return <div>{error}</div> // Сообщение об ошибке

    return (
        <div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 my-[120px] mdx:my-[200px] 2xl:my-[250px]'>
            <h2 className='text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold uppercase'>
                {t('title')}
            </h2>
            <div className='w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto'>
                {currentNews.map((item, i) => (
                    <a key={i} href={`/${lng}/news/${item.slug}`}>
                        <NewCardMain
                            title={item.head.heading}
                            date={item.head.text}
                            imageSrc={item.head.photo?.url || newsPhoto} // Фоновое изображение
                        />
                    </a>
                ))}
            </div>
            <PaginationForNews
                newsPerPage={newsPerPage}
                totalNews={news.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    )
}
