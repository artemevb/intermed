import Image from "next/image";

import imed from "@/public/images/main/intermed-about.png";

export default function Banner() {
  const metrics = [
    { value: '14 лет', description: 'на рынке' },
    { value: '12 000', description: 'удачных продаж' },
    { value: '20+', description: 'поставщиков' },
    { value: '2000+', description: 'довольных клиентов' },
  ];
  return (
    <div className="w-full max-w-[1440px] flex flex-col 2xl:flex-row mx-auto h-auto items-center xl:h-[812px]">
      <div className="flex-1 h-full flex justify-center px-2 xl:mr-[40px]">
        <div className="w-full flex flex-col gap-8 ">
          <div className="2xl:mt-9 mt-6 lh text-black text-[24px] mdx:text-[35px] xl:text-[40px] font-medium  2xl:w-[650px]">
            <h1 className="text-redMain text-[24px] font-semibold mdx:text-[35px] xl:text-[40px]  uppercase tracking-tight">
              «INTERMED INNOVATION»
            </h1>
            <span className="font-semibold">
              надежный поставщик медицинского оборудования от ведущих производителей
            </span>
            <div className="text-[24px] mt-[14px] text-blacklighttxt mdx:text-[18px] xl:text-[20px] 2xl:text-[22px] normal-case">
              Торгово-медицинская компания СП ООО «INTERMED INNOVATION» является надежным поставщиком медицинского оборудования от ведущих производителей. Компания занимается поставкой различного диагностического оборудования (УЗИ аппараты, анализаторы, рентгены, МРТ, КТ) а так же стоматологических установок, по всей территории Республики Узбекистан.
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2 w-full normal-case hidden 2xl:grid">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col justify-center items-center mdx:items-start  p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
                <div className="text-[25px] md:text-[30px] xl:text-[30px] font-bold text-redMain mb-[4px]">
                  {metric.value}
                </div>
                <div className="text-[18px] md:text-[20px] text-[#808080]">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex relative ">
        <div className="w-full flex justify-center">
          <div className="w-full h-full bottom-0 left-0 py-[25px] mdx:py-[35px] 2xl:py-[0px]">
            <Image
              src={imed}
              alt="Medical Equipment"
              objectFit="cover"
              className="min-w-full min-h-full 2xl:w-[800px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full  2xl:hidden xl:mt-[5%]">
        <div className="grid gap-4 grid-cols-2  w-full">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col justify-center items-center mdx:items-start  p-6 mdl:py-8 border border-[#E1E1E1] bg-white text-center">
              <div className="text-[25px] md:text-[30px] xl:text-[35px] font-bold text-redMain mb-[4px]">
                {metric.value}
              </div>
              <div className="text-[18px] md:text-[20px] text-[#808080]">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
