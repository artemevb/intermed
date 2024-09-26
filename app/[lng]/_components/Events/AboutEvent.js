'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SignUpForEvent from '../../_components/Modal/SignUpForEvent';
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';

// Mapping of Russian month names to their corresponding month numbers (0-based)
const russianMonths = {
	'января': 0,
	'февраля': 1,
	'марта': 2,
	'апреля': 3,
	'мая': 4,
	'июня': 5,
	'июля': 6,
	'августа': 7,
	'сентября': 8,
	'октября': 9,
	'ноября': 10,
	'декабря': 11,
};

// Function to parse Russian date strings like "25 июля" or "25.07.2024" into JavaScript Date objects
const parseDate = (dateStr) => {
	if (!dateStr) {
		console.error('Date string is undefined or empty:', dateStr);
		return null; // Return null if dateStr is undefined or invalid
	}

	console.log('Parsing date:', dateStr);

	// Check if the date format is in "dd.mm.yyyy"
	if (dateStr.includes('.')) {
		const [day, month, year] = dateStr.split('.').map(Number);
		console.log('Parsed components (dot format):', day, month, year);

		if (isNaN(day) || isNaN(month) || isNaN(year)) {
			console.error('Invalid date components:', dateStr);
			return null; // Return null if date components are invalid
		}
		return new Date(year, month - 1, day); // Month is zero-based in JavaScript
	}

	// Parse Russian format: "25 июля"
	const [dayStr, monthStr] = dateStr.trim().split(' ');
	const day = parseInt(dayStr, 10);
	const month = russianMonths[monthStr.toLowerCase()];

	console.log('Parsed components (text format):', day, month);

	if (isNaN(day) || month === undefined) {
		console.error('Invalid Russian date format:', dateStr);
		return null;
	}

	const currentYear = new Date().getFullYear();
	return new Date(currentYear, month, day); // Return a Date object
};

export default function AboutEvent({ Data }) {
	const lng = useLanguage();
	const { t } = useTranslation(lng, 'event-about');
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
	const [isEventOver, setIsEventOver] = useState(false);

	useEffect(() => {
		console.log('useEffect triggered with Data.dateTo:', Data?.dateTo);

		// Check if Data.dateTo is a string or an object
		let dateStr = '';

		if (typeof Data?.dateTo === 'string') {
			dateStr = Data.dateTo;
		} else if (typeof Data?.dateTo === 'object') {
			// Предполагаем, что Data.dateTo может быть объектом с ключами по языкам
			dateStr = Data.dateTo[lng];
			console.log(`Date string for language "${lng}":`, dateStr);
		} else {
			console.error('Unsupported format for Data.dateTo:', Data?.dateTo);
			return;
		}

		// Parse the event end date
		const eventEndDate = parseDate(dateStr);

		if (!eventEndDate) {
			console.error('Event end date could not be parsed:', dateStr);
			return; // Exit if the date could not be parsed
		}

		// Get today's date without the time component
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);

		// Remove the time component from eventEndDate for accurate comparison
		eventEndDate.setHours(0, 0, 0, 0);

		console.log('Current Date:', currentDate);
		console.log('Event End Date:', eventEndDate);

		if (eventEndDate < currentDate) {
			setIsEventOver(true);
			console.log('Event is over.');
		} else {
			setIsEventOver(false);
			console.log('Event is not over.');
		}
	}, [Data?.dateTo, lng]);

	const openSignUpModal = () => setIsSignUpModalOpen(true);
	const closeSignUpModal = () => setIsSignUpModalOpen(false);

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto gap-1 px-2'>
			<h2 className='text-[24px] mdx:text-[30px] mdl:text-[35px] lg:text-[36px] xl:text-[38px] font-semibold mb-4 xl:mb-[30px] uppercase xl:hidden'>
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
					{!isEventOver && (
						<button
							className='mt-4 w-full mdx:max-w-[296px] bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white xl:max-w-[100%]'
							onClick={openSignUpModal}
						>
							{t('sign-up')} {/* Text for sign up when event is ongoing */}
						</button>
					)}
					{isEventOver && (
						<p className='mt-4 text-center text-red-500 font-semibold'>
							{t('event-ended')} {/* Optional: Display a message when event is over */}
						</p>
					)}
				</div>
				<div className='xl:w-3/4'>
					<h2 className='text-[24px] mdx:text-[30px] mdl:text-[35px] lg:text-[36px] xl:text-[38px] font-semibold mb-4 xl:mb-[30px] uppercase hidden xl:block'>
						{t('title')}
					</h2>
					{Data?.abouts.map((item) => (
						<React.Fragment key={item.id}>
							<p className='text-[15px] mdx:text-[18px] mdl:text-[24px] mt-[30px] font-semibold'>
								{item.title}
							</p>
							<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
								{item.text}
							</p>
						</React.Fragment>
					))}
					{(Data?.phoneNum || Data?.email) && (
						<>
							<h3 className='text-[20px] mdx:text-[27px] font-semibold mb-4 text-[#252324] mt-[30px]'>
								{t('сontacts')}
							</h3>
							<p className='text-[15px] mdx:text-[18px] mdl:text-[20px] mt-[10px]'>
								{Data?.phoneNum}
								{Data?.email && (
									<a
										href={`mailto:${Data?.email}`}
										className='text-[#E31E24] underline cursor-pointer p-2'
									>
										{Data?.email}
									</a>
								)}
							</p>
						</>
					)}

				</div>
			</div>

			{isSignUpModalOpen && <SignUpForEvent closeModal={closeSignUpModal} eventId={Data?.id} />}
		</div>
	);
}
