import axios from 'axios'
import Application from '../../_components/Main/Application'
// import AlsoTake from '../../_components/Products/AlsoTake'
import ProductInfo from '../../_components/Products/ProductInfo'
import Recenzii from '../../_components/Products/Recenzii'
import Similar from '../../_components/Products/Similar'
import VideoReview from '../../_components/Products/VideoReview'

// getServerSideProps replacement
export default async function Page({ params }) {
	const { slug, lng } = params

	let productData = null

	// GET PRODUCT WITH SLUG
	try {
		const response = await axios.get(`https://imed.uz/api/v1/product/${slug}`, {
			headers: {
				'Accept-Language': lng,
			},
		})

		productData = response.data
	} catch (error) {
		console.error('Failed to fetch product data:', error)
	}
	let productsData = null

	// GET PRODUCT WITH SLUG
	try {
		const response = await axios.get(`https://imed.uz/api/v1/product`, {
			headers: {
				'Accept-Language': lng,
			},
		})

		productsData = response.data.data
	} catch (error) {
		console.error('Failed to fetch product data:', error)
	}

	return (
		<div className='w-full bg-white flex flex-col gap-[120px] mdx:gap-[150px] mdl:gap-[180px] 2xl:gap-[200px] pt-12 '>
			{productData && productData.data?.videos?.length > 0 ? (
				<VideoReview videos={productData.data.videos} />
			) : null}

			{productData && <ProductInfo productData={productData.data} />}

			{productData && productData.data?.reviews?.length > 0 ? (
				<Recenzii reviews={productData.data.reviews} />
			) : null}
			{/* <AlsoTake data={productsData} /> */}
			<Similar  data={productsData}/>
			<Application />
		</div>
	)
}
