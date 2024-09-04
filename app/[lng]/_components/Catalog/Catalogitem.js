'use client'
import Image from 'next/image'
import Link from 'next/link'
import GreenArrow from '../Buttons/GreenArrow'
import fav from '@/public/svg/main/fav.svg'
import favFilled from '@/public/svg/main/fav-filled.svg'
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function Catalogitem({
	new: isNew,
	sale,
	image,
	title,
	description,
	price,
	slug,
}) {
	const [isFavorite, setIsFavorite] = useState(false)
	const [isMdx, setIsMdx] = useState(false)

	const lng = useLanguage()
	const { t } = useTranslation(lng, 'translation')
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			const isCurrentlyMdx = window.innerWidth >= 460;
			if (isMdx !== isCurrentlyMdx) {
				setIsMdx(isCurrentlyMdx);
			}
		};

		handleResize(); // Первоначальная проверка
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isMdx]);


	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		setIsFavorite(favorites.some(item => item.slug === slug))
	}, [slug])

	const handleFavoriteToggle = () => {
		let favorites = JSON.parse(localStorage.getItem('favorites')) || []

		if (isFavorite) {
			favorites = favorites.filter(item => item.slug !== slug)
		} else {
			favorites.push({ title, description, image, price, slug })
		}

		localStorage.setItem('favorites', JSON.stringify(favorites))
		setIsFavorite(!isFavorite)
	}

	return (
		<div className='h-[290px] mdx:h-[440px] w-full '>
			<div className='rounded-2xl  mdx:pt-8 flex flex-col justify-between mdx:p-2 mdl:p-4 h-full relative'>
				<div
					onClick={handleFavoriteToggle}
					className='absolute top-4 right-4 z-10'
				>
					<Image
						src={isFavorite ? favFilled : fav}
						width={100}
						height={100}
						alt='Favorite Icon'
						className='w-6 h-6 max-mdx:w-5 max-mdx:h-45'
					/>
				</div>
				<div className='w-full h-[300px] flex items-center justify-center relative overflow-hidden'>
					<div className='absolute bottom-2 left-2 flex gap-1 '>
						{isNew && (
							<div className='py-1 px-3 rounded-full text-[12px]  mdx:text-sm font-bold text-red-500 bg-red-100 '>
								{t('new')}
							</div>
						)}
						{sale && (
							<div className='py-1 px-3 rounded-full text-[12px] mdx:text-sm font-bold text-red-500 bg-red-100 '>
								{sale}
							</div>
						)}
					</div>
					<Image
						src={image}
						alt={title}
						width={200}
						height={200}
						quality={100}
						className='object-contain w-full h-full'
					/>
				</div>
				<h3 className='text-md font-semibold'>
					{isMdx
						? title
						: title && title.length > 12
							? `${title.substring(0, 12)}...`
							: title || 'No Title'}
				</h3>
				<p className='text-xs text-[#BABABA] mt-1 '>
					{description?.length > 200 ? description?.slice(0, 150) : description}
				</p>
				<div className='flex w-full justify-between items-center flex-wrap mt-3'>
					<a href={`/${lng}/product/${slug}`}>
						{isMounted && (
							<div>
								<GreenArrow title={t('more-details')} />
							</div>
						)}
					</a>
					{/* {price && (
            <div className="py-1 px-2 font-semibold rounded-full text-greenView">
              {price}
            </div>
          )} */}
				</div>
			</div>
		</div>
	)
}
