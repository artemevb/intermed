import Map from "@/app/_components/Contacts/Map";
import Application from "@/app/_components/Main/Application";
import Representatives from "@/app/_components/Contacts/Representatives";

export default function page() {
    return (
        <div className="w-full bg-white flex flex-col gap-23 ">
            <Map />
            <Representatives />
            <Application />
        </div>
    );
}