'use client'
import { useState } from 'react'
import Image from 'next/image'
import Timetable from '../../_components/Modal/Timetable'
import SignUpForEvent from '../../_components/Modal/SignUpForEvent'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function EventSignUp({
	title,
	photo,
	dateFrom,
	dateTo,
	timeFrom,
	timeTo,
	address,
}) {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'events-events-sign-up')

	const [isTimetableModalOpen, setIsTimetableModalOpen] = useState(false)
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

	const openTimetableModal = () => setIsTimetableModalOpen(true)
	const closeTimetableModal = () => setIsTimetableModalOpen(false)

	const openSignUpModal = () => setIsSignUpModalOpen(true)
	const closeSignUpModal = () => setIsSignUpModalOpen(false)

	return (
		<div className='w-full mx-auto flex flex-col gap-1 px-2 mb-[100px] mdl:mb-[150px] xl:mb-[200px] xl:px-0'>
			<div className='xl:flex xl:flex-row xl:gap-9 items-center'>
				<div className='xl:w-1/2 xl:ml-[2%] 2xl:ml-[4%] 4xl:ml-[12%]'>
					<h2 className='uppercase text-[30px] font-semibold mdx:text-[38px] mdl:text-[44px] 2xl:text-[48px] mt-[52px] lh'>
						{title}
					</h2>
					<div className='flex flex-row justify-between mt-[20px] mdx:justify-normal mdx:gap-2 xl:gap-4'>
						<button
							className='w-[49%] bg-[#E94B50] hover:bg-[#EE787C] py-[15px] text-white font-semibold mdx:max-w-[220px]'
							onClick={openSignUpModal}
						>
							{t('sign-up')}
						</button>
						<button
							className='w-[49%] border-[1px] bg-[#fff] py-[15px] font-semibold mdx:max-w-[220px] hover:bg-[#E94B50] hover:text-[#ffffff]'
							onClick={openTimetableModal}
						>
							{t('schedule')}
						</button>
					</div>
				</div>
				<div className='xl:w-1/2 max-xl:mt-[40px]'>
					<Image
						width={1000}
						height={1000}
						src={photo}
						alt={'title'}
						quality={100}
						objectFit='cover'
						className='object-cover w-full h-full '
					/>
				</div>
			</div>

			{isTimetableModalOpen && (
				<Timetable
					closeModal={closeTimetableModal}
					dateFrom={dateFrom}
					dateTo={dateTo}
					timeFrom={timeFrom}
					timeTo={timeTo}
					address={address}
				/>
			)}
			{isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} />}
		</div>
	)
}
