import Application from "@/app/_components/Main/Application";
import TitleMain from "@/app/_components/Clients/TitleMain";
import Gallery from "@/app/_components/Clients/Gallery";

export default function MainClients() {
    return (
        <div>
            <TitleMain />
            <Gallery />
            <Application />
        </div>
    );
}