"use client"
import Image from 'next/image';
import partnerPhoto1 from "@/public/svg/reviews/Ellipse1.svg";
import partnerPhoto2 from "@/public/svg/reviews/Ellipse2.svg";
import partnerPhoto3 from "@/public/svg/reviews/Ellipse3.svg";
import Pagination from "../News/Pagination";
import { useState } from 'react';
import Modal from "../Modal/Reviews";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import { useEffect } from 'react';
import axios from 'axios';



export default function Reviews() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'reviews-pages-reviews')
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedReviews, setSelectedReviews] = useState(null);
  const [reviews , setReviews] = useState([])
  const openModal = (Reviews) => {
    setSelectedReviews(Reviews);
  };

  const closeModal = () => {
    setSelectedReviews(null);
  };

  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`https://imed.uz/api/v1/review/get-all?page=${currentPage}`, {
                headers: { 'Accept-Language': lng },
            });
            setReviews(response.data.data);
        } catch (error) {
            console.error('Failed to fetch reviews:', error.message);
        }
    };

    fetchReviews();
}, [lng]);



// SANALATNI OLISH UCHUN 24.07.2024 kabi 
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth is zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

 

  const itemsPerPage = 6; 


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = reviews.slice(startIndex, endIndex);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  return (
    <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-8 ">
      <div className='mx-[10px] 3xl:mx-0'>
        <h2 className="text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold uppercase pb-[15px]">{t('reviews')}</h2>
        <div className="w-full grid gap-4 grid-cols-1 xl:grid-cols-2 h-auto">
          {currentItems.map((item) => (
            <div key={item.id}>
              <div className="bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[370px] flex flex-col justify-between">
                <div className="mdx:p-8 xl:p-0">
                  <div className="flex justify-start items-center  gap-4 xl:gap-1 xl:items-start mb-4">
                    <div className="h-[60px] w-[60px] mdx:h-[70px] mdx:w-[70px] xl:h-[80px] xl:w-[80px] relative xl:mr-4">
                      <Image
                        src={item.logo.url}
                        width={1500}
                        height={1500}
                        quality={100}
                        alt={item.title}
                        objectFit="contain" className="w-full h-auto" />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-semibold right mt-3 mdx:text-[20px]">{item.clientName}</h2>
                      <p className="text-gray-400 text-[14px] mdx:text-[18px]">
                      {formatDate(item.createdDate)}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 mdx:text-[18px] xl:mt-5 line-clamp-6">{item.comment}</p>
                </div>
                <button onClick={() => openModal(item)}>
                  <span className="text-[#E31E24] font-semibold hover:underline mdx:text-[18px] flex justify-end mdx:pb-5 pr-5 xl:pb-0 xl:pr-0">
                    {t('all-text')}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
      <Modal selectedReviews={selectedReviews} closeModal={closeModal} />
    </div>
  );
}
