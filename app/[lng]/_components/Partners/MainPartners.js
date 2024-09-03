'use client'
import globus from '@/public/images/aboutUs/partners/globus.svg'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PartnerPage() {
	const [partner, setPartner] = useState(null) // Set initial state to null
	const { slug, lng } = useParams()

	useEffect(() => {
		const fetchPartnerInfo = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/partner/${slug}`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setPartner(response.data.data)
			} catch (error) {
				console.error('Failed to fetch partner:', error.message)
			}
		}

		fetchPartnerInfo()
	}, [slug, lng])

	if (!partner) return <p>Loading...</p> // Add a loading state

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-4 py-10'>
			<div key={partner.id} className='mb-[60px] mdl:mb-[75px] xl:mb-[95px]'>
				<div className='border-b pb-[25px]'>
					<h1 className='text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold mb-2'>
						{partner.name}
					</h1>

					<h2 className='text-[12px] max-w-[820px] mdx:text-[16px] text-[#808080] font-semibold mb-4'>
						{partner.note}
					</h2>
					<p className=' whitespace-pre-line mt-[20px] xl:mt-[40px] text-[15px] mdx:text-[18px] mdl:text-[18px]'>
						{partner.about}
					</p>
				</div>
				<div className='flex flex-row justify-between items-center h-auto mt-[20px]'>
					<button className='bg-[#FCE8E9] py-[15px] px-[20px] mdx:py-[20px] xl:px-[20px] h-full rounded-md flex items-center text-[14px] mdx:text-[16px] mdl:text-[18px] xl:text-[20px] text-[#E31E24]'>
						<Image
							src={globus}
							alt={partner.name}
							quality={100}
							objectFit='contain'
							className='mr-2'
						/>
						{partner.website}
					</button>
					<div className='w-auto h-auto relative max-w-[110px] mdx:max-w-[224px]'>
						<Image
							width={100}
							height={100}
							src={partner.logo.url}
							alt={partner.slug}
							quality={100}
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
