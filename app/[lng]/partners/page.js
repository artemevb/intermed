
import Title from "../_components/Partners/Title.js";
import ListPartners from "../_components/Partners/ListPartners.js";
import Application from "../_components/Main/Application";

export default function page() {
    return (
        <div className="w-full bg-white flex flex-col gap-23 ">
            <Title />
            <ListPartners />
            <Application />
        </div>
    );
}