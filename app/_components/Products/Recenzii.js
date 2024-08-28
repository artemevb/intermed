'use client'
import { useState } from 'react'
import Image from 'next/image'


export default function Reviews({ reviews }) {
	const [showAll, setShowAll] = useState(false)
	const visibleReviews = showAll ? reviews : reviews.slice(0, 1)

	return (
		<div className='max-w-[1440px] mx-auto p-4'>
			<h2 className='uppercase text-[25px] font-semibold mdx:text-[25px]'>
				Рецензии от врачей
			</h2>
			{visibleReviews.map((review, index) => (
				<div key={index} className='bg-white p-6 mb-6'>
					<div className='flex items-center mb-4'>
						<Image
							src={review?.doctorPhoto.url || ''}
							alt='Doctor'
							width={60}
							height={60}
							className='rounded-full mr-4'
						/>
						<div>
							<h2 className='text-xl font-bold'>
								{review?.nameDoctor.ru || ''}
							</h2>
							<h3 className='text-md text-gray-400'>
								{review?.position.ru || ''}
							</h3>
						</div>
					</div>
					<p className='mb-4'>{review?.summary || ''}</p>
					<h4 className='text-lg font-semibold mb-2'>Основные преимущества</h4>
					<ul className='list-disc pl-5 mb-4'>
						{review.advantages && review.advantages.length > 0 && (
							<>
								<h4 className='text-lg font-semibold mb-2'>
									Основные преимущества
								</h4>
								<ul className='list-disc pl-5 mb-4'>
									{review.advantages.map((advantage, index) => (
										<li key={index}>{advantage}</li>
									))}
								</ul>
							</>
						)}
					</ul>
					<h4 className='text-lg font-semibold mb-2'>Недостатки</h4>
					<ul className='list-disc pl-5 mb-4'>
						{review.disadvantages && review.disadvantages.length > 0 && (
							<>
								<h4 className='text-lg font-semibold mb-2'>Недостатки</h4>
								<ul className='list-disc pl-5 mb-4'>
									{review.disadvantages.map((disadvantage, index) => (
										<li key={index}>{disadvantage.ru}</li>
									))}
								</ul>
							</>
						)}
					</ul>
					<h4 className='text-lg font-semibold mb-2'>Общий вывод</h4>
					<p>{review.conclusion}</p>
				</div>
			))}
			<div className='flex justify-center'>
				<button
					onClick={() => setShowAll(!showAll)}
					className='bg-[#E94B50] text-white py-3 px-[35px] mdx:px-[50px]'
				>
					{showAll ? 'Скрыть' : 'Показать все'}
				</button>
			</div>
		</div>
	)
}
