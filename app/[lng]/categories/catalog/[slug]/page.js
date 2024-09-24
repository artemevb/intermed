import axios from 'axios'
import List from '../../../_components/Catalog/List'
import Application from '../../../_components/Main/Application'

// Server component for fetching data and rendering the page
export default async function Page({ params, searchParams }) {
	const { slug, lng } = params
	const catalogID = searchParams?.catalogId || null

	// Fetch all categories
	const allCategories = await axios
		.get('https://imed.uz/api/v1/category', {
			headers: {
				'Accept-Language': lng,
			},
		})
		.then(res => res.data.data)
		.catch(() => [])

	// Fetch specific category by slug
	const data = await axios
		.get(`https://imed.uz/api/v1/category/${slug}`, {
			headers: {
				'Accept-Language': lng,
			},
		})
		.then(res => res.data.data)
		.catch(() => [])


		const filteredAllCategories = allCategories.filter((i) => i.active)
		

	return (
		<div className='w-full bg-white flex flex-col'>
			<List
				Data={data}
				allCategories={allCategories}
				selectedCatalogId={catalogID}
			/>
			<Application />
		</div>
	)
}
