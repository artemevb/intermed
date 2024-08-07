"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mindrayDC60 from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения
import mindraySV300 from "@/public/images/equipments/equip-uzi.png"; // Пример изображения, замените на ваши изображения
import cl900i from "@/public/images/equipments/equip-lab.png"; // Пример изображения, замените на ваши изображения
import mindrayUniBase from "@/public/images/equipments/equip-uzi.png"; // Пример изображения, замените на ваши изображения
import Link from "next/link";
import Catalogitem from "../Catalog/Catalogitem";

export default function AlsoTake() {
  const equipmentData = [
    {
      title: "MINDRAY DC 60 X-insight",
      description:
        "A high-end ultrasound scanner that allows for high-quality diagnostics",
      image: mindrayDC60,
      new: false,
      promotions: true,
      price: "2500000 y.e",
      sale: "-35%",
    },
    {
      title: "MINDRAY SV300",
      description:
        "Advanced solution for mechanical ventilation in clinical settings",
      image: mindraySV300,
      new: true,
      promotions: false,
    },
    {
      title: "CL-900i",
      description:
        "One of the smallest fully automated chemiluminescent immunoassay analyzers",
      image: cl900i,
      new: true,
      promotions: false,
      sale: "-5%",
    },
    {
      title: "MINDRAY UniBase 30",
      description:
        "Reliable and durable operating table at an affordable price",
      image: mindrayUniBase,
      new: true,
      promotions: false,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-8 px-2">
      <h2 className="text-3xl max-mdx:text-2xl font-bold">
        С ЭТИМ ТОВАРОМ ПОКУПАЮТ
      </h2>
      <div className="w-full">
        <div className="w-full px-4">
          <Slider {...settings} className="h-auto flex">
            {equipmentData.map((item, index) => (
              <div key={index} className="p-2">
                <Catalogitem
                  new={item.new}
                  sale={item.sale}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Link
          href="/categories"
          className="border border-greenView px-12 py-3 hover:bg-[#E94B50] transition-all duration-200 hover:text-[#FFF]"
        >
          Все товары
        </Link>
      </div>
    </section>
  );
}
