import Image from "next/image";
import newsPhoto from "@/public/images/clinicslogo/intermed.png";

export default function ContAddress() {
    const data = [
        {
            title: "Intermed Innovation",
            address: "Tashkent, Chinobod Street 10A",
            country: "Uzbekistan",
            schedule: "09:00 - 18:00",
            email: "info@imed.uz",
            phones: ["+998781504747", "+998781504707"],
            imageSrc: newsPhoto,
        },
        {
            title: "Alnair Medical",
            address: "Almaty, Timiryazev Street 42, building 15/109, office 301-304",
            country: "Kazakhstan",
            schedule: "09:00 - 18:00",
            email: "sales@alnair.kz",
            phones: ["+77008368710"],
            imageSrc: newsPhoto,
        },
        {
            title: "Intermed Innovation",
            address: "Moscow, Prospekt Mira Street, 106",
            country: "Russia",
            schedule: "09:00 - 18:00",
            email: "info@imedrf.ru",
            phones: ["+74959208100", "+79858100791"],
            imageSrc: newsPhoto,
        },
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 mb-[180px]">
            <div>
                <h2 className="text-3xl font-semibold uppercase mt-16 mdx:mt-20 mb-8">International Representatives</h2>

                <div className="grid gap-6 slg:grid-cols-2 xl:grid-cols-3">
                    {data.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="">
                                <div className="p-4">
                                    <Image className="h-auto w-full object-cover" src={item.imageSrc} alt={item.title} />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase  tracking-wide text-[22px] mdx:text-[24px] xl:text-[30px] text-greentxt font-semibold">{item.title}</div>
                                    <div></div>

                                    <p className="block mt-1 border-b-2 pb-5 text-lg leading-tight font-medium text-black text-[15px] mdx:text-[18px] xl:text-[20px]">{item.address}</p>

                                    <div className="flex flex-row items-end mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                        <p>Country:</p>
                                        <p className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]">{item.country}</p>
                                    </div>


                                    <div className="flex flex-row items-end mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                        <p>Schedule:</p>
                                        <p className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]"> {item.schedule}</p>
                                    </div>

                                    <div className="flex flex-row items-end mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                        <p>E-mail:</p>
                                        <p className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]"> {item.email}</p>
                                    </div>

                                    <div className="flex flex-row items-start mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px] justify-between">
                                        <p>Phone:</p>
                                        <div className="mt-2 text-gray-500 text-[16px] mdx:text-[18px] xl:text-[20px]">
                                            {item.phones.map((phone, index) => (
                                                <p key={index}>{phone}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
