import Application from "../../_components/Main/Application";
import EventsSlider from "../../_components/Events/EventsSlider";
import EventsSignUp from "../../_components/Events/EventsSignUp";
import AboutEvent from "../../_components/Events/AboutEvent";
import MoreInfo from "../../_components/Events/MoreInfo";

export default function page() {
    return (
        <div >
            <EventsSignUp />
            <AboutEvent />
            <MoreInfo />
            <EventsSlider />
            <Application />
        </div>
    );
}