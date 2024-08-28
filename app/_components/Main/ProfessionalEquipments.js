"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Catalogitem from "../Catalog/Catalogitem";

const EquipmentCarousel = ({ products }) => {
  const [filteredData, setFilteredData] = useState(products.data);
  const [selectedCategory, setSelectedCategory] = useState("Все товары");

  // Handle category filtering
  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "Все товары") {
      setFilteredData(products.data);
    } else if (category === "Новинки") {
      setFilteredData(products.data.filter((item) => item.new));
    } else if (category === "Акции") {
      setFilteredData(products.data.filter((item) => item.popular));
    }
  };

  // Slick Slider settings
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
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-2 mdx:gap-6 px-2 mt-6 mdx:mt-9">
      <h2 className="text-4xl max-mdx:text-2xl font-semibold">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
      <div className="w-full items-start flex flex-col gap-2">
        <div className="flex flex-col relative">
          <div className="overflow-x-scroll flex gap-4 lg:gap-6 scrollbar-hide font-semibold touch-auto">
            {["Все товары", "Новинки", "Акции"].map((category) => (
              <button
                onClick={() => handleFilter(category)}
                key={category}
                className={`z-10 w-auto text-lg transition-text font-semibold ${
                  selectedCategory === category
                    ? "text-redMain border-b-2 border-b-redMain"
                    : "text-neutral-400"
                }`}
              >
                <h3 className="my-2 whitespace-nowrap">{category}</h3>
              </button>
            ))}
          </div>
          <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
        </div>
        <div className="w-full px-2">
          <Slider {...settings} className="h-auto flex">
            {filteredData.map((item) => (
              <div key={item.id} className="p-1 xl:p-2">
                <Catalogitem
                  new={item.new}
                  sale={item.sale}
                  image={item.gallery[0]?.url}
                  title={item.name}
                  description={item.shortDescription}
                  price={item.originalPrice}
                  slug={item.slug}
                  discount={item.discount}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex w-full justify-center max-mdx:mt-[20px]">
        <Link href="/categories" className="border px-12 py-3 hover:bg-[#E94B50] hover:text-[#fff] font-bold">
          Все товары
        </Link>
      </div>
    </section>
  );
};

export default EquipmentCarousel;
