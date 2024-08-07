import Application from "@/app/_components/Main/Application";
import PagesReviews from "@/app/_components/Reviews/PagesReviews";



export default function Equipment() {
    return (
        <div className="w-full bg-white pt-[30px] flex flex-col gap-32">
            <PagesReviews/>
            <Application />
        </div>
    );
}