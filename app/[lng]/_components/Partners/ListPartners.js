'use client'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import GreenArrow from '../Buttons/GreenArrow'

export default function ListPartners() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'partners-list-partners')
	const [partners, setPartners] = useState([])

	// Set showAll to true by default, no button interaction needed
	const [showAll, setShowAll] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				// Automatically show all partners on larger screens
				setShowAll(true)
			} else {
				setShowAll(false)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		const getAllPartners = async () => {
			try {
				const response = await axios.get(`https://imed.uz/api/v1/partner/all`, {
					headers: { 'Accept-Language': lng },
				})
				setPartners(response.data.data)
			} catch (error) {
				console.error('Failed to fetch partners:', error.message)
				setPartners(null) // Reset state if fetching fails
			}
		}
		getAllPartners()
	}, [lng])

	// Always show all partners now
	const visiblePartners = partners

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 mt-7'>
			<div className='grid grid-cols-1 gap-4 mdx:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-[40px] mdx:mb-[150px]'>
				{visiblePartners.map(card => (
					<div
						key={card.id}
						className='bg-white p-4 border-[1px] border-gray-200 mdx:p-0 mdl:p-[10px] flex flex-col justify-between'
					>
						<a href={`/${lng}/partners/${card.slug}`} className='flex flex-col h-full justify-start'>
							<div className='w-full h-[150px] relative mt-3 mb-9'>
								<Image
									src={card.logo.url}
									alt={card.title}
									layout='fill'
									quality={100}
									objectFit='contain'
									className='p-4 w-full h-full'
								/>
							</div>
							<div className='flex-grow  mdx:px-3 mdx:pt-3 border-t'>
								<h2 className='text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]'>
									{card.name}
								</h2>
								<p className='mb-4 text-gray-600 xl:text-[18px]'>
									{card.note.length > 100
										? `${card.note.slice(0, 90)}...`
										: card.note}
								</p>
							</div>
							<div className='mdx:mb-3 mdx:ml-3 mt-auto'>
								<span className='text-[#E31E24] font-bold mdx:text-[18px]'>
									<GreenArrow title={t('more')} />
								</span>
							</div>
						</a>
					</div>
				))}
			</div>
		</div>

	)
}
