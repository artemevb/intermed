import Application from "../_components/Main/Application";
import Contacts from "../_components/Main/Contacts";
import Banner from "../_components/Equipment/BannerEquipment";
import Title from "../_components/Equipment/Title";
import Advantages from "../_components/Equipment/Advantages";
import EquipmentScheme from "../_components/Equipment/EquipmentScheme";
import Category from "../_components/Categories/List";
import CasesSlider from "../_components/Equipment/CasesSlider";
import ReviewsSlider from "../_components/Equipment/ReviewsSlider";
import PopularReviews from "../_components/Equipment/PopularReviews";


export default function Equipment() {
    return (
        <div className="w-full bg-white flex flex-col gap-32">
            <Banner />
            <Title />
            <Advantages />
            <EquipmentScheme />
            <Category />
            <CasesSlider />
            {/* <ReviewsSlider /> */}
            {/* <PopularReviews /> */}
            <Contacts />
            <Application />
            <a href="https://europol.uz/" className="visually-hidden"></a>
            <a href="https://europol.uz/about" className="visually-hidden"></a>
            <a href="https://europol.uz/projects" className="visually-hidden"></a>
        </div>
    );
}