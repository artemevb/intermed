"use client";
import { useState } from "react";



export default function ContAddress() {
    const [values, setValues] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        question: "",
    });

    const [focusedInput, setFocusedInput] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validateInput = (name, value) => {
        if (name === "fullName") {
            return value.length >= 3
                ? { isValid: true, message: "Правильно" }
                : { isValid: false, message: "Введите полное имя" };
        } else if (name === "phoneNumber") {
            const phoneRegex =
                /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
            return phoneRegex.test(value)
                ? { isValid: true, message: "Правильно" }
                : { isValid: false, message: "Введите правильный номер" };
        } else if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value)
                ? { isValid: true, message: "Правильно" }
                : { isValid: false, message: "Введите правильный email" };
        }
        return { isValid: true, message: "" };
    };
    return (
        <div className="max-w-[1440px] mx-auto w-full ">
            <div className="top-0 xl:hidden left-0 xl:relative w-full h-[32rem] xl:h-[32rem] flex items-center xl:bg-inherit" style={{ pointerEvents: 'none' }}>
                <div className="bg-white relative mx-auto w-full xl:mx-0 bottom-0 xl:bottom-[70px] xl:rounded-2xl">
                    <div style={{ pointerEvents: 'auto' }} className="p-4 mdl:px-8 mdl:py-6 shadow-contactPages xl:py-8">
                        <div>
                            <div>
                                <h3 className="text-black text-[25px] mdx:mb-7 mdl:text-[30px] mb-5 leading-8 uppercase font-semibold">
                                    CONTACTS
                                </h3>
                            </div>
                        </div>
                        <div className="flex-1 mt-4">
                            <form className="flex flex-col space-y-4 w-full" >
                                <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-row gap-4 items-center pb-3'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <circle cx="20" cy="20" r="20" fill="#E6F2EB" />
                                            <svg x="10" y="10" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.99999 20C10.424 20 18 12.1078 18 7.79999C18 3.49217 14.4182 0 9.99999 0C5.58172 0 2 3.49217 2 7.79999C2 12.1078 9.57601 20 9.99999 20ZM10 11.7013C12.2401 11.7013 14.056 9.93071 14.056 7.74665C14.056 5.56258 12.2401 3.79205 10 3.79205C7.75994 3.79205 5.94401 5.56258 5.94401 7.74665C5.94401 9.93071 7.75994 11.7013 10 11.7013Z" fill="#088133" />
                                            </svg>
                                        </svg>
                                    </div>
                                    <div >
                                        <a href="https://www.google.com/maps/search/?api=1&query=Deira,+Baniyas+road,+Twin+Towers,+20+floor+office+number+10" target="_blank" rel="noopener noreferrer" className="block text-black text-lg font-semibold mdx:text-[20px]">
                                            Deira, Baniyas road, Twin Towers, 20 floor office number 10
                                        </a>
                                    </div>
                                </div>
                                <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-row gap-4 items-center pb-3'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <circle cx="20" cy="20" r="20" fill="#E6F2EB" />
                                            <svg x="10" y="10" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M12.7068 13.425L14.1068 12.025C14.2953 11.8388 14.5339 11.7113 14.7935 11.6581C15.0531 11.6048 15.3226 11.6281 15.5693 11.725L17.2755 12.4063C17.5248 12.5074 17.7385 12.6801 17.8898 12.9026C18.041 13.125 18.123 13.3873 18.1255 13.6563V16.7813C18.1241 16.9643 18.0856 17.1451 18.0124 17.3128C17.9393 17.4805 17.8329 17.6317 17.6998 17.7573C17.5666 17.8828 17.4095 17.9801 17.2377 18.0433C17.066 18.1065 16.8833 18.1343 16.7005 18.125C4.74426 17.3813 2.33176 7.25627 1.87551 3.38128C1.85433 3.19099 1.87368 2.99837 1.93229 2.81609C1.9909 2.63382 2.08744 2.46602 2.21555 2.32374C2.34367 2.18145 2.50046 2.0679 2.67561 1.99057C2.85076 1.91323 3.0403 1.87385 3.23176 1.87503H6.25051C6.51989 1.87582 6.78287 1.95719 7.00563 2.10867C7.22839 2.26015 7.40074 2.4748 7.50051 2.72503L8.18176 4.43128C8.28192 4.67694 8.30747 4.94668 8.25523 5.20678C8.20298 5.46689 8.07526 5.70584 7.88801 5.89378L6.48801 7.29378C6.48801 7.29378 7.29426 12.75 12.7068 13.425Z" fill="#088133" />
                                            </svg>
                                        </svg>
                                    </div>
                                    <div >
                                        <a href="tel:+971543980707" className="text-lg font-semibold text-black hover:underline mdx:text-[20px]">+971543980707</a>
                                        <p className="text-black text-lg font-semibold mdx:text-[20px]">Open daily 09:00 - 18:00</p>
                                    </div>
                                </div>
                                <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-row gap-4 items-center pb-3'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <circle cx="20" cy="20" r="20" fill="#E6F2EB" />
                                            <g transform="translate(10, 10)">
                                                <g clipPath="url(#clip0_35_8661)">
                                                    <path d="M9.65442 4.38815C11.1813 4.38815 12.62 5.06502 13.6744 6.12315V6.12627C13.6744 5.61815 14.0163 5.23377 14.4888 5.23377H14.6088C15.3544 5.23377 15.5038 5.9369 15.5038 6.15877L15.5069 14.0556C15.455 14.5731 16.0413 14.8406 16.3669 14.5081C17.6325 13.2063 19.1494 7.80877 15.5788 4.68377C12.2488 1.7669 7.77942 2.24877 5.40317 3.88627C2.87754 5.63127 1.26317 9.48565 2.83129 13.1081C4.54379 17.0575 9.43942 18.2356 12.3532 17.0606C13.8282 16.465 14.5082 18.4563 12.975 19.1081C10.6644 20.0938 4.22504 19.9931 1.21754 14.785C-0.814331 11.2669 -0.706831 5.07815 4.68442 1.8719C8.80504 -0.582476 14.2419 0.0975247 17.5194 3.5194C20.9444 7.10002 20.7463 13.7994 17.4025 16.4038C15.8882 17.5882 13.6394 16.4363 13.6557 14.7106L13.6388 14.1481C12.5844 15.1925 11.1813 15.805 9.65442 15.805C6.63379 15.805 3.97442 13.145 3.97442 10.1275C3.97442 7.07752 6.63379 4.3894 9.65442 4.3894V4.38815ZM13.4538 9.9094C13.3394 7.69877 11.6988 6.36752 9.71629 6.36752H9.64129C7.35629 6.36752 6.08692 8.16752 6.08692 10.2081C6.08692 12.4963 7.62004 13.9413 9.63192 13.9413C11.8775 13.9413 13.3519 12.2981 13.4594 10.3544L13.4538 9.9094Z" fill="#088133" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_35_8661">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </g>
                                        </svg>
                                    </div>
                                    <div >
                                        <a href="mailto:info@mrjtrade.ae" className="text-black text-lg font-semibold mdx:text-[20px]">info@mrjtrade.ae</a>
                                    </div>
                                </div>
                                <button type="submit" className="w-full md:w-[328px] mdl:mr-auto mdl:px-16 py-3 rounded-[12px] transition-colors bg-greentxt text-white mdx:text-[20px] mdx:w-[408px] xl:mt-[130px]" style={{ pointerEvents: 'auto' }}>
                                    Ask question
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1440px] max-auto px-2 mx-auto hidden xl:block mb-[250px]">
                <div className="w-full rounded-3xl flex flex-col max-lg:gap-8 lg:flex-row bg-snowy px-4 py-8 lg:px-12 lg:py-12 relative overflow-hidden">
                    <div className="flex-1 w-full flex flex-col gap-5 z-10">
                        <h2 className="text-4xl max-mdx:text-2xl text-greenView font-semibold">
                            HAVE A QUESTION? <br />
                            CONTACT US!
                        </h2>
                        <p className="text-neutral-500 w-full max-w-[350px] text-lg leading-6">
                            Write your question and we will answer you as soon as possible
                        </p>
                    </div>
                    <div className="z-10 flex-1 w-full flex justify-center">
                        <form className="flex flex-col gap-6 w-full max-lg:max-w-full max-w-[350px]">
                            {["fullName", "phoneNumber", "email", "question"].map((field) => (
                                <div className="relative" key={field}>
                                    <input
                                        type={field === "email" ? "email" : "text"}
                                        name={field}
                                        value={values[field]}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedInput(field)}
                                        onBlur={() => setFocusedInput(null)}
                                        className={`block w-full px-3 py-3 bg-white rounded-lg shadow-sm placeholder-transparent focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm border-2 ${focusedInput === field
                                            ? validateInput(field, values[field]).isValid
                                                ? "border-green-500"
                                                : "border-red-500"
                                            : "border-transparent"
                                            }`}
                                        placeholder={
                                            field === "fullName"
                                                ? "Full name"
                                                : field === "phoneNumber"
                                                    ? "Phone number"
                                                    : field === "email"
                                                        ? "E-mail"
                                                        : "Your question"
                                        }
                                    />
                                    <label
                                        htmlFor={field}
                                        className={`absolute left-3  transition-all ${focusedInput === field || values[field]
                                            ? "-top-4 text-xs"
                                            : "top-3 text-sm"
                                            } ${focusedInput === field
                                                ? validateInput(field, values[field]).isValid
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                : "text-gray-400"
                                            } cursor-text`}
                                        onClick={() => document.getElementsByName(field)[0].focus()}
                                    >
                                        {focusedInput === field && values[field].length > 0 ? (
                                            validateInput(field, values[field]).message
                                        ) : field === "fullName" ? (
                                            <p>
                                                Full Name
                                                <span className="text-red-600 ml-2">*</span>
                                            </p>
                                        ) : field === "phoneNumber" ? (
                                            <p>
                                                Phone number
                                                <span className="text-red-600 ml-2">*</span>
                                            </p>
                                        ) : field === "email" ? (
                                            "E-mail"
                                        ) : (
                                            "Your question"
                                        )}
                                    </label>
                                </div>
                            ))}
                            <div>
                                <button
                                    type="submit"
                                    className="py-3 px-12 bg-greenView text-xs text-white font-semibold rounded-xl shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 xl:w-[200px] xl:text-[15px] xl:py-4"
                                >
                                    Send question
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="absolute -bottom-48 mdl:-left-20 max-mdl:-right-20 border-2 border-greenView opacity-30 rounded-full w-80 h-80 z-0"></div>
                </div>
            </div>
        </div>

    );
}
