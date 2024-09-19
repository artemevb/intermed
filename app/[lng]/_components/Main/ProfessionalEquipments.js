'use client'

import axios from 'axios'
import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import Catalogitem from '../Catalog/Catalogitem'

const EquipmentCarousel = () => {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'popular-products-main')
	const [filteredData, setFilteredData] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [products, setProducts] = useState([])
	const [isMounted, setIsMounted] = useState(false)

	const getAllProducts = useCallback(async () => {
		try {
			const response = await axios.get('https://imed.uz/api/v1/product?popular=true', {
				headers: {
					'Accept-Language': lng,
				},
			});
			setProducts(response.data.data);
			setFilteredData(response.data.data); // Initialize with all popular products
		} catch (error) {
			console.error('Error fetching products:', error.message);
		}
	}, [lng]);
	

	useEffect(() => {
		getAllProducts()
	}, [lng, getAllProducts]) // Only triggers when `lng` changes

	useEffect(() => {
		setIsMounted(true)
	}, [])

	// Handle category filtering
	const handleFilter = useCallback(
		category => {
			setSelectedCategory(category);
			if (category === 'all') {
				setFilteredData(products);
			} else if (category === 'new') {
				setFilteredData(products.filter(item => item.new));
			} else if (category === 'sale') {
				setFilteredData(products.filter(item => item.sale));
			} else if (category === 'popular') {
				setFilteredData(products.filter(item => item.popular));
			}
		},
		[products]
	);
	

	const settings = useMemo(
		() => ({
			arrows: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
					},
				},
			],
		}),
		[]
	)

	const categories = useMemo(
		() => [
			{
				title: t('all_products'),
				slug: 'all',
			},
			{
				title: t('new_arrivals'),
				slug: 'new',
			},
			{
				title: t('promotions'),
				slug: 'sale',
			},
		],
		[t]
	)

	return (
		<section className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 mt-6 mdx:mt-9'>
			{isMounted && (
				<div className='flex flex-col gap-2 mdx:gap-6'>
					<h2 className='text-4xl max-mdx:text-2xl font-semibold uppercase'>
						{t('popular-products')}
					</h2>
					<div className='w-full items-start flex flex-col gap-2 '>
						<div className='inline-flex flex-col relative'>
							<div className='flex gap-4 lg:gap-6 font-semibold touch-auto overflow-x-scroll scrollbar-hide relative'>
								{categories.map((item, index) => (
									<button
										onClick={() => handleFilter(item.slug)}
										key={index}
										className={`z-10 w-auto text-[16px] mdx:text-[20px] transition-text font-semibold ${selectedCategory === item.slug
											? 'text-redMain border-b-[3px] border-b-redMain'
											: 'text-neutral-400'
											}`}
									>
										<h3 className='my-2 whitespace-nowrap'>{item.title}</h3>
									</button>
								))}
							</div>
							<hr className='absolute bottom-0 left-0 w-full border-t border-[#EEE]' />
						</div>

						<div className='w-full px-2'>
							{filteredData.length > 1 ? (
								<Slider {...settings} className='h-auto flex'>
									{filteredData.map(item => (
										<div key={item.id} className='p-1 xl:p-2'>
											<Catalogitem
												new={item.new}
												sale={item.sale}
												image={item.gallery[0]?.url}
												title={item.name}
												description={item.shortDescription}
												price={item.originalPrice}
												slug={item.slug}
												discount={item.discount}
											/>
										</div>
									))}
								</Slider>
							) : (
								// Центрирование одного продукта
								<div className='flex justify-center items-center'>
									{filteredData.map(item => (
										<div key={item.id} className='max-w-[600px] p-1 xl:p-2'>
											<Catalogitem
												new={item.new}
												sale={item.sale}
												image={item.gallery[0]?.url}
												title={item.name}
												description={item.shortDescription}
												price={item.originalPrice}
												slug={item.slug}
												discount={item.discount}
											/>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
					<div className='flex w-full justify-center max-mdx:mt-[20px]'>
						<Link
							href={`/${lng}/categories`}
							className='border px-12 py-3 hover:bg-[#E94B50] hover:text-[#fff] font-bold'
						>
							{t('more-products')}
						</Link>
					</div>
				</div>
			)}
		</section>
	)
}

export default EquipmentCarousel
