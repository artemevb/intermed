"use client"
import Image from "next/image";
import close from "@/public/svg/close.svg";
import { useState } from "react";
import QuestionSent from '@/app/_components/Modal/QuestionSent';

export default function AskaQuestionModal({ closeModal }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        question: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setIsSubmitted(true);
    };

    const closeQuestionSentModal = () => {
        setIsSubmitted(false);
        closeModal();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 shadow-md w-[90%] max-w-[420px] relative">
                    <button
                        className="absolute w-[23px] xl:w-[25px] top-4 right-3 xl:right-6 text-black"
                        onClick={closeModal}
                    >
                        <Image
                            src={close}
                            width={100}
                            height={100}
                            alt="Icon"
                            className="h-full w-full"
                        />
                    </button>
                    <h2 className="text-[22px] font-semibold mb-2 mdl:text-[26px] xl:text-[28px] xl:mb-4">Задать вопрос</h2>
                    <p className="text-[14px] text-gray-500 mb-6 w-[290px] mdx:text-[16px] mdl:text-[17px] xl:text-[18px]">Менеджеры компании с радостью ответят на ваши вопросы</p>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name" className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.name ? 'hidden' : ''} peer-focus:opacity-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}>
                                ФИО<span className="text-red-500">*</span>
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="phone" className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.phone ? 'hidden' : ''} peer-focus:opacity-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}>
                                Номер телефона<span className="text-red-500">*</span>
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] peer"
                                placeholder=" "
                            />
                            <label htmlFor="email" className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.email ? 'hidden' : ''} peer-focus:opacity-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}>
                                E-mail
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="question"
                                name="question"
                                value={form.question}
                                onChange={handleChange}
                                className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] peer"
                                placeholder=" "
                            />
                            <label htmlFor="question" className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.question ? 'hidden' : ''} peer-focus:opacity-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}>
                                Ваш вопрос
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white font-semibold"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>

            {isSubmitted && <QuestionSent closeModal={closeQuestionSentModal} />}
        </>
    );
}