import WhyChooseUs from "@/app/_components/About/WhyChooseUs"
import WhatWeDo from "@/app/_components/About/WhatWeDo"
import Partners from "@/app/_components/About/Partners"
import Banner from "@/app/_components/About/Banner";
import Certificates from "@/app/_components/Main/Sertificates"
import Application from "@/app/_components/Main/Application";

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
