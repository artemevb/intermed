"use client"
import Image from "next/image";
import close from "@/public/svg/close.svg";
import { useEffect } from "react";

const Modal = ({ selectedReview, closeModal }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth is zero-based
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedReview]);

  if (!selectedReview) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999] overflow-y-auto py-[40px]"
      onClick={closeModal}
    >
      <div
        className="bg-white max-w-[950px] w-full relative mx-4 my-4 flex flex-col overflow-y-auto max-h-full no-scrollbar h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeModal} className="absolute top-2 right-2 mdl:right-4 mdl:top-4">
          <Image quality={100} src={close} alt="close" width={24} height={24} />
        </button>
        <div className="p-4">
          <div className="flex justify-start items-center gap-4 xl:gap-1 xl:items-start mb-4">
            <div className="h-[60px] w-[60px] mdx:h-[70px] mdx:w-[70px] xl:h-[80px] xl:w-[80px] relative xl:mr-4">
              <Image
                src={selectedReview.logo?.url || '/default-logo.png'}
                width={1500}
                height={1500}
                quality={100}
                alt={selectedReview.clientName}
                objectFit="contain"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold mt-3 mdx:text-[20px]">{selectedReview.clientName}</h2>
              <p className="text-gray-400 text-[14px] mdx:text-[18px]">
                {formatDate(selectedReview.createdDate)}
              </p>
            </div>
          </div>
          <p className="mb-4 mdx:text-[18px]">{selectedReview.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
