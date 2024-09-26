'use client'
import { useState } from 'react'
import Image from 'next/image'
import Timetable from '../../_components/Modal/Timetable'
import SignUpForEvent from '../../_components/Modal/SignUpForEvent'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

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
}

// Function to parse Russian date strings like "18 июля" or "18.07.2024" into JavaScript Date objects
const parseDate = (dateStr) => {
  if (!dateStr) return null

  // Check if the date format is in dd.mm.yyyy
  if (dateStr.includes('.')) {
    const [day, month, year] = dateStr.split('.').map(Number)
    return new Date(year, month - 1, day) // Months are 0-based in JS
  }

  // Parse Russian format: "18 июля"
  const [dayStr, monthStr] = dateStr.trim().split(' ')
  const day = parseInt(dayStr, 10)
  const month = russianMonths[monthStr.toLowerCase()]

  if (isNaN(day) || month === undefined) {
    console.error('Invalid date format:', dateStr)
    return null
  }

  const currentYear = new Date().getFullYear()
  return new Date(currentYear, month, day)
}

export default function EventSignUp({
  title,
  photo,
  dateFrom,
  dateTo,
  timeFrom,
  timeTo,
  address,
  eventId, // Assuming eventId is passed as a prop
}) {
  const lng = useLanguage()
  const { t } = useTranslation(lng, 'events-events-sign-up')

  const [isTimetableModalOpen, setIsTimetableModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const openTimetableModal = () => setIsTimetableModalOpen(true)
  const closeTimetableModal = () => setIsTimetableModalOpen(false)

  const openSignUpModal = () => setIsSignUpModalOpen(true)
  const closeSignUpModal = () => setIsSignUpModalOpen(false)

  // Parse the dateTo prop
  const eventEndDate = parseDate(dateTo)
  
  // Get today's date without the time component
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Determine if the event is over
  const isEventOver = eventEndDate ? eventEndDate < today : false

  return (
    <div className='w-full mx-auto flex flex-col gap-1 px-2 mb-[100px] mdl:mb-[150px] xl:mb-[200px] xl:px-0'>
      <div className='xl:flex xl:flex-row xl:gap-9 items-center'>
        <div className='xl:w-1/2 xl:ml-[2%] 2xl:ml-[4%] 4xl:ml-[12%]'>
          <h2 className='uppercase text-[30px] font-semibold mdx:text-[38px] mdl:text-[44px] 2xl:text-[48px] mt-[52px] lh'>
            {title}
          </h2>
          
          {!isEventOver ? (
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
          ) : (
            <p className='text-red-500 font-semibold mt-[20px] flex justify-center text-[20px]'>
              {t('end')}
            </p>
          )}
        </div>
        <div className='xl:w-1/2 max-xl:mt-[40px]'>
          <Image
            width={1000}
            height={1000}
            src={photo}
            alt={title}
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
          eventId={eventId}
        />
      )}

      {isSignUpModalOpen && (
        <SignUpForEvent
          closeModal={closeSignUpModal}
          eventId={eventId}
        />
      )}
    </div>
  )
}
