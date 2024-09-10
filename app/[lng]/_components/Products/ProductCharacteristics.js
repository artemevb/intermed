'use client'
import { useState } from 'react'
import Image from 'next/image'
import arrowred from '@/public/svg/arrow-right-red.svg'
import Modal from '../Modal/AttachedFiles'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function ProductCharacteristics({ data }) {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'product-characteristics')
	// Define categories based on the data structure
	const categories = [
		{
			category: 'descriptions',
			title: t('description'),
			dataKey: 'descriptions',
		},
		{
			category: 'characteristics',
			title: t('characteristics'),
			dataKey: 'characteristics',
		},
		{ category: 'clients', title: t('client'), dataKey: 'client' },
	]

	// Initialize the active category and filtered data
	const [active, setActive] = useState(categories[0].category)
	const [filtered, setFiltered] = useState(data[categories[0].dataKey] || [])
	const [selectedAttachedFiles, setSelectedAttachedFiles] = useState(null)

	console.log(filtered, "Filtered")
	// Open modal with attached files
	const openModal = files => {
		setSelectedAttachedFiles(files)
	}

	// Close modal
	const closeModal = () => {
		setSelectedAttachedFiles(null)
	}

	// Handle category change
	const handleCategoryChange = (category, dataKey) => {
		setActive(category)
		setFiltered(data[dataKey] || [])
	}

	// Helper function to handle newlines and replace them with <br />
	const formatTextWithNewlines = (text) => {
		return text.split('\n').map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		))
	}

	return (
		<div className='w-full flex flex-col gap-5'>
			<div className='w-full flex flex-col relative'>
				<div className="text-container w-max">
					<div className="w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto">
						{categories.map((item, index) => (
							<button
								key={index}
								onClick={() => handleCategoryChange(item.category, item.dataKey)}
								className={`z-10 w-auto text-lg transition-text font-medium ${active === item.category
									? 'text-[#E31E24] border-b-2 border-b-[#E31E24]'
									: 'text-neutral-400'
									}`}
							>
								<h3 className='my-2 whitespace-nowrap'>{item.title}</h3>
							</button>
						))}
					</div>
					<hr className="w-full border-t-1 " />
				</div>

			</div>

			<div>
				{active === 'descriptions' && filtered.length > 0 && (
					<div className='text-lg leading-5'>
						{filtered.map((item, i) => (
							<div key={i}>
								<p className='text-[18px] text-[#252324] mdx:text-[24px] lg:text-[20px] font-bold' >{formatTextWithNewlines(item.title)}</p>
								<ul>
									<li>{formatTextWithNewlines(item.value)}</li>
								</ul>
							</div>

						))}
					</div>
				)}

				{active === 'characteristics' && filtered.length > 0 && (
					<div className='flex flex-col gap-6 w-full'>
						{filtered.map((item, i) => (
							<div key={i} className='w-full flex gap-3'>
								<p className='w-full text-neutral-400 max-w-[100px] md:max-w-[150px] mdx:max-w-[200px] lg:max-w-[400px]'>
									{item.title}
								</p>
								<div className='flex w-full flex-col'>
									<p>{formatTextWithNewlines(item.value)}</p>
								</div>
							</div>
						))}
					</div>
				)}

				{active === 'clients' && filtered.length > 0 && (
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
						{filtered.map((client, index) => (
							<a href={`/${lng}/clients/${client.slug}`} key={index} className='border p-4'>
								<div className='mdx:flex mdx:flex-row items-center justify-between w-full'>
									<div className='mdx:w-[50%] h-[230px] relative mt-3'>
										<Image
											src={client.logo.url}
											alt={client.name}
											layout="fill" quality={100} objectFit="cover" className='w-full h-full mdx:pr-3' />
									</div>
									<div className='mdx:mb-4 mdx:w-[50%]'>
										<h3 className='text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]'>
											{client.name}
										</h3>
										<p className='mb-4 text-gray-600 xl:text-[18px]'>
											{client.description.length > 100
												? `${client.description.slice(0, 100)}...`
												: client.description}
										</p>
										<button className='text-[#E31E24] mt-2 flex items-center'>
											{t('more')}
											<Image
												src={arrowred}
												width={100}
												height={100}
												alt='Arrow Icon'
												className='w-5 h-5'
											/>
										</button>
									</div>
								</div>
							</a>
						))}
					</div>
				)}
			</div>

			<div className='flex justify-start mt-2'>
				<button
					className='bg-[#FCE8E9] text-[#E31E24] py-4 px-[30px] font-bold hover:text-[#EE787C]'
					onClick={() => openModal(data.files || [])}
				>
					{t('attached-files')}
				</button>
			</div>

			<Modal
				selectedAttachedFiles={selectedAttachedFiles}
				closeModal={closeModal}
			/>
		</div>
	)
}
