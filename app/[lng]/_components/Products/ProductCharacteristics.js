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

	return (
		<div className='w-full flex flex-col gap-5'>
			<div className='w-full flex flex-col relative'>
				<div className='w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto'>
					{categories.map((item, index) => (
						<button
							key={index}
							onClick={() => handleCategoryChange(item.category, item.dataKey)}
							className={`z-10 w-auto text-lg transition-text font-medium ${
								active === item.category
									? 'text-[#E31E24] border-b-2 border-b-[#E31E24]'
									: 'text-neutral-400'
							}`}
						>
							<h3 className='my-2 whitespace-nowrap'>{item.title}</h3>
						</button>
					))}
				</div>
				<hr className='w-full border-t-2 absolute bottom-0 border-slate-300' />
			</div>

			<div>
				{active === 'descriptions' && filtered.length > 0 && (
					<div className='text-lg leading-5'>
						{filtered.map((item, i) => (
							<p key={i}>{item.value}</p>
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
									<p>{item.value}</p>
								</div>
							</div>
						))}
					</div>
				)}

				{active === 'clients' && filtered.length > 0 && (
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
						{filtered.map((client, index) => (
							<div key={index} className='border p-4'>
								<div className='flex flex-col items-center mdx:flex-row'>
									<Image
										src={client.logo.url}
										alt={client.name}
										quality={100}
										className='w-full max-w-[320px] h-auto mb-2 p-5 object-contain lg:max-w-[340px]'
										width={340}
										height={320}
									/>
									<div className='mt-2'>
										<h3 className='font-bold text-lg mdx:text-2xl mdx:mb-2'>
											{client.name}
										</h3>
										<p className='text-[#808080] mdx:mb-4'>
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
							</div>
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
