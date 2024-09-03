'use client'

import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import CategoryItem from '../Categories/CategoryItem'

export default function List() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'equipments-main')
	const [data, setData] = useState([])
	const [isMounted, setIsMounted] = useState(false)
	const getAllCategories = useCallback(async () => {
		try {
			const response = await axios.get('https://imed.uz/api/v1/category', {
				headers: {
					'Accept-Language': lng,
				},
			})
			setData(response.data.data)
		} catch (error) {
			console.log('Failed::: getAllCategories')
		}
	}, [lng])

	useEffect(() => {
		getAllCategories()
	}, [lng])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<div className='w-full max-w-[1440px] mx-auto px-2'>
			{isMounted && (
				<div className='flex flex-col gap-8'>
					<h1 className='text-3xl max-mdx:text-2xl font-semibold uppercase'>
						{t('title')}
					</h1>
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
				</div>
			)}
		</div>
	)
}
