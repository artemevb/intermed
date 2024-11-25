'use client'

import facebook from '@/public/svg/facebook.svg'
import instagr from '@/public/svg/inst.svg'
import tabler from '@/public/svg/tabler_link.svg'
import telegram from '@/public/svg/telegram.svg'
import whatsapp from '@/public/svg/whats.svg'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function NewsTitle() {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'news-pages-share')
	const [news, setNews] = useState(null)

	const { slug } = useParams()
	useEffect(() => {
		const fetchNewsWithSlug = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/new/get/${slug}`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setNews(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
				setNews(null) // Reset state if fetching fails
			}
		}
		fetchNewsWithSlug()
	}, [lng, slug])

	const icons = [
		{ src: telegram, alt: 'Telegram Icon', link: 'https://t.me/intermedtrade' },
		{
			src: facebook,
			alt: 'Facebook Icon',
			link: 'https://www.facebook.com/intermed.mindray',
		},
		{
			src: instagr,
			alt: 'Instagram Icon',
			link: 'https://www.instagram.com/intermed.mindray',
		},
		{ src: whatsapp, alt: 'WhatsApp Icon', link: '#' },
	]

	const copyLinkToClipboard = () => {
		navigator.clipboard
			.writeText(window.location.href)
			.then(() => {
				toast.success(t('link_copied'), {
					position: 'top-right',
					autoClose: 3000,
				})
			})
			.catch(err => {
				toast.error(t('copy_error'), {
					position: 'top-right',
					autoClose: 3000,
				})
				console.error(t('copy_error'), err)
			})
	}

	return (
		<div className='bg-slate-100'>
			<ToastContainer />
			<div className='max-w-[1440px] 5xl:max-w-[2000px] mdl:mx-auto'>
				<div className='mx-[15px] mdl:flex mdl:flex-row-reverse mdl:items-center mdl:justify-between xl:flex-row xl:justify-center relative  mdl:py-4'>
					<div className='mdl:items-center mdl:flex  flex justify-center content-center'>
						<Image
							src={news?.head.photo?.url}
							width={500}
							height={500}
							quality={100}
							alt='News Image'
							className='w-full h-auto max-w-[340px] max-h-[340px] object-cover mdl:w-full mdl:max-h-[280px] mdl:max-w-[280px] mdl:mr-5 xl:max-h-[310px] xl:max-w-[310px]'
						/>
					</div>
					<div>
						<div className='flex flex-col uppercase text-redMain  mdl:flex-1 pb-[24px] '>
							<h2 className='z-20 mt-8 ml-3 font-semibold text-[27px] xl:text-[38px] xl:mb-3 xl:ml-9 mdl:text-[23px] slg:text-[30px]'>
								{t('share-1')}
								<br />
								{t('share-2')}
							</h2>
							<p className='text-gray-500 mt-2 text-[15px] normal-case mdl:w-[320px] xl:text-[20px] xl:w-[503px] z-20 xl:ml-9 ml-3 slg:text-[18px] xl:mt-1'>
								Поделитесь этой новостью с коллегами и вместе улучшайте свои
								навыки в ультразвуковой диагностике
							</p>
						</div>
						<div className='flex gap-3 pb-[40px] mdl:pb-[30px] mdl:ml-3 xl:ml-9'>
							<div className='w-[50px] h-[50px] border mdl:w-[40px] mdl:h-[40px] slg:h-[50px] slg:w-[50px] xl:hidden bg-[#E94B50]'>
								<a
									onClick={copyLinkToClipboard}
									className='flex items-center justify-center w-full h-full'
								>
									<Image
										quality={100}
										src={tabler}
										width={21}
										height={21}
										alt='Link copy Icon'
										className='w-[21px] h-[21px] object-cover slg:h-[24px] slg:w-[24px]'
									/>
								</a>
							</div>
							<button
								onClick={copyLinkToClipboard}
								className='hidden xl:flex items-center justify-center text-white text-[16px] xl:text-[20px] bg-[#E94B50] px-8 py-3 hover:bg-[#EE787C]'
							>
								{t('copy-link')}
							</button>
							{icons.map((icon, index) => (
								<div
									key={index}
									className='w-[50px] h-[50px] border mdl:w-[40px] mdl:h-[40px] slg:h-[50px] slg:w-[50px] xl:h-[55px] xl:w-[55px]'
								>
									<a
										href={icon.link}
										className='flex items-center justify-center w-full h-full'
									>
										<Image
											src={icon.src}
											width={21}
											height={21}
											quality={100}
											target='_blank'
											alt={icon.alt}
											className='w-[21px] h-[21px] object-cover slg:h-[24px] slg:w-[24px]'
										/>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
