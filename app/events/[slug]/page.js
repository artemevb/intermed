import Application from "@/app/_components/Main/Application";
import EventsSlider from "@/app/_components/Events/EventsSlider";
import EventsSignUp from "@/app/_components/Events/EventsSignUp";
import AboutEvent from "@/app/_components/Events/AboutEvent";
import MoreInfo from "@/app/_components/Events/MoreInfo";

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