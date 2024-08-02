import Image from "next/image";
import imed from "@/public/images/main/scheme-im.png";

export default function WhatWeDo() {
    const services = [
        "Оперативная поставка оборудования со склада или под заказ",
        "Инсталляция оборудования и обучение персонала работе на нем поставка оборудования со склада или под заказ",
        "Проводим оперативную регистрацию нового оборудования",
        "Гарантийное и постгарантийное обслуживание поставляемого оборудования поставка оборудования со склада или под заказ",
        "Передача медицинского оборудования предоставляемого в лизинг"
    ];
    return (
        <div className="max-w-[1440px] px-2 mx-auto">
            <div class="max-w-md mx-auto bg-white   md:max-w-[1440px]">
                <div class="uppercase text-[25px] tracking-wide text-[#252324] font-semibold mdx:text-[35px] xl:hidden">Что мы делаем для<br /> наших клиентов?</div>
                <div class=" my-[25px] xl:flex xl:flex-row">
                    <div class=" xl:block xl:pr-[40px] 2xl:pr-[60px]">
                        <Image
                            src={imed}
                            alt="Medical Equipment"
                            objectFit="contain"
                            className="w-full h-full  xl:w-[940px] xl:h-[601px]"
                        />
                    </div>
                    <div >
                        <div class="hidden uppercase text-[25px] tracking-wide text-[#252324] font-semibold mdx:text-[35px] xl:block">Что мы делаем для<br /> наших клиентов?</div>
                        <div className="p-3  divide-y divide-gray-200 my-4 ">
                            {services.map((service, index) => (
                                <div key={index}>
                                    <p  className="my-4 text-[#252324] text-[16px] mdx:text-[20px] mdx:mr-[10%] 2xl:mr-[21%]">
                                        {service}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}