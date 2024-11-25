'use client'
import { useState } from 'react'
import Image from 'next/image'
import close from '@/public/svg/close.svg'
import SignUpForEvent from '../../_components/Modal/SignUpForEvent'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function Timetable({
	closeModal,
	dateFrom,
	dateTo,
	timeFrom,
	timeTo,
	address, 
	eventId
}) {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'modal-timetable')
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

	const openSignUpModal = () => setIsSignUpModalOpen(true)
	const closeSignUpModal = () => setIsSignUpModalOpen(false)
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]'>
			<div className='bg-white p-6 shadow-md w-[90%] max-w-[500px] relative'>
				<button
					className='absolute w-[23px] top-4 right-3 xl:right-5 text-black'
					onClick={closeModal}
				>
					<Image
						src={close}
						width={100}
						height={100}
						quality={100}
						alt='close icon'
						className='h-full w-full'
					/>
				</button>
				<h2 className='text-xl font-semibold mb-4 xl:text-[28px] xl:mb-[30px]'>
					{t('schedule')}
				</h2>
				<div>
					<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
						<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
							{t('date')}
						</strong>{' '}
                        {dateFrom} - {dateTo}
					</p>
					<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 mdx:text-[22px] xl:text-[24px]'>
						<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
							{t('time')}
						</strong>{' '}
						{timeFrom} - {timeTo}
					</p>
					<p className='flex flex-col font-semibold border-b-[1px] mb-4 pb-2 xl:w-[80%] mdx:text-[22px] xl:text-[24px]'>
						<strong className='text-[#BABABA] font-normal mdx:text-[20px]'>
							{t('adress')}
						</strong>{' '}
						{address}
					</p>
				</div>
				<button
					className='mt-4 w-full bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white'
					onClick={openSignUpModal}
				>
					{t('sign-up')}
				</button>
			</div>
			{isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} eventId={eventId} />}
		</div>
	)
}
