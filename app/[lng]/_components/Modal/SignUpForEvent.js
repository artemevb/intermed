"use client"
import Image from "next/image";
import close from "@/public/svg/close.svg";
import { useState } from "react";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import axios from 'axios';
import QuestionSent from '@/app/[lng]/_components/Modal/QuestionSent';

export default function SignUpForEvent({ closeModal, eventId }) {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'sign-up-for-event');

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isQuestionSentModalOpen, setIsQuestionSentModalOpen] = useState(false); // Новое состояние для модального окна подтверждения

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            console.log('Submitting form:', {
                name: form.name,
                phone: form.phone,
                email: form.email,
                event: {
                    id: eventId,
                },
            });

            await axios.post('https://imed.uz/api/v1/check-in', {
                name: form.name,
                phone: form.phone,
                email: form.email,
                event: {
                    id: eventId,
                },
            });

            // Успешная отправка - сначала открываем модальное окно подтверждения
            setLoading(false);
            setIsQuestionSentModalOpen(true); // Открываем модальное окно подтверждения

        } catch (error) {
            console.error('Error submitting form:', error.response || error.message);
            setError('Failed to sign up. Please try again.');
            setLoading(false);
        }
    };

    return (
        <>
            {!isQuestionSentModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
                    <div className="bg-white p-6 shadow-md w-[90%] max-w-[460px] relative">
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
                                quality={100}
                            />
                        </button>
                        <h2 className="text-xl font-semibold mb-4 mdx:text-[22px] 2xl:text-[24px] xl:max-w-[213px]">{t('sign-up-for-an-event')}</h2>
                        <p className="text-[14px] mdx:text-[15px] xl:text-[16px] text-gray-500 mb-6 max-w-[213px]">{t('connection')}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] mdl:text-[20px]"
                                    placeholder={t('placeholder-name')}
                                    required
                                />
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] mdl:text-[20px]"
                                    placeholder={t('placeholder-phone')}
                                    required
                                />
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] mdl:text-[20px]"
                                    placeholder="E-mail"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white font-semibold"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : t('sign-up')}
                            </button>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </form>
                    </div>
                </div>
            )}

            {/* Модальное окно подтверждения, которое открывается после успешной отправки */}
            {isQuestionSentModalOpen && (
                <QuestionSent closeModal={() => {
                    setIsQuestionSentModalOpen(false);
                    closeModal(); // Закрываем главное окно после закрытия окна подтверждения
                }} />
            )}
        </>
    );
}
