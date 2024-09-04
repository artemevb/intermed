'use client'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ReviewsSlider() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'equipment-reviews')
	const [reviews, setReviews] = useState([])

	const truncateDescription = description => {
		if (description.length > 327) {
			return description.substring(0, 327) + '...'
		}
		return description
	}

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/review/get-all?page=1`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setReviews(response.data.data)
			} catch (error) {
				console.error('Failed to fetch reviews:', error.message)
			}
		}

		fetchReviews()
	}, [lng])

	const formatDate = dateString => {
		const date = new Date(dateString)
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0') // getMonth is zero-based
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	const settings = {
		arrows: false,
		infinite: true,
		spaceBetween: 20,
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

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] flex flex-col mx-auto'>
			<h2 className='mx-[10px] text-3xl max-mdx:text-2xl font-semibold uppercase mb-[20px]'>
				{t('title')}
			</h2>
			<div className='block'>
				{reviews.length > 1 ? (
					<Slider {...settings}>
						{reviews.map(card => (
							<div key={card.id} className='px-3'>
								<div className='max-h-[450px]'>
									<div className='bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[370px] flex flex-col justify-between'>
										<div className='mdx:p-8 xl:p-0'>
											<div className='flex justify-start items-center gap-3 xl:items-start mb-4'>
												<div className='h-[60px] w-[60px] mdx:h-[80px] mdx:w-[80px] relative xl:mr-4'>
													<Image
														src={card.logo?.url}
														alt={card.title}
														quality={100}
														layout='fill'
														objectFit='contain'
														className='w-full h-auto'
													/>
												</div>
												<div>
													<h2 className='text-xl font-bold right mt-3 mdx:mb-2 xl:text-[28px] mb-1'>
														{card.clientName}
													</h2>
													<p className='text-gray-400'>
														{formatDate(card.createdDate)}
													</p>
												</div>
											</div>
											<p className='mb-4 mdx:text-[18px]'>
												{truncateDescription(card.comment)}
											</p>
										</div>
										<Link href={`/${lng}/reviews/${card.id}`}>
											<span className='text-[#E31E24] font-semibold hover:underline mdx:text-[18px] mdx:flex mdx:justify-end'>
												{t('read-more')}
											</span>
										</Link>
									</div>
								</div>
							</div>
						))}
					</Slider>
				) : reviews.length === 1 ? (
					<div className='px-3 max-w-[700px]'>
						<div className='max-h-[450px]'>
							<div className='bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[370px] flex flex-col justify-between'>
								<div className='mdx:p-8 xl:p-0'>
									<div className='flex justify-start items-center gap-3 xl:items-start mb-4'>
										<div className='h-[60px] w-[60px] mdx:h-[80px] mdx:w-[80px] relative xl:mr-4'>
											<Image
												src={reviews[0].logo?.url}
												alt={reviews[0].title}
												quality={100}
												layout='fill'
												objectFit='contain'
												className='w-full h-auto'
											/>
										</div>
										<div>
											<h2 className='text-xl font-bold right mt-3 mdx:mb-2 xl:text-[28px] mb-1'>
												{reviews[0].clientName}
											</h2>
											<p className='text-gray-400'>{formatDate(reviews[0].createdDate)}</p>
										</div>
									</div>
									<p className='mb-4 mdx:text-[18px]'>
										{truncateDescription(reviews[0].comment)}
									</p>
								</div>
								<a href={`/${lng}/reviews`}>
									<span className='text-[#E31E24] font-semibold hover:underline mdx:text-[18px] mdx:flex mdx:justify-end'>
										{t('read-more')}
									</span>
								</a>
							</div>
						</div>
					</div>
				) : (
					<p>{t('no-reviews')}</p>
				)}
			</div>
			<div className='mt-[60px] flex items-center justify-center'>
				<a
					href={`/${lng}/reviews`}
					className='px-12 py-3 transition-all text-[#fff] duration-200 bg-[#E94B50] hover:bg-[#EE787C] hover:text-[#ffffff]'
				>
					{t('see-more')}
				</a>
			</div>
		</div>
	)
}
