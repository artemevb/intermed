import Application from "../_components/Main/Application";
import EventsPages from "../_components/Events/EventsPages";

export default function page() {
    return (
        <div >
            <EventsPages />
            <Application />
        </div>
    );
}