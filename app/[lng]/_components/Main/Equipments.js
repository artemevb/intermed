'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import CategoryItem from '../Categories/CategoryItem'

export default function Equipments() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'equipments-main')
	const [isMounted, setIsMounted] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get('https://imed.uz/api/v1/category', {
					headers: {
						'Accept-Language': lng,
					},
				})
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
		<div className='w-full max-w-[1440px] mx-auto px-2 '>
			{isMounted && (
				<div className='flex flex-col gap-8'>
					<h2 className='text-3xl max-mdl:text-2xl font-semibold uppercase'>
						{t('title')}
					</h2>
					<div className='w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4'>
						{data.map((item, i) => (
							<CategoryItem
								key={i}
								title={item.name}
								imageSrc={item.photo.url}
								slug={item.slug}
							/>
						))}
					</div>
					<div className='w-full flex justify-center'>
						<a
							href={`/${lng}/categories`}
							className=' border border-neutral-300 px-12 py-3 transition-all hover:text-white hover:bg-[#E94B50] duration-200 font-bold'
						>
							{t('all-categories')}
						</a>
					</div>
				</div>
			)}
		</div>
	)
}
