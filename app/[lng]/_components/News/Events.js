"use client";

import { useState , useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import GreenArrow from "../Buttons/GreenArrow";
import EventCard from "../Events/EventCard";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import axios from 'axios';

export default function Events() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'news-events')
  const [events , setEvents] = useState([])

  useEffect(() => {
		const getAllEvents = async () => {
			try {
				const response = await axios.get(
					`http://213.230.91.55:8130/v1/event/get-all`,
					{
						headers: { 'Accept-Language': lng },
					}
				)
				setEvents(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
				setEvents(null) // Reset state if fetching fails
			}
		}
		getAllEvents()
	}, [lng])


  


  

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
      <a href={`/${lng}/events/`}>
        <h2 className="text-3xl max-mdx:text-2xl font-bold flex items-center mt-[40px] uppercase">
          {t('title')}
          <GreenArrow />
        </h2>
      </a>
      <div className="w-full">
        <Slider {...settings}>
          {events?.map((item, index) => (
            <div key={index} className="p-2 mt-4">
              <EventCard title={item.name} imageSrc={item.photo.url} slug={item.slug} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
