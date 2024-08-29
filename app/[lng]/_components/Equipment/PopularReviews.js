"use client";
import { useState } from 'react';

const faqData = [
  {
    question: "Какие виды медицинского оборудования вы предлагаете для оснащения клиник?",
    answer: "Мы предлагаем широкий ассортимент медицинского оборудования для оснащения клиник, включая диагностическое, терапевтическое и хирургическое оборудование. В наш каталог входят ультразвуковые аппараты, рентгеновские установки, эндоскопические системы, лабораторное оборудование, кардиомониторы, аппараты ИВЛ и многое другое. Мы также предоставляем консультации по выбору оборудования и его установке."
  },
  {
    question: "Какие услуги вы предоставляете в рамках комплексного оснащения клиник?",
    answer: "Add content here"
  },
  {
    question: "Как проходит процесс установки и наладки оборудования?",
    answer: "Add content here"
  },
  {
    question: "Предоставляете ли вы гарантийное и постгарантийное обслуживание?",
    answer: "Add content here"
  },
  {
    question: "Каковы сроки поставки оборудования?",
    answer: "Add content here"
  },
  {
    question: "Есть ли возможность индивидуального подбора оборудования под нужды конкретной клиники?",
    answer: "Add content here"
  },
  {
    question: "Можно ли получить консультацию по выбору оборудования?",
    answer: "Add content here"
  },
  {
    question: "Предоставляете ли вы услуги по обучению персонала работе с новым оборудованием?",
    answer: "Add content here"
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2">
      <h2 className="text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold mb-6 ml-3">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full flex justify-between items-center text-left p-4  text-lg transition-all duration-700"
            onClick={() => toggleFAQ(index)}
          >
            <span className={`text-[20px] mdx:text-[24px] xl:text-[28px] ${openIndex === index ? 'text-[#E94B50]' : 'text-black transition-all duration-1000'}`}>{item.question}</span>
            <span className="flex-shrink-0"><Arrow isOpen={openIndex === index} /></span>
          </button>
          <div className={`border-b border-[#E1E1E1] overflow-hidden transition-all duration-700 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
            <p className="p-4 text-[15px] mdx:text-[20px] ">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
