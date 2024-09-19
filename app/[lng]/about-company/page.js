import WhyChooseUs from "../_components/About/WhyChooseUs"
import WhatWeDo from "../_components/About/WhatWeDo"
import Partners from "../_components/About/Partners"
import Banner from "../_components/About/Banner";
import Certificates from "../_components/Main/Sertificates"
import Application from "../_components/Main/Application";


export default function Home() {
  return (
    <main className="w-full bg-white flex flex-col gap-32  mx-auto">
      <div ><Banner /></div>
      <div ><WhatWeDo /></div>
      <div ><WhyChooseUs /></div>
      <div ><Certificates /></div>
      <div ><Partners /></div>
      <div><Application /></div>
    </main>
  );
}
