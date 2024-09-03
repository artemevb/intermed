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
	console.log(partners)

	const [showAll, setShowAll] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				// Adjust the value to match your 'mdx' breakpoint
				setShowAll(true)
			} else {
				setShowAll(false)
			}
		}
		handleResize() // Check the initial screen size
		window.addEventListener('resize', handleResize) // Add resize event listener

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
				console.error('Failed to fetch news:', error.message)
				setPartners(null) // Reset state if fetching fails
			}
		}
		getAllPartners()
	}, [lng])

	const visiblePartners = showAll ? partners : partners.slice(0, 14)

	return (
		<div className='w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mt-7'>
			<div className='grid grid-cols-1 gap-4 mdx:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-[40px] mdx:mb-[180px]'>
				{visiblePartners.map(card => (
					<div
						key={card.id}
						className='bg-white p-4 border-[1px] border-gray-200 mdx:p-0 mdl:p-5 '
					>
						<div className=' items-center justify-between divide-y  '>
							<div className='w-full h-[70px] relative mt-3 mb-9'>
								<Image
									src={card.logo.url}
									alt={card.title}
									layout='fill'
									quality={100}
									objectFit='contain'
								/>
							</div>
							<div className='mdx:mb-4 mdx:p-3 '>
								<h2 className='text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]'>
									{card.name}
								</h2>
								<p className='mb-4 text-gray-600 xl:text-[18px] '>
									{card.note.length > 100
										? `${card.note.slice(0, 90)}...`
										: card.note}
								</p>
								<a href={`/${lng}/partners/${card.slug}`}>
									<span className='text-[#E31E24] font-semibold mdx:text-[18px]'>
										<GreenArrow title={t('more')} />
									</span>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center mb-[120px]'>
				<button
					onClick={() => setShowAll(!showAll)}
					className='bg-white border text-[#252324] py-3 px-[55px] hover:text-white hover:bg-[#E94B50]'
				>
					{showAll ? t('buttons.hide') : t('buttons.showAll')}
				</button>
			</div>
		</div>
	)
}
