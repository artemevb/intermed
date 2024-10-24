'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'


const Gallery = ({ Gallery }) => {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'gallery')
	const [visibleCount, setVisibleCount] = useState(6)

	const showMorePartners = () => {
		setVisibleCount(Gallery.length)
	}
	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-4 py-6 bg-white mb-[120px] mdl:mb-[130px]'>
			<h2 className='text-[20px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold mb-6 xl:mt-[30px] uppercase'>
				{t('gallery')}
			</h2>
			<div className='grid grid-cols-1 gap-6 mdl:grid-cols-2 mdl:gap-3 xl:grid-cols-3'>
				{Gallery.slice(0, visibleCount).map(item => (
					<div key={item.id} className="w-full h-auto" style={{ aspectRatio: '16/9' }}>
						<Image
							width={600}
							height={500}
							quality={100}
							src={item.url}
							alt={item.alt}
							layout="responsive"
							objectFit="cover"
							className="w-full h-full max-h-[275px] max-w-[465px]"
						/>
					</div>

				))}
			</div>
			{visibleCount < Gallery.length && (
				<div className='flex justify-center items-center mt-[40px] '>
					<button
						onClick={showMorePartners}
						className='bg-[#fff] text-[14px] mdx:text-[16px] py-3 px-[60px] border hover:bg-[#E94B50] hover:text-[#fff]'
					>
						{t('download-all')}
					</button>
				</div>
			)}
		</div>
	)
}

export default Gallery
