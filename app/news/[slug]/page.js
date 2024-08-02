import Application from "@/app/_components/Main/Application";
import NewPages from "@/app/_components/NewsPages/NewsTitle";
import Share from "@/app/_components/NewsPages/Share";
import OtherNews from "@/app/_components/NewsPages/OtherNews";


export default function page() {
    return (
        <div >
            <NewPages />
            <Share />
            <OtherNews />
            <Application />
        </div>
    );
}