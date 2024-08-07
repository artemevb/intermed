import uzi from "@/public/images/equipments/uzi.png";
import lab from "@/public/images/equipments/lab-equip.png";
import colba from "@/public/images/equipments/colba.png";
import radio from "@/public/images/equipments/radio.png";
import CategoryItemEq from "@/app/_components/Equipment/CategoryItemEq";
import Link from "next/link";
import GreenArrow from "../Buttons/GreenArrow";

export default function Category() {
    const data = [
        {
            title: "УЗД оборудование",
            imageSrc: uzi,
            slug: "ultrasound"
        },
        {
            title: "Лабораторное оборудование",
            imageSrc: lab,
            slug: "lab"
        },
        {
            title: "Реагенты и расходные материалы",
            imageSrc: colba,
            slug: "reagents"
        },
        {
            title: "Радиология",
            imageSrc: radio,
            slug: "radiology"
        },
    ];
    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
            <h2 className="text-[25px] mdx:text-[30px] mdl:text-[35px] font-bold uppercase">
                Категории оборудования
            </h2>
            <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-4">
                {data.map((item, i) => (
                    <CategoryItemEq key={i} title={item.title} imageSrc={item.imageSrc} slug={item.slug} />
                ))}
            </div>
        </div>
    );
}
