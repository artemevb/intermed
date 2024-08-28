import Image from "next/image";
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";

export default function CategoryItem({title, imageSrc, slug }) {
  return (
    <div
      className="w-full h-[400px] border-gray-300"
    >
      <Link href={`/categories/catalog/${slug}`} className="flex flex-col border h-full w-full">
        <div className="pt-6 px-6 flex items-center flex-col gap-3">
          <h2 className=" max-mdx:text-[18px] lh text-2xl font-semibold mdl:text-center z-10 mx-auto">
            {title ? title : ""}
          </h2>

          <GreenArrow title={"Перейти"} />
        </div>
        <div className="w-full h-full overflow-y-hidden relative">
          <Image
            src={imageSrc ? imageSrc : ""}
            width={500}
            height={500}
            alt={`${title.ru} Photo`}
            className="object-cover h-full absolute -bottom-8"
            quality={100}
          />
        </div>
      </Link>
    </div>
  );
}
