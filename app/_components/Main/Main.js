import Banner from "@/app/_components/Main/Banner";
import Equipments from "@/app/_components/Main/Equipments";
import Scheme from "@/app/_components/Main/Scheme";
import FullEquipment from "@/app/_components/Main/FullEquipment";
import ProfessionalEquipments from "@/app/_components/Main/ProfessionalEquipments";
import AboutUs from "@/app/_components/Main/AboutUs";
import Application from "./Application";
import Partners from "../About/Partners";
import News from "./News";
import Sertificates from "./Sertificates";
import Contacts from "./Contacts";

export default function Main() {
  return (
    <div className="w-full bg-white pt-12 flex flex-col gap-36">
      <div className="flex w-full flex-col gap-12 lg:gap-36">
      <Banner />
      <ProfessionalEquipments />
      </div>
      <Equipments />
      <AboutUs />
      <Scheme />
      <FullEquipment />
      <Sertificates />
      <Partners />
      <News />
      <Contacts />
      <Application />
    </div>
  );
}
