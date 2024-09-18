'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import NewCardMain from '../News/NewCardMain'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function News() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'news')
	const [isMounted, setIsMounted] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(
					'https://imed.uz/api/v1/new/get-all',
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

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	}

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 '>
			{isMounted && data.length > 0 && ( // Проверяем наличие данных
				<div className='flex flex-col gap-8'>
					<h2 className='text-3xl max-mdx:text-2xl font-semibold uppercase'>
						{t('title')}
					</h2>
					<div className='w-full h-auto '>
						<Slider {...settings} className='h-auto w-full '>
							{data?.map((item, i) => {
								return (
									<div className='px-[10px] xl:h-[520px] 3xl:h-[540px] max-h-full' key={i}>
										<a href={`/${lng}/news/${item.slug}`}>
											<NewCardMain
												title={item.head.heading}
												date={item.date}
												imageSrc={item.head.photo?.url}
											/>
										</a>
									</div>
								)
							})}
						</Slider>
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
