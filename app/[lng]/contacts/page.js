import Map from "../_components/Contacts/Map";
import Application from "../_components/Main/Application";
import Representatives from "../_components/Contacts/Representatives";

export default function page() {
    return (
        <div className="w-full bg-white flex flex-col gap-23 ">
            <Map />
            <Representatives />
            <Application />
        </div>
    );
}