
import Title from "@/app/_components/Partners/Title.js";
import ListPartners from "@/app/_components/Partners/ListPartners.js";
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