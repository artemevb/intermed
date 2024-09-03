import axios from 'axios'
import EventsPages from '../_components/Events/EventsPages'
import Application from '../_components/Main/Application'

export default async function page({ params }) {
	const { lng } = params

	let eventData = null

	// GET PRODUCT WITH SLUG
	try {
		const response = await axios.get(`https://imed.uz/api/v1/event/get-all`, {
			headers: {
				'Accept-Language': lng,
			},
		})

		eventData = response.data.data
	} catch (error) {
		console.error('Failed to fetch product data:', error)
	}

	console.log(eventData, 'Event data:')

	return (
		<div>
			<EventsPages Data={eventData} />
			<Application />
		</div>
	)
}
