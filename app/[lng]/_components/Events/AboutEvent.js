'use client'
import { useState } from 'react'
import Image from 'next/image'
import SignUpForEvent from '../../_components/Modal/SignUpForEvent'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function AboutEvent({ Data }) {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'event-about')
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

	const openSignUpModal = () => setIsSignUpModalOpen(true)
	const closeSignUpModal = () => setIsSignUpModalOpen(false)

	
	return (
		<div className='w-full max-w-[1440px] mx-auto flex flex-col gap-1 px-2'>
			<h2 className='text-[24px] mdx:text-[30px] mdl:text-[35px] lg:text-[36px] xl:text-[38px] font-semibold mb-4 xl:mb-[30px] uppercase'>
				{t('title')}
			</h2>
			<div className='xl:flex xl:flex-row-reverse overflow-visible relative mb-[100px] mdx:mb-[150px] xl:mb-[180px]'>
				<div className='bg-[#F4F7FE] p-6 w-full xl:sticky top-0 self-start xl:w-1/4 xl:ml-5 xl:flex xl:flex-col xl:justify-between'>
					<div>
						<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
							<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
								{t('date')}
							</strong>{' '}
							{Data.dateFrom} - {Data.dateTo}
						</p>
						<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
							<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
								{t('time')}
							</strong>{' '}
							{Data.timeFrom} - {Data.timeTo}
						</p>
						<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
							<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
								{t('adress')}
							</strong>{' '}
							{Data.address}
						</p>
					</div>
					<button
						className='mt-4 w-full mdx:max-w-[296px] bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white xl:max-w-[100%]'
						onClick={openSignUpModal}
					>
						{t('sign-up')}
					</button>
				</div>
				<div className='xl:w-3/4'>
					<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[30px]'>
						Мы рады пригласить вас на одно из самых значимых событий в области
						медицины этого года &ndash; Презентация Новейших Технологий в
						Медицине, которая пройдет в Ташкенте 17 июля 2024 года. Мероприятие
						соберет ведущих специалистов и экспертов из различных медицинских
						дисциплин, чтобы обсудить и продемонстрировать последние достижения
						и инновации в сфере здравоохранения.
					</p>
					<h3 className='text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]'>
						Основные темы мероприятия
					</h3>

					<ol className='list-disc pl-4 mdx:pl-5'>
						{Data.abouts.map((data, index) => (
							<li key={index} className='text-[16px] mdx:text-[20px]'>
								{data.title}
							</li>
						))}
					</ol>
					<h3 className='text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]'>
						Участие и регистрация
					</h3>
					<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[30px]'>
						{Data.participation}
					</p>
					<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
						Не упустите возможность познакомиться с последними достижениями в
						медицине и расширить свои профессиональные горизонты. Ждем вас на
						Презентации Новейших Технологий в Медицине в Ташкенте!
					</p>
					<h3 className='text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]'>
						Контакты
					</h3>
					<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
						{Data.phoneNum}
						<a
							href='mailto:info@mrjtrade.ae'
							className='text-[#E31E24] underline cursor-pointer'
						>
							{Data.email}
						</a>
					</p>
				</div>
			</div>
			{isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} />}
		</div>
	)
}
