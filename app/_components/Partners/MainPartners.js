// app/_components/Partners/MainPartners.js
"use client";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { partners } from "@/app/_components/Partners/ListPartners";
import partnerPhoto from "@/public/images/aboutUs/partners/image3.png";

export default function PartnerPage() {

    const partners = [
        {
            id: 1,
            imageSrc: partnerPhoto,
            title: "Lingen",
            description: "Lingen Precision Medical Products Co., Ltd. is a unique manufacturer specializing in medical products",
            link: "lingen"
        },
        // Другие партнеры...
    ];

    const router = useRouter();
    const { partner } = router.query;

    const partnerData = partners.find(p => p.link === partner);

    if (!partnerData) {
        return <div>Partner not found</div>;
    }


    return (
        <div className="w-full max-w-[800px] mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{partnerData.title}</h1>
            <div className="w-full h-[300px] relative mb-4">
                <Image src={partnerData.imageSrc} alt={partnerData.title} layout="fill" objectFit="contain" />
            </div>
            <p className="text-gray-700">{partnerData.description}</p>
        </div>
    );
}