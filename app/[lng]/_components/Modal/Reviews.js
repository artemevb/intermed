"use client"
import Image from "next/image";
import close from "@/public/svg/close.svg";
import { useEffect } from "react";

const Modal = ({ selectedReviews, closeModal }) => {
    // Disable background scrolling when modal is open
    useEffect(() => {
      if (selectedReviews) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [selectedReviews]);
  
    if (!selectedReviews) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto py-[40px]"
        onClick={closeModal}
      >
        <div
          className="bg-white max-w-[950px] w-full relative mx-4 my-4 flex flex-col overflow-y-auto max-h-full no-scrollbar h-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeModal} className="absolute top-2 right-2 mdl:right-4 mdl:top-4">
            <Image src={close} alt="close" width={24} height={24} />
          </button>
          <div className="p-4">
            <div className="flex justify-start items-center gap-4 xl:gap-1 xl:items-start mb-4">
              <div className="h-[60px] w-[60px] mdx:h-[70px] mdx:w-[70px] xl:h-[80px] xl:w-[80px] relative xl:mr-4">
                <Image src={selectedReviews.imageSrc}                       
                width={1500}
                height={1500} 
                alt={selectedReviews.title} 
                objectFit="contain" 
                className="w-full h-auto" 
                />
              </div>
              <div>
                <h2 className="text-[18px] font-semibold right mt-3 mdx:text-[20px]">{selectedReviews.title}</h2>
                <p className="text-gray-400 text-[14px] mdx:text-[18px]">{selectedReviews.date}</p>
              </div>
            </div>
            <p className="mb-4 mdx:text-[18px]">{selectedReviews.description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;