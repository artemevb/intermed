import Application from '../../_components/Main/Application'
import TechnicalSupport from '../../_components/Products/TechnicalSupport'
import axios from 'axios'

export default async function page({ params }) {
	const { slug, lng } = params

	let productData = null

	// GET PRODUCT WITH SLUG
	try {
		const response = await axios.get(`https://imed.uz/api/v1/product/${slug}`, {
			headers: {
				'Accept-Language': lng,
			},
		})

		productData = response.data.data
	} catch (error) {
		console.error('Failed to fetch product data:', error)
	}
	return (
		<div className='w-full bg-white flex flex-col'>
			<TechnicalSupport
				support={productData?.maintenance}
			/>
			<Application />
		</div>
	)
}
