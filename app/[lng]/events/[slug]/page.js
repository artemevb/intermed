import axios from 'axios'
import AboutEvent from '../../_components/Events/AboutEvent'
import EventsSignUp from '../../_components/Events/EventsSignUp'
import EventsSlider from '../../_components/Events/EventsSlider'
import MoreInfo from '../../_components/Events/MoreInfo'
import Application from '../../_components/Main/Application'

export default async function page({ params }) {
	const { slug, lng } = params

	let eventData = null

	// GET PRODUCT WITH SLUG
	try {
		const response = await axios.get(
			`https://imed.uz/api/v1/event/get/${slug}`,
			{
				headers: {
					'Accept-Language': lng,
				},
			}
		)

		eventData = response.data.data
	} catch (error) {
		console.error('Failed to fetch product data:', error)
	}

	return (
		<div>
			<EventsSignUp title={eventData?.name} photo={eventData?.photo.url} />
			<AboutEvent Data={eventData} />
			<MoreInfo Data={eventData} />
			<EventsSlider />
			<Application />
		</div>
	)
}
