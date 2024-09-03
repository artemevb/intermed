import Application from "../../_components/Main/Application";
import EventsSlider from "../../_components/Events/EventsSlider";
import EventsSignUp from "../../_components/Events/EventsSignUp";
import AboutEvent from "../../_components/Events/AboutEvent";
import MoreInfo from "../../_components/Events/MoreInfo";
import axios from 'axios'

export default async function page({params}) {

    const { slug , lng } = params

	let eventData = null

	// GET PRODUCT WITH SLUG
	try {
		const response = await axios.get(
			`http://213.230.91.55:8130/v1/event/get/${slug}` ,
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

    console.log(eventData , "Event data:")
    return (
        <div >
            <EventsSignUp  title={eventData?.name}  photo={eventData?.photo.url}/>
            <AboutEvent Data={eventData} />
            <MoreInfo  Data={eventData}/>
            <EventsSlider />
            <Application />
        </div>
    );
}