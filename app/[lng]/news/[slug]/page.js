import Application from "../../_components/Main/Application";
import NewPages from "../../_components/NewsPages/NewsTitle";
import Share from "../../_components/NewsPages/Share";
import OtherNews from "../../_components/NewsPages/OtherNews";


export default function page() {
    return (
        <div>
            <NewPages />
            <Share />
            <OtherNews />
            <Application />
        </div>
    );
}