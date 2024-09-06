'use client'

import newsPhoto from '@/public/images/news/news-photo.png'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import NewCardMain from '../News/NewCardMain'
import Pagination from '../News/Pagination'

export default function NewsComp() {
	const lng = useLanguage()
	const params = useParams()
	const { t } = useTranslation(lng, 'news-comp')
	const [news, setNews] = useState([])
	const [loading, setLoading] = useState(true) // Loading state
	const [error, setError] = useState(null) // Error state
	const [currentPage, setCurrentPage] = useState(1)

	// Update the URL when the page changes
	useEffect(() => {
		const newUrl = `/${params.lng}/news/?page=${currentPage}`
		window.history.pushState({}, '', newUrl) // Update URL without reloading
	}, [currentPage, lng])

	// Fetch news whenever the language or current page changes
	useEffect(() => {
		const fetchNews = async () => {
			setLoading(true)
			setError(null)

			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/new/get-all?page=${currentPage}`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setNews(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
				setError('Failed to fetch news')
			} finally {
				setLoading(false)
			}
		}

		fetchNews()
	}, [lng, currentPage])

	const itemsPerPage = 12
	const totalPages = Math.ceil(news.length / itemsPerPage)

	if (loading) return <div>Loading...</div>
	if (error) return <div>{error}</div>

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 my-[120px] mdx:my-[200px] 2xl:my-[250px]'>
			<h2 className='text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold uppercase'>
				{t('title')}
			</h2>
			<div className='w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto'>
				{news.map((item, i) => (
					<a key={i} href={`/${lng}/news/${item.slug}`}>
						<NewCardMain
							title={item.head.heading}
							date={item.head.text}
							imageSrc={item.head.photo.url || newsPhoto} // Fallback image
						/>
					</a>
				))}
			</div>
			<div className='flex w-full justify-center'>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</div>
		</div>
	)
}
