import Application from "@/app/_components/Main/Application";
import Contacts from "@/app/_components/Main/Contacts";
import Banner from "@/app/_components/Equipment/BannerEquipment";
import Title from "@/app/_components/Equipment/Title";
import Advantages from "@/app/_components/Equipment/Advantages";
import EquipmentScheme from "@/app/_components/Equipment/EquipmentScheme";
import Category from "@/app/_components/Equipment/Category";
import CasesSlider from "@/app/_components/Equipment/CasesSlider";
import ReviewsSlider from "@/app/_components/Equipment/ReviewsSlider";
import PopularReviews from "@/app/_components/Equipment/PopularReviews";


export default function Equipment() {
    return (
        <div className="w-full bg-white flex flex-col gap-32">
            <Banner/>
            <Title />
            <Advantages />
            <EquipmentScheme />
            <Category />
            <CasesSlider />
            <ReviewsSlider />
            <PopularReviews />
            <Contacts />
            <Application />
        </div>
    );
}