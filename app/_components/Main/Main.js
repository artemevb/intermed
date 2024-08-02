import Banner from "@/app/_components/Main/Banner";
import Equipments from "@/app/_components/Main/Equipments";
import Scheme from "@/app/_components/Main/Scheme";
import FullEquipment from "@/app/_components/Main/FullEquipment";
import ProfessionalEquipments from "@/app/_components/Main/ProfessionalEquipments";
import AboutUs from "@/app/_components/Main/AboutUs";
import Application from "./Application";
import Partners from "../About/Partners";
import News from "./News";
import Map from "../About/Map";
import Sertificates from "./Sertificates";
import Contacts from "./Contacts";

export default function Main() {
  return (
    <div className="w-full bg-white pt-12 flex flex-col gap-32">
      <Banner />
      <ProfessionalEquipments />
      <Equipments />
      <AboutUs />
      <FullEquipment />
      <Scheme />
      <Sertificates />
      <Partners />
      <News />
      <Contacts />
      <Application />
    </div>
  );
}
