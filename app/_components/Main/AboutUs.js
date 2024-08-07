import Link from "next/link";
import Image from "next/image";
import Imed from "@/public/images/main/intermed-about.png";

export default function AboutUs() {
  return (
    <div className="w-full h-auto max-w-[1440px] px-2 flex max-xl:flex-col gap-12 max-lg:gap-8 mx-auto xl:h-[600px]">
      <h2 className="text-2xl font-medium w-full xl:hidden">
        <span className="text-redMain">«INTERMED INNOVATION» </span>
        НАДЕЖНЫЙ ПОСТАВЩИК МЕДИЦИНСКОГО ОБОРУДОВАНИЯ ОТ ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ
      </h2>
      <Image
        src={Imed}
        width={1000}
        height={1000}
        alt="Intermed Main Photo"
        className="w-full xl:w-[450px] 2xl:w-[500px] object-cover xl:h-full"
      />
      <div className="h-full xl:w-2/3 flex flex-col justify-between gap-8">
        <h2 className="text-4xl font-medium w-full max-xl:hidden 2xl:max-w-[650px]">
          <span className="text-redMain">«INTERMED INNOVATION» </span>
          НАДЕЖНЫЙ ПОСТАВЩИК МЕДЕЦИНСКОГО ОБОРУДОВАНИЯ ОТ ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ
        </h2>
        <p className="text-neutral-400 w-full 2xl:max-w-[650px]">
        Торгово-медицинская компания СП ООО «INTERMED INNOVATION» является надежным поставщиком медицинского оборудования от ведущих производителей. Компания занимается поставкой различного диагностического оборудования (УЗИ аппараты, анализаторы, рентгены, МРТ, КТ) а так же стоматологических установок, по всей территории Республики Узбекистан.
        </p>
        <div className="grid gap-4 grid-4 grid-cols-2 grid-rows-2">
          <div className="border px-6 flex justify-center flex-col max-2xl:py-2 max-xl:py-6 py-4">
            <h3 className="text-redMain text-2xl font-bold">13+ лет</h3>
            <p className="text-neutral-400">на рынке</p>
          </div>
          <div className="border px-6 flex justify-center flex-col 2xl:py-2">
            <h3 className="text-redMain text-2xl font-bold">12 000</h3>
            <p className="text-neutral-400">удачных продаж</p>
          </div>
          <div className="border px-6 flex justify-center flex-col 2xl:py-2">
            <h3 className="text-redMain text-2xl font-bold">20+</h3>
            <p className="text-neutral-400">поставщиков</p>
          </div>
          <div className="border px-6 flex justify-center flex-col 2xl:py-2">
            <h3 className="text-redMain text-2xl font-bold">2000+</h3>
            <p className="text-neutral-400">довольных клиентов</p>
          </div>
        </div>
      </div>
    </div>
  );
}
