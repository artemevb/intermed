'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import NewCard from '../News/NewCard'
export default function News() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'news-pages-other-news')
	const [news, setNews] = useState([])

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/new/get-all`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setNews(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
			}
		}

		fetchNews()
	}, [lng])

	const slicedData = news.slice(0, 4)

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 mb-[150px] mt-[150px] mdx:mt-[190px] xl:mt-[230px] 2xl:hidden'>
			<h2 className='text-3xl max-mdx:text-2xl font-semibold uppercase'>
				{t('other-news')}
			</h2>
			<div className='w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 h-auto'>
				{slicedData.map((item, i) => {
					return (
						<a key={i} href={`/${lng}/news/${item.slug}`}>
							<NewCard
								key={i}
								title={item.head.heading}
								date={item.head.text}
							// imageSrc={item.head.photo.url}
							/>
						</a>
					)
				})}
			</div>
			<div className='flex w-full justify-center'>
				<a
					href={`/${lng}/news`}
					className='border-1 border py-3 px-12 hover:bg-[#E94B50] hover:text-[#FFF] transition-all duration-200 '
				>
					{t('all-news')}
				</a>
			</div>
		</div>
	)
}
