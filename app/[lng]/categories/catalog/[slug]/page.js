import axios from 'axios'
import List from '../../../_components/Catalog/List'
import Application from '../../../_components/Main/Application'

export default async function Page({ params, searchParams }) {
	const { slug, lng } = params;
	const catalogID = searchParams?.catalogId || null;

	// Fetch all categories
	const allCategories = await axios
		.get('https://imed.uz/api/v1/category', {
			headers: {
				'Accept-Language': lng,
			},
		})
		.then((res) => res.data.data)
		.catch(() => []);

	// **Отфильтруем категории, у которых active: true**
	const activeCategories = allCategories.filter((category) => category.active);

	// Fetch specific category by slug
	const data = await axios
		.get(`https://imed.uz/api/v1/category/${slug}`, {
			headers: {
				'Accept-Language': lng,
			},
		})
		.then((res) => res.data.data)
		.catch(() => []);

	return (
		<div className="w-full bg-white flex flex-col">
			<List
				Data={data}
				allCategories={activeCategories} // Передаем только активные категории
				selectedCatalogId={catalogID}
			/>
			<Application />
		</div>
	);
}

