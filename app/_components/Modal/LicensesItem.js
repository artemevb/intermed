// import Image from "next/image";
// import close from "@/public/svg/close.svg";
// import { useState } from "react";
// import licenses1 from "@/public/images/licenses/image1.png";

// const licenses = [
//     {
//         id: 1,
//         imageSrc: licenses1,
//         alt: "VITAMED MEDICAL",
//     },
// ];

// export default function LicensesItem({ closeModal }) {
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
//                 <button
//                     className="absolute top-2 right-2"
//                     onClick={closeModal}
//                 >
//                     <Image src={close} alt="close" width={20} height={20} />
//                 </button>
//                 <div className="text-center">
//                     <Image src={licenses[0].imageSrc} alt={licenses[0].alt} width={100} height={150} />
//                     <h2 className="text-xl font-bold mt-4">17TH TASHKENT INTERNATIONAL HEALTHCARE EXHIBITION</h2>
//                     <p className="mt-4 text-left">
//                         С радостью сообщаем, что многопрофильный медицинский центр IMED стал победителем 17-й Ташкентской международной выставки здравоохранения, прошедшей с 20 по 23 июля 2024 года.
//                     </p>
//                     <p className="mt-4 text-left">
//                         Это престижное событие собрало лидеров медицинской индустрии со всего мира, представив новейшие достижения в области здравоохранения и медицины. IMED продемонстрировал высококачественное медицинское обслуживание, инновационные технологии и передовые методики лечения, что позволило центру завоевать признание жюри и участников выставки.
//                     </p>
//                     <p className="mt-4 text-left">
//                         Поздравляем команду IMED с этой заслуженной победой и желаем дальнейших успехов в развитии и совершенствовании медицинского обслуживания в Узбекистане!
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
