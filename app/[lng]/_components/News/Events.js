'use client'

import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import axios from 'axios'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import GreenArrow from '../Buttons/GreenArrow'
import EventCard from '../Events/EventCard'

export default function Events() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'news-events')
	const [events, setEvents] = useState([])

	useEffect(() => {
		const getAllEvents = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/event/get-all`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setEvents(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
				setEvents(null) // Reset state if fetching fails
			}
		}
		getAllEvents()
	}, [lng])

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	console.log('Events', events)

	return (
		<section className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-1 px-2'>
			<a href={`/${lng}/events/`}>
				<h2 className='text-3xl max-mdx:text-2xl font-bold flex items-center mt-[40px] uppercase'>
					{t('title')}
					<GreenArrow />
				</h2>
			</a>
			<div className='w-full'>
				{events.length > 1 ? (
					<Slider {...settings}>
						<div className='w-full border'>
							{events?.map((item, index) => (
								<div key={index} className='p-2 mt-4'>
									<EventCard
										title={item.name}
										imageSrc={item.photo.url}
										slug={item.slug}
									/>
								</div>
							))}
						</div>
					</Slider>
				) : (
					<div className='w-full max-w-[700px]'>
						{events?.map((item, index) => (
							<div key={index} className='p-2 mt-4'>
								<EventCard
									title={item.name}
									imageSrc={item.photo.url}
									slug={item.slug}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	)
}
