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

export default function Partners() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'partners-main')
	const params = useParams()
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])
	const [logos, setlogo] = useState([])

	useEffect(() => {
		const getAllPartners = async () => {
			try {
				const response = await axios.get(`https://imed.uz/api/v1/partner/all`, {
					headers: { 'Accept-Language': params.lng },
				})
				setlogo(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
				setlogo(null) // Reset state if fetching fails
			}
		}
		getAllPartners()
	}, [lng])

	const settings = {
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
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
			<div className='flex flex-col gap-10'>
				<h2 className='text-3xl font-semibold max-mdl:text-2xl uppercase'>
					{t('title')}
				</h2>
				<div>
					<Slider {...settings} className='h-auto flex'>
						{logos.map((item, index) => (
							<div key={index}>
								<div className='p-14 border h-[200px] flex justify-center items-center'>
									<Image
										quality={100}
										src={item.logo.url}
										width={500}
										height={500}
										alt='Intermed Sertificate'
										className='w-full h-auto object-cover'
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
			<div className='flex w-full justify-center'>
				<a
					href={`/${lng}/partners`}
					className=' border border-neutral-300 px-12 py-3 transition-all duration-200 hover:bg-[#E94B50] hover:text-[#ffffff] font-bold'
				>
					{t('title-button')}
				</a>
			</div>

		</div>
	)
}
