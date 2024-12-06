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
				'Cache-Control': 'no-cache'
			},
		})

		eventData = response.data.data
	} catch (error) {
		console.error('Failed to fetch product data:', error)
	}



	return (
		<div>
			<EventsPages Data={eventData} />
			<Application />
			<a href="https://med-trip.uz/" className="visually-hidden"></a>
			<a href="https://med-trip.uz/en/tours" className="visually-hidden"></a>
			<a href="https://med-trip.uz/en/sanatoriums" className="visually-hidden"></a>
		</div>
	)
}
