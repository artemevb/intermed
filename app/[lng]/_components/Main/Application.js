"use client";
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is imported
import QuestionSent from '@/app/[lng]/_components/Modal/QuestionSent';

export default function ContAddress({ lng, closeModal }) {
    const { t } = useTranslation(lng, 'application-main');
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const [isSubmitted, setIsSubmitted] = useState(false);


    // Modify field names to match the structure from the image
    const [values, setValues] = useState({
        name: "", // Full name is now 'name'
        phone: "", // Phone number is now 'phone'
        mail: "", // Email is now 'mail'
        message: "", // Question is now 'message'
    });

    const [focusedInput, setFocusedInput] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validateInput = (name, value) => {
        if (name === "name") {
            return value.length >= 3
                ? { isValid: true, message: t('correct') }
                : { isValid: false, message: t('enter_full_name') };
        } else if (name === "phone") {
            const phoneRegex =
                /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
            return phoneRegex.test(value)
                ? { isValid: true, message: t('correct') }
                : { isValid: false, message: t('enter_valid_phone_number') };
        } else if (name === "mail") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value)
                ? { isValid: true, message: t('correct') }
                : { isValid: false, message: t('enter_valid_email') };
        }
        return { isValid: true, message: "" };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone, mail, message } = values;
        if (!name || !phone || !mail || !message) {
            return;
        }

        try {
            const response = await axios.post("https://imed.uz/api/v1/application", values);
            if (response.status === 200) {
                setIsSubmitted(true);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };


    const closeQuestionSentModal = () => {
        setIsSubmitted(false);
        closeModal();
    };

    return (
        <>
            <div className="bg-contactBg p-4 pb-9 mdx:px-[40px] lg:py-[40px] xl:px-[80px] 2xl:px-[120px] xl:py-[80px]">
                {isMounted && (
                    <div className="flex max-xl:flex-col gap-12 max-lg:gap-8 mx-auto w-full h-auto max-w-[1440px] 5xl:max-w-[2000px]">
                        <div className="lg:flex lg:flex-row lg:justify-between w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto">
                            <h3 className="text-[25px] text-[#fff] mdx:font-semibold mdx:text-[32px] mdl:text-[40px] uppercase pt-[20px] pb-[17px] mdx:pt-[30px] mdx:pb-[30px] 3xl:text-[45px] xl:pt-0 lg:leading-[55px]">
                                {t('questions')}
                                <br />
                                {t('contact')}
                            </h3>
                            <form className="flex flex-col gap-9 w-full max-lg:max-w-full max-w-[350px] 3xl:mr-[5%] 4xl:mr-[10%]" onSubmit={handleSubmit}>
                                {["name", "phone", "mail", "message"].map((field) => (
                                    <div className="relative" key={field}>
                                        <input
                                            type={field === "mail" ? "email" : "text"}
                                            name={field}
                                            value={values[field]}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedInput(field)}
                                            onBlur={() => setFocusedInput(null)}
                                            className={`block w-full px-3 py-2 bg-contactBg text-white placeholder-transparent focus:outline-none border-b-2 ${focusedInput === field
                                                ? validateInput(field, values[field]).isValid
                                                    ? "border-[#E1E1E1]"
                                                    : "border-[#E1E1E1]"
                                                : "border-[#E1E1E1]"
                                                }`}
                                            placeholder={t(
                                                field === "name"
                                                    ? "full-name"
                                                    : field === "phone"
                                                        ? "telephone-number"
                                                        : field === "mail"
                                                            ? "E-mail"
                                                            : "your-question"
                                            )}
                                        />

                                        <label
                                            htmlFor={field}
                                            className={`absolute transition-all text-[16px] mdx:text-[19px] ${focusedInput === field || values[field]
                                                ? "-top-4 text-xs"
                                                : "top-3 text-sm"
                                                } ${focusedInput === field
                                                    ? validateInput(field, values[field]).isValid
                                                        ? "text-white"
                                                        : "text-white"
                                                    : "text-white"
                                                } cursor-text`}
                                            onClick={() => document.getElementsByName(field)[0].focus()}
                                        >
                                            {focusedInput === field && values[field].length > 0
                                                ? validateInput(field, values[field]).message
                                                : field === "name"
                                                    ? t('info') + "*"
                                                    : field === "phone"
                                                        ? t('telephone-number') + "*"
                                                        : field === "mail"
                                                            ? "E-mail"
                                                            : t('your-question')}
                                        </label>
                                    </div>
                                ))}
                                <div>
                                    <button
                                        type="submit"
                                        className="py-3 w-full mdx:w-auto mdx:px-12 text-[14px] text-contactBg bg-white font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white xl:w-[224px] xl:text-[15px] xl:py-4"
                                    >
                                        {t('send')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            {isSubmitted && <QuestionSent closeModal={closeQuestionSentModal} />}
        </>
    );
}
