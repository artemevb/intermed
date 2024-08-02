"use client"
import Image from "next/image";
import { useState } from "react";
import licenses1 from "@/public/images/licenses/image1.png";
import licenses2 from "@/public/images/licenses/image2.png";
import close from "@/public/svg/close.svg";
import { Description } from "@headlessui/react";

const licenses = [
    {
        id: 1,
        imageSrc: licenses1,
        alt: "17th Tashkent international  healthcare exhibition",
        description: "С радостью сообщаем, что многопрофильный медицинский центр IMED стал победителем 17-й Ташкентской международной выставки здравоохранения, прошедшей с 20 по 23 июля 2024 года.Это престижное событие собрало лидеров медицинской индустрии со всего мира, представив новейшие достижения в области здравоохранения и медицины. IMED продемонстрировал высококачественное медицинское обслуживание, инновационные технологии и передовые методики лечения, что позволило центру завоевать признание жюри и участников выставки"
    },
    {
        id: 2,
        imageSrc: licenses1,
        alt: "17th Tashkent international  healthcare exhibition",
        description: "С радостью сообщаем, что многопрофильный медицинский центр IMED стал победителем 17-й Ташкентской международной выставки здравоохранения, прошедшей с 20 по 23 июля 2024 года.Это престижное событие собрало лидеров медицинской индустрии со всего мира, представив новейшие достижения в области здравоохранения и медицины. IMED продемонстрировал высококачественное медицинское обслуживание, инновационные технологии и передовые методики лечения, что позволило центру завоевать признание жюри и участников выставки"
    },
    {
        id: 3,
        imageSrc: licenses1,
        alt: "17th Tashkent international  healthcare exhibition",
        description: "С радостью сообщаем, что многопрофильный медицинский центр IMED стал победителем 17-й Ташкентской международной выставки здравоохранения, прошедшей с 20 по 23 июля 2024 года.Это престижное событие собрало лидеров медицинской индустрии со всего мира, представив новейшие достижения в области здравоохранения и медицины. IMED продемонстрировал высококачественное медицинское обслуживание, инновационные технологии и передовые методики лечения, что позволило центру завоевать признание жюри и участников выставки"
    },
    {
        id: 4,
        imageSrc: licenses2,
        alt: "17th Tashkent international  healthcare exhibition",
        description: "С радостью сообщаем, что многопрофильный медицинский центр IMED стал победителем 17-й Ташкентской международной выставки здравоохранения, прошедшей с 20 по 23 июля 2024 года.Это престижное событие собрало лидеров медицинской индустрии со всего мира, представив новейшие достижения в области здравоохранения и медицины. IMED продемонстрировал высококачественное медицинское обслуживание, инновационные технологии и передовые методики лечения, что позволило центру завоевать признание жюри и участников выставки"
    },
];

const Licenses = () => {
    const [selectedLicense, setSelectedLicense] = useState(null);

    const openModal = (license) => {
        setSelectedLicense(license);
    };

    const closeModal = () => {
        setSelectedLicense(null);
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-6 bg-white mb-[120px] mdl:mb-[150px]">
            <h2 className="text-[20px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold mb-6 mt-[40px] mdx:mt-[60px] xl:mt-[80px] uppercase">Награды и сертификаты</h2>
            <div className="grid grid-cols-1 gap-6 mdl:grid-cols-2 mdl:gap-3 xl:gap-5 xl:grid-cols-4">
                {licenses.map((item) => (
                    <div key={item.id} className="w-full h-auto border py-[45px] px-[50px] cursor-pointer" onClick={() => openModal(item)}>
                        <Image
                            src={item.imageSrc}
                            alt={item.alt}
                            layout="responsive"
                            objectFit="contain"
                            className='w-full h-full '
                        />
                    </div>
                ))}
            </div>

            {selectedLicense && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto scrollbar-hide">
                    <div className="bg-white p-4 rounded-md max-w-[500px] w-full relative">
                        <button onClick={closeModal} className="absolute top-2 right-2">
                            <Image src={close} alt="close" width={24} height={24} />
                        </button>
                        <div className="flex flex-col items-center border py-[45px] px-[50px]">
                            <Image
                                src={selectedLicense.imageSrc}
                                alt={selectedLicense.alt}
                                layout="responsive"
                                objectFit="contain"
                                className='w-full h-full '
                            />
                            
                        </div>
                        <h3 className="text-xl font-semibold mt-4">{selectedLicense.alt}</h3>
                        <p className="text-xl font-semibold mt-4">{selectedLicense.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Licenses;
