'use client'

import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function Sertificates() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'awards-certificates')
	const [data, setData] = useState(null)
	const [isMounted, setIsMounted] = useState(false)
	const params = useParams()
	useEffect(() => {
		setIsMounted(true)
	}, [])

	// https://imed.uz/api/v1/certificate/get-all?onlyPhoto=true

	useEffect(() => {
		const getAllSertificates = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/certificate/get-all?onlyPhoto=true`,
					{
						headers: { 'Accept-Language': params.lng },
					}
				)
				setData(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
				setData(null) // Reset state if fetching fails
			}
		}
		getAllSertificates()
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
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2'>
			{isMounted && (
				<div className='flex flex-col gap-5'>
					<h2 className='text-3xl font-semibold max-mdl:text-2xl uppercase'>
						{t('title')}
					</h2>
					<div>
						<Slider {...settings} className='h-auto flex'>
							{data?.map((item, index) => (
								<div key={index} className='px-[10px]'>
									<div className='px-8 border'>
										<Image
											src={item.photo.url}
											layout='fill'
											quality={100}
											alt='Intermed Sertificate'
											className='w-full h-full object-contain'
										/>
									</div>
								</div>
							))}
						</Slider>
					</div>

					<div className='w-full justify-center flex'>
						<a
							href={`/${lng}/licenses`}
							className='border border-neutral-300 px-12 py-3 transition-all duration-200 hover:bg-[#E94B50] hover:text-[#ffffff] font-bold'
						>
							{t('see-more')}
						</a>
					</div>
				</div>
			)}
		</div>
	)
}
