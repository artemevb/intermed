import uzi from "@/public/images/equipments/uzi.png";
import lab from "@/public/images/equipments/lab-equip.png";
import colba from "@/public/images/equipments/colba.png";
import radio from "@/public/images/equipments/radio.png";
import CategoryItem from "@/app/_components/Categories/CategoryItem";


export default function List() {
  const data = [
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
    {
      title: "УЗД оборудование",
      imageSrc: uzi,
      slug: "ultrasound"
    },
    {
      title: "Laboratory Equipment",
      imageSrc: lab,
      slug: "lab"
    },
    {
      title: "Reagents and consumables",
      imageSrc: colba,
      slug: "reagents"
    },
    {
      title: "Radiology and X-ray systems",
      imageSrc: radio,
      slug: "radiology"
    },
    {
      title: "Ultrasound Diagnostic System",
      imageSrc: uzi,
      slug: "ultrasound"
    },
    {
      title: "Reagents and consumables",
      imageSrc: colba,
      slug: "reagents"
    },
    {
      title: "Radiology and X-ray systems",
      imageSrc: radio,
      slug: "radiology"
    },
    {
      title: "Ultrasound Diagnostic System",
      imageSrc: uzi,
      slug: "ultrasound"
    },
    {
      title: "Laboratory Equipment",
      imageSrc: lab,
      slug: "lab"
    },
    {
      title: "Reagents and consumables",
      imageSrc: colba,
      slug: "reagents"
    },
    {
      title: "Ultrasound Diagnostic System",
      imageSrc: uzi,
      slug: "ultrasound"
    },
    {
      title: "Reagents and consumables",
      imageSrc: colba,
      slug: "reagents"
    },
    {
      title: "Radiology and X-ray systems",
      imageSrc: radio,
      slug: "radiology"
    },
  ];
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h1 className="text-3xl max-mdx:text-2xl font-semibold uppercase">
        Категории
      </h1>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4">
        {
          data.map((item, i) => (
            <CategoryItem key={i} title={item.title} imageSrc={item.imageSrc} slug={item.slug} />
          ))
        }
      </div>
    </div>
  )
}
