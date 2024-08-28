import Image from "next/image";
import close from "@/public/svg/close.svg";
import { useState } from "react";

export default function SignUpForEvent({ closeModal }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

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
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
                    />
                </button>
                <h2 className="text-xl font-semibold mb-4 mdx:text-[22px] 2xl:text-[24px] xl:max-w-[213px]">Записаться на мероприятие</h2>
                <p className="text-[14px] mdx:text-[15px] xl:text-[16px] text-gray-500 mb-6 max-w-[213px]">Менеджеры свяжутся с вами чтобы подтвердить запись</p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="block w-full py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] mdl:text-[20px]"
                            placeholder="ФИО"
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
                            placeholder="Номер телефона"
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
                            className="block w-full  py-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#E31E24] mdl:text-[20px]"
                            placeholder="E-mail"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white font-semibold"
                    >
                        Записаться
                    </button>
                </form>
            </div>
        </div>
    );
}
