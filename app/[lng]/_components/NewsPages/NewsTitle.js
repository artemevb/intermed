'use client'

import newsPhoto from '@/public/images/news/news-photo.png'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import NewCard from '../News/NewCard'

export default function NewsTitle() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'news-pages-other-news')
	const [news, setNews] = useState(null)
	const [news1, setNews1] = useState([])
	const { slug } = useParams()

	useEffect(() => {
		const fetchNewsWithSlug = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/new/get/${slug}`,
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



	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/new/get-all?page=1`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setNews1(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
			}
		}

		fetchNews()
	}, [lng])

	const slicedData = Array.isArray(news1) ? news1.slice(0, 4) : []
	if (!news) return <div>Loading...</div> // Loading state or error handling
	return (
		<div className="w-full max-w-[1440px] mx-auto flex gap-6 px-4">
			{/* Main news content */}
			<div className="w-full 2xl:w-8/12">
				<div className="mt-4">
					<p className="text-gray-400 text-[16px] mdx:text-[18px] xl:text-[20px]">
						{new Date(news.createdDate).toLocaleDateString(lng, {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</p>
					<h1 className="text-[25px] text-black mb-2 mdx:text-[34px] xl:text-[40px] leading-[1.10] uppercase">
						{news.head.heading}
					</h1>
				</div>
				<div>
					<p className="text-[16px] mdx:text-[20px]">{news.head.text}</p>
				</div>
				<div className="w-full max-xl:my-[25px] xl:mt-7 xl:mb-[80px] flex flex-row justify-center">
					<Image
						src={news.head.photo?.url || newsPhoto} // Use fallback if no image URL
						width={500}
						height={500}
						quality={100}
						alt={`News Image`}
						className="w-full h-auto object-cover rounded-xl"
					/>
				</div>

				{/* Rendering newOptions array */}
				{news.newOptions.map((item, index) => (
					<div className="mt-[60px] mb-[140px]" key={index}>
						{item.heading && (
							<h3 className="text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324]">
								{item.heading}
							</h3>
						)}
						{item.text && (
							<ol className="list-disc pl-4 mdx:pl-5">
								<li className="text-[16px] mdx:text-[20px]">{item.text}</li>
							</ol>
						)}
						{item.photo?.url && (
							<div className="mt-[30px] mb-[10px] flex flex-row justify-center">
								<Image
									src={item.photo.url} // Use item photo if available
									width={500}
									height={500}
									quality={100}
									alt={`News Image`}
									className="w-full h-auto max-w-[832px] max-h-[450px] 5xl:max-w-[1000px] object-cover rounded-xl"
								/>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Sidebar section */}
			<div className="max-w-[345px] hidden 2xl:block py-[43px]">
				<div className="sticky top-16">
					<h3 className="text-[24px] font-semibold mb-4">{t('other-news')}</h3>
					<div className="w-full grid grid-cols-1">
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

				</div>
			</div>
		</div>
	)
}
