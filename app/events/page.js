import Application from "@/app/_components/Main/Application";
import EventsPages from "@/app/_components/Events/EventsPages";

export default function page() {
    return (
        <div >
            <EventsPages />
            <Application />
        </div>
    );
}