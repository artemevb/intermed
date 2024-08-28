import CategoryItem from "@/app/_components/Categories/CategoryItem";
import Link from "next/link";

export default function Equipments({data}) {
  const limitedData = data.data.slice(0, 4);
  
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-3xl max-mdl:text-2xl font-semibold">
        КАТАЛОГ
      </h2>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4">
        {limitedData.map((item, i) => (
          <CategoryItem key={i} title={item.name} imageSrc={item.photo.url} slug={item.slug} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href={'/categories'} className=" border border-neutral-300 px-12 py-3 transition-all hover:text-white hover:bg-[#E94B50] duration-200 font-bold">
          Все категории
        </Link>
      </div>
    </div>
  );
}
