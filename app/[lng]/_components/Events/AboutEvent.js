"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import SignUpForEvent from '../../_components/Modal/SignUpForEvent';
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function AboutEvent({ Data }) {
	const lng = useLanguage();
	const { t } = useTranslation(lng, 'event-about');
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

	const openSignUpModal = () => setIsSignUpModalOpen(true);
	const closeSignUpModal = () => setIsSignUpModalOpen(false);

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col gap-1 px-2'>
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
							{Data?.dateFrom} - {Data?.dateTo}
						</p>
						<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
							<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
								{t('time')}
							</strong>{' '}
							{Data?.timeFrom} - {Data?.timeTo}
						</p>
						<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
							<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
								{t('adress')}
							</strong>{' '}
							{Data?.address}
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
					{Data?.abouts.map((item) => (
						<React.Fragment key={item.id}>
							<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[30px]'>
								{item.title}
							</p>
							<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
								{item.text}
							</p>
						</React.Fragment>
					))}
					<h3 className='text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324] mt-[30px]'>
						Контакты
					</h3>
					<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
						{Data?.phoneNum}
						<a
							href={`mailto:${Data?.email}`}
							className='text-[#E31E24] underline cursor-pointer'
						>
							{Data?.email}
						</a>
					</p>
				</div>
			</div>
			{isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} />}
		</div>
	);
}
