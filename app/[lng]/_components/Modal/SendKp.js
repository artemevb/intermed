"use client";
import Image from "next/image";
import close from "@/public/svg/close.svg";
import { useState } from "react";
import { useTranslation } from "../../../i18n/client";
import { useLanguage } from "../../../i18n/locales/LanguageContext";
import QuestionSent from '@/app/[lng]/_components/Modal/QuestionSent';

export default function SignUpForEvent({ product, closeModal }) {
    const lng = useLanguage();
    const { t } = useTranslation(lng, "modal-send-kp");

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "", // Добавлено поле city
        proposal: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const prepareProductLinks = () => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        return storedFavorites.map((item) => ({
            name: item.title,
            link: `https://imed.uz/products/${item.slug}`,
        }));
    };

    const handleSendClick = async (e) => {
        e.preventDefault();
        const productLinks = product ? [
            {
                name: product.name,
                link: `https://imed.uz/products/${product.slug}`,
            },
        ] : prepareProductLinks();

        const requestBody = {
            name: form.name,
            phone: form.phone,
            mail: form.email,
            city: form.city, // Добавляем city в запрос
            message: form.proposal,
            productLink: productLinks,
        };

        try {
            const response = await fetch("https://imed.uz/api/v1/commercial-offer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    city: "",
                    proposal: "",
                });
                setIsSubmitted(true);
            } else {
                console.error("Error sending commercial offer");
            }
        } catch (error) {
            console.error("Error sending commercial offer", error);
        }
    };

    const closeQuestionSentModal = () => {
        setIsSubmitted(false);
        closeModal(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
                <div className="bg-white p-6 shadow-md w-[90%] max-w-[420px] relative">
                    <button
                        className="absolute w-[23px] xl:w-[25px] top-4 right-3 xl:right-6 text-black"
                        onClick={() => closeModal(false)}
                    >
                        <Image
                            src={close}
                            width={100}
                            height={100}
                            alt="close Icon"
                            quality={100}
                            className="h-full w-full"
                        />
                    </button>
                    <h2 className="text-[22px] font-semibold mb-2 mdl:text-[26px] xl:text-[28px] xl:mb-4">
                        {t("send-cp")}
                    </h2>
                    <p className="text-[14px] text-gray-500 mb-6 w-[290px] mdx:text-[16px] mdl:text-[17px] xl:text-[18px]">
                        {t("connection")}
                    </p>
                    <form onSubmit={handleSendClick}>
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
                            <label
                                htmlFor="name"
                                className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.name ? "hidden" : ""} peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}
                            >
                                {t("fio")}
                                <span className="text-red-500">*</span>
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
                            <label
                                htmlFor="phone"
                                className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.phone ? "hidden" : ""} peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}
                            >
                                {t("phone-number")}
                                <span className="text-red-500">*</span>
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
                            <label
                                htmlFor="email"
                                className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.email ? "hidden" : ""} peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}
                            >
                                E-mail
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="city"
                                className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.city ? "hidden" : ""} peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}
                            >
                                {t("city")}
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="proposal"
                                name="proposal"
                                value={form.proposal}
                                onChange={handleChange}
                                className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="proposal"
                                className={`absolute left-0 top-3 text-gray-500 transition-all duration-200 ease-in-out ${form.proposal ? "hidden" : ""} peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-[#E31E24]`}
                            >
                                {t("your-proposal")}
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white font-semibold"
                        >
                            {t("send")}
                        </button>
                    </form>
                </div>
            </div>
            {isSubmitted && <QuestionSent closeModal={closeQuestionSentModal} />}
        </>
    );
}
