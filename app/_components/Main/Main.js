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
import { getAllProducts , getAllCotegories } from '@/app/lib/api';

export default async function Main() {
  const products = await getAllProducts();
  const data = await getAllCotegories();
  
  return (
    <div className="w-full bg-white pt-12 flex flex-col gap-28 xl:gap-36">
      <div className="flex w-full flex-col gap-12 lg:gap-36">
      <Banner />
      <ProfessionalEquipments  products={products}/>
      </div>
      <Equipments data={data} />
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
