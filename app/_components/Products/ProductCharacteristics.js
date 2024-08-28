'use client'
import { useState } from 'react'
import Image from 'next/image'
import arrowred from '@/public/svg/arrow-right-red.svg'
import Modal from '@/app/_components/Modal/AttachedFiles'

export default function ProductCharacteristics({ data }) {
	// Default state initialization
	const [activeCategory, setActiveCategory] = useState('descriptions')
	const [filteredData, setFilteredData] = useState(data?.descriptions || [])
	const [selectedAttachedFiles, setSelectedAttachedFiles] = useState(null)
	// Open modal with selected files
	const openModal = files => {
		setSelectedAttachedFiles(files)
	}

	// Close the modal
	const closeModal = () => {
		setSelectedAttachedFiles(null)
	}

	// Handle category change
	const handleCategoryChange = category => {
		setActiveCategory(category)

		switch (category.toLowerCase()) {
			case 'descriptions':
				setFilteredData(data?.descriptions || [])
				break
			case 'characteristics':
				setFilteredData(data?.characteristics || [])
				break
			case 'clients':
				setFilteredData(data?.client || [])
				break
			default:
				setFilteredData([])
				break
		}
	}

	return (
		<div className='w-full flex flex-col gap-5'>
			<div className='w-full flex flex-col relative'>
				<div className='w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto'>
					{['Descriptions', 'Characteristics', 'Clients'].map(
						(category, index) => (
							<button
								key={index}
								onClick={() => handleCategoryChange(category)}
								className={`z-10 w-auto text-lg transition-text font-medium ${
									activeCategory.toLowerCase() === category.toLowerCase()
										? 'text-[#E31E24] border-b-2 border-b-[#E31E24]'
										: 'text-neutral-400'
								}`}
							>
								<h3 className='my-2 whitespace-nowrap'>{category}</h3>
							</button>
						)
					)}
				</div>
				<hr className='w-full border-t-2 absolute bottom-0 border-slate-300' />
			</div>

			<div>
				{activeCategory.toLowerCase() === 'descriptions' &&
					filteredData.map((item, i) => (
						<div key={i} className='text-lg leading-5'>
							<p>{item.value}</p>
						</div>
					))}
				{activeCategory.toLowerCase() === 'characteristics' &&
					filteredData.map((item, i) => (
						<div key={i} className='w-full flex gap-3'>
							<p className='w-full text-neutral-400 max-w-[100px] md:max-w-[150px] mdx:max-w-[200px] lg:max-w-[400px]'>
								{item.title}
							</p>
							<div className='flex w-full flex-col'>
								<p>{item.value}</p>
							</div>
						</div>
					))}
				{activeCategory.toLowerCase() === 'clients' && (
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
						{filteredData.map((client, index) => (
							<div key={index} className='border p-4 flex'>
								<div className='flex flex-col items-center mdx:flex-row'>
									<Image
										src={client.logo?.url || client.logo}
										alt={client.name}
										className='w-full max-w-[320px] h-auto mb-2 p-5 object-contain lg:max-w-[340px]'
										width={340}
										height={320}
									/>
									<div className='mt-2'>
										<h3 className='font-bold text-lg mdx:text-2xl mdx:mb-2'>
											{client.name}
										</h3>
										<p className='text-[#808080] mdx:mb-4 line-clamp-3'>
											{client.description?.ru || client.description}
										</p>
										<button className='text-[#E31E24] mt-2 flex items-center'>
											Подробнее
											<Image
												src={arrowred}
												width={100}
												height={100}
												alt='Arrow Icon'
												className='w-5 h-5 ml-2'
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
					onClick={() => openModal(data?.files || [])}
				>
					Прикрепленные файлы
				</button>
			</div>
			<Modal
				selectedAttachedFiles={selectedAttachedFiles}
				closeModal={closeModal}
			/>
		</div>
	)
}
