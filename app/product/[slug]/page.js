import axios from 'axios'
import ProductInfo from '@/app/_components/Products/ProductInfo'
import AlsoTake from '@/app/_components/Products/AlsoTake'
import Similar from '@/app/_components/Products/Similar'
import Recenzii from '@/app/_components/Products/Recenzii'
import VideoReview from '@/app/_components/Products/VideoReview'
import Application from '@/app/_components/Main/Application'

// getServerSideProps replacement
export default async function Page({ params}) {
	const { slug } = params

	let productData = null

	try {
		const response = await axios.get(
			`http://213.230.91.55:8130/v1/product/${slug}` ,
			{
				headers: {
					'Accept-Language': 'ru',
				},
			}
		)
		
		productData = response.data
		console.log(productData)
	} catch (error) {
		console.error('Failed to fetch product data:', error)
	}

	return (
		<div className='w-full bg-white flex flex-col gap-56 pt-12 '>
			{productData && productData.data?.videos?.length > 0 ? (
				<VideoReview videos={productData.data.videos} />
			) : null}

			{productData && <ProductInfo productData={productData.data} />}

			{productData && productData.data?.reviews?.length > 0 ? (
				<Recenzii reviews={productData.data.reviews} />
			) : null}
			<AlsoTake />
			<Similar />
			<Application />
		</div>
	)
}
