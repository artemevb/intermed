"use client"
import Image from 'next/image';
import partnerPhoto1 from "@/public/svg/reviews/Ellipse1.svg";
import partnerPhoto2 from "@/public/svg/reviews/Ellipse2.svg";
import partnerPhoto3 from "@/public/svg/reviews/Ellipse3.svg";
import Pagination from "@/app/_components/News/Pagination";
import { useState } from 'react';
import Modal from "@/app/_components/Modal/Reviews";

export default function Reviews() {
  const [selectedReviews, setSelectedReviews] = useState(null);
  const openModal = (Reviews) => {
    setSelectedReviews(Reviews);
  };

  const closeModal = () => {
    setSelectedReviews(null);
  };

  const data = [
    {
      id: 1,
      imageSrc: partnerPhoto1,
      title: "Fergana Premium Medical",
      date: "24.07.2024",
      description: "Уважаемая команда iMed! Клиника Fergana Premium Medical выражает искреннюю благодарность компании iMed за комплексное оснащение нашего медицинского учреждения. Благодаря вашему профессионализму и высококачественному оборудованию, наша клиника теперь обладает всем необходимым для предоставления первоклассных медицинских услуг."
    },
    {
      id: 2,
      imageSrc: partnerPhoto2,
      title: "Grand Medical Center",
      date: "15.06.2024",
      description: "Уважаемая команда iMed! Клиника Fergana Premium Medical выражает искреннюю благодарность компании iMed за комплексное оснащение нашего медицинского учреждения. Благодаря вашему профессионализму и высококачественному оборудованию, наша клиника теперь обладает всем необходимым для предоставления первоклассных медицинских услуг."
    },
    {
      id: 3,
      imageSrc: partnerPhoto3,
      title: "Novo Medics",
      date: "10.05.2024",
      description: "Уважаемая команда iMed! Клиника Fergana Premium Medical выражает искреннюю благодарность компании iMed за комплексное оснащение нашего медицинского учреждения. Благодаря вашему профессионализму и высококачественному оборудованию, наша клиника теперь обладает всем необходимым для предоставления первоклассных медицинских услуг."
    },
    // Add more reviews as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Количество отзывов на одной странице

  // Определим индексы отзывов, которые нужно отображать на текущей странице
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 ">
      <div className='mx-[10px] 3xl:mx-0'>
        <h2 className="text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold uppercase pb-[15px]">Отзывы</h2>
        <div className="w-full grid gap-4 grid-cols-1 xl:grid-cols-2 h-auto">
          {currentItems.map((item) => (
            <div key={item.id}>
              <div className="bg-white p-4 border-[1px] border-gray-200 mdx:p-0 xl:p-5 h-full xl:h-[370px] flex flex-col justify-between">
                <div className="mdx:p-8 xl:p-0">
                  <div className="flex justify-start items-center  gap-4 xl:gap-1 xl:items-start mb-4">
                    <div className="h-[60px] w-[60px] mdx:h-[70px] mdx:w-[70px] xl:h-[80px] xl:w-[80px] relative xl:mr-4">
                      <Image 
                      src={item.imageSrc}
                      width={1500}
                      height={1500}
                      alt={item.title} 
                      objectFit="contain" className="w-full h-auto" />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-semibold right mt-3 mdx:text-[20px]">{item.title}</h2>
                      <p className="text-gray-400 text-[14px] mdx:text-[18px]">{item.date}</p>
                    </div>
                  </div>
                  <p className="mb-4 mdx:text-[18px] xl:mt-5">{item.description}</p>
                </div>
                <button onClick={() => openModal(item)}>
                  <span className="text-[#E31E24] font-semibold hover:underline mdx:text-[18px] flex justify-end mdx:pb-5 pr-5 xl:pb-0 xl:pr-0">
                    Читать полностью
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
