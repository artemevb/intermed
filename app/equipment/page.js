import Application from "@/app/_components/Main/Application";
import Contacts from "@/app/_components/Main/Contacts";
import Banner from "@/app/_components/Equipment/BannerEquipment";

export default function Equipment() {
    return (
        <div className="w-full bg-white pt-[30px] flex flex-col gap-32">
            <Banner/>
            <Contacts />
            <Application />
        </div>
    );
}