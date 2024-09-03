'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import NewCard from '../News/NewCard'

export default function News() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'news')
	const [isMounted, setIsMounted] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(
					'https://imed.uz/api/v1/new/get-all?page=1',
					{
						headers: {
							'Accept-Language': lng,
						},
					}
				)
				setData(response.data.data || [])
			} catch (error) {
				console.error('Failed to fetch categories', error)
				setData([])
			}
		}

		fetchCategories()
		setIsMounted(true)
	}, [lng])

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 '>
			{isMounted && (
				<div className='flex flex-col gap-8'>
					<h2 className='text-3xl max-mdx:text-2xl font-semibold uppercase'>
						{t('title')}
					</h2>
					<div className='w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto'>
						{data.slice(0, 4).map((item, i) => {
							return (
								<a key={i} href={`/${lng}/news/${item.slug}`}>
									<NewCard
										key={i}
										title={item.head.heading}
										date={item.date}
										imageSrc={item.head.photo.url}
									/>
								</a>
							)
						})}
					</div>
					<div className='flex w-full justify-center'>
						<a
							href={`/${lng}/news`}
							className=' border border-neutral-300 px-12 py-3 transition-all duration-200 hover:bg-[#E94B50] hover:text-[#ffffff] font-bold'
						>
							{t('title-button')}
						</a>
					</div>
				</div>
			)}
		</div>
	)
}
