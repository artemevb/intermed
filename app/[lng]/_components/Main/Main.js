"use client"
import Banner from "./Banner";
import Equipments from "./Equipments";
import Scheme from "./Scheme";
import FullEquipment from "./FullEquipment";
import ProfessionalEquipments from "./ProfessionalEquipments";
import AboutUs from "./AboutUs";
import Application from "./Application";
import Partners from "../About/Partners";
import News from "./News";
import Sertificates from "./Sertificates";
import Contacts from "./Contacts";

export default function Main() {

  const closeModal = () => {

  };

  return (
    <div className="w-full bg-white flex flex-col gap-28 xl:gap-36">
      <div className="flex w-full flex-col gap-12 lg:gap-[130px]">
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
      <Application closeModal={closeModal} />
    </div>
  );
}
