"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import eventImage1 from "@/public/images/news/events/1.png";
import eventImage2 from "@/public/images/news/events/2.png";
import eventImage3 from "@/public/images/news/events/3.png";
import eventImage4 from "@/public/images/news/events/4.png";

import GreenArrow from "@/app/_components/Buttons/GreenArrow";
import EventCard from "@/app/_components/Events/EventCard";

export default function Events() {
  const data = [
    {
      title: "Презентация Новейших Технологий в Медицине: Ташкент 2024",
      imageSrc: eventImage1,
      link: "#",
    },
    {
      title: "Семинар по Современным Медицинским Технологиям: От Теории к Практике",
      imageSrc: eventImage2,
      link: "#",
    },
    {
      title: "Презентация Новейших Технологий в Медицине: Ташкент 2024",
      imageSrc: eventImage3,
      link: "#",
    },
    {
      title: "Семинар по Современным Медицинским Технологиям: От Теории к Практике",
      imageSrc: eventImage4,
      link: "#",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-1 px-2">
      <Link href={`/events/`}>
      <h2 className="text-3xl max-mdx:text-2xl font-bold flex items-center mt-[40px] uppercase">
        Мероприятия
        <GreenArrow />
      </h2>
      </Link>
      <div className="w-full">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="p-2 mt-4">
              <EventCard title={item.title} imageSrc={item.imageSrc} link={item.link} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
