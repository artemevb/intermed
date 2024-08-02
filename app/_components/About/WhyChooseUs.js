import React from 'react';

export default function WhatWeDo() {
    const services = [
        {
            title: "Выезд на место",
            description: "По всему Узбекистану",
            highlight: false,
        },
        {
            title: "Сервисное обслуживание",
            description: "Установка и обучение с выездом на место",
            highlight: false,
        },
        {
            title: "Гарантия качества",
            description: "Весь товар сертифицирован, услуги лицензированы",
            highlight: false,
        },
        {
            title: "",
            description: "Нам доверяют более 2000 медицинских учреждений по всей Республике Узбекистан",
            highlight: true,
        },
    ];

    return (
        <>
            <div className="max-w-[1440px] mx-auto px-3">
            <div className="text-[25px] mdx:text-[36px] xl:text-[40px] px-2 mb-4">ПОЧЕМУ ВЫБИРАЮТ НАС ?</div>
            <div className="grid gap-4 mdl:grid-cols-2 2xl:grid-cols-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex ${service.highlight ? 'justify-center items-center' : 'flex-col'} h-[230px] slg:h-[265px] 2xl:h-[280px] p-6 mdl:p-6 slg:p-9 2xl:p-3 3xl:p-5 border  ${service.highlight ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                    >
                        {service.title && (
                            <div className="text-[25px] mdx:text-[27px] font-bold text-red-500 mb-4 mdl:mb-2 slg:mb-4 slg:text-[30px]">
                                {service.title.split(' ').map((word, i) => (
                                    <span key={i}>
                                        {word}
                                        {i === 0 && <br />}
                                        {i !== 0 && ' '}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="text-[18px] mdx:text-[21px] mdl:text-[22px] xl:text-[24px]">{service.description}</div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}