"use client";
import { useState } from 'react';
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

const faqData = [
  {
    question: "faq_question_1",
    answer: "faq_answer_1"
  },
  {
    question: "faq_question_2",
    answer: "faq_answer_2"
  },
  {
    question: "faq_question_3",
    answer: "faq_answer_3"
  },
  {
    question: "faq_question_4",
    answer: "faq_answer_4"
  },
  {
    question: "faq_question_5",
    answer: "faq_answer_5"
  },
  {
    question: "faq_question_6",
    answer: "faq_answer_6"
  },
  {
    question: "faq_question_7",
    answer: "faq_answer_7"
  },
  {
    question: "faq_question_8",
    answer: "faq_answer_8"
  }
];

const Arrow = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <path d="M9.41406 13.9165L17.2891 22.6665L25.1641 13.9165" stroke="#E31E24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FaqSection = () => {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'equipment-popular-reviews')

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase mb-6 ml-3">{t('faq_title')}</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full flex justify-between items-center text-left p-4  text-lg transition-all duration-700"
            onClick={() => toggleFAQ(index)}
          >
            <span className={`text-[20px] mdx:text-[24px] xl:text-[28px] ${openIndex === index ? 'text-[#E94B50]' : 'text-black transition-all duration-1000'}`}>{t(item.question)}</span>
            <span className="flex-shrink-0"><Arrow isOpen={openIndex === index} /></span>
          </button>
          <div className={`border-b border-[#E1E1E1] overflow-hidden transition-all duration-700 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
            <p className="p-4 text-[15px] mdx:text-[20px] ">{t(item.answer)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
