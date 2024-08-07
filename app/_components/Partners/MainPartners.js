"use client";
import Image from 'next/image';
import partnerPhoto from "@/public/images/aboutUs/partners/image3.png";
import globus from "@/public/images/aboutUs/partners/globus.svg";

export default function PartnerPage() {
    const partners = [
        {
            id: 1,
            imageSrc: partnerPhoto,
            imageIcons: globus,
            title: "MINDRAY",
            subtitle: "Shenzhen Mindray Bio-Medical Electronics Сo.,Ltd - один из мировых лидеров в производстве Ультразвукового диагностического, лабораторного оборудования и систем жизнеобеспечения (КНР)",
            description: `Является владельцем ряда ведущих мировых производителей медицинского оборудования, в том числе, таких как DATASCOPE (США) (мониторы пациента), ZONARE (США) разработчика и производителя ультразвукового диагностического оборудования компании, расположенного в силиконовой долине.

            На сегодняшний день продукция и услуги компании производятся персоналом более 10 000 человек, 1600 из которых инженерный состав из более 30 стран мира. Производственные площади составляют более 300 000 м². Продукция компании используется в учреждениях здравоохранения в более чем 190 странах мира.

            Mindray имеет 8 научных центров, три, из которых находятся в США. В 2006 году компания была включена в листинг Нью-Йоркской фондовой биржи. Ежегодные продажи медоборудования на мировых рынках превышают 1.5 млрд. долл. США, в том числе в США - 17%, Западная Европа - 15%

            Оборудование Mindray используют лучшие мировые медицинские центры США и Европы в том числе: MAYO clinic, Johns Hopkins, Cleveland clinic, Massachusetts general hospital, Royal Papworth hospital (Cambridge), CHU de Toulouse и т.д. В 2018 году вновь в листинг биржи Shenzhen где ее капитализация составила более 20 млрд. долл. США

            Mindray – это высочайшее мировое качество и технологии по разумным и приемлемым ценам`,
            link: "Mindray.com"
        },
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-10">
            {partners.map((partner) => (
                <div key={partner.id} className='mb-[60px] mdl:mb-[75px] xl:mb-[95px]'>
                    <div className='border-b pb-[25px]'>
                        <h1 className="text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold mb-2">{partner.title}</h1>

                        <h2 className="text-[12px] max-w-[820px] mdx:text-[16px] text-[#808080] font-semibold mb-4">{partner.subtitle}</h2>
                        <p className=" whitespace-pre-line mt-[20px] xl:mt-[40px] text-[15px] mdx:text-[18px] mdl:text-[18px]">{partner.description}</p>
                    </div>
                    <div className='flex flex-row justify-between items-center h-auto mt-[20px]'>
                        <button className='bg-[#FCE8E9] py-[15px] px-[20px] mdx:py-[20px] xl:px-[20px] h-full rounded-md flex items-center text-[14px] mdx:text-[16px] mdl:text-[18px] xl:text-[20px] text-[#E31E24]'>
                            <Image
                                src={partner.imageIcons}
                                alt={partner.title}
                                objectFit="contain"
                                className='mr-2'
                            />
                            {partner.link}
                        </button>
                        <div className="w-auto h-auto relative max-w-[110px] mdx:max-w-[224px]">
                            <Image
                                src={partner.imageSrc}
                                alt={partner.title}
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
