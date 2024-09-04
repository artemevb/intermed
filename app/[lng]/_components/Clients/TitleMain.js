"use client"
import Image from 'next/image';
import location from "@/public/svg/clients/location.svg"; // Иконка местоположения


const TitleMain = ({Data}) => {

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-4 py-6 bg-white">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">{Data.name}</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 border-b pb-5">{Data.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center bg-red-100 rounded-md py-3 px-5">
                    <Image
                        src={location}
                        alt="location"
                        width={20}
                        height={20}
                        quality={100}
                        className="mr-2"
                    />
                    <span className="text-red-500 font-medium">{Data.location.country} , {Data.location.city}</span>
                </div>
                <div className="relative w-full max-w-[156px] h-[90px]">
                    <Image
                        src={Data.icon.url}
                        alt={Data.title}
                        layout="fill"
                        quality={100}
                        objectFit="cover"
                        className="w-full h-full "
                    />
                </div>
            </div>
        </div>
    );
};

export default TitleMain;
