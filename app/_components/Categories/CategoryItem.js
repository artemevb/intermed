import Image from "next/image";
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";

export default function CategoryItem({ key, title, imageSrc, slug }) {
  return (
    <div
      key={key}
      className="w-full border overflow-hidden transition-all duration-200 relative mdl:pb-72 max-mdl:h-[180px] flex flex-row items-center gap-5 mdl:flex-col h-[300px] px-2 mdl:px-6 mdl:py-6 max-mdl:pt-[20px] max-mdl:pl-[15px]"
    >
      <div className="mdl:flex flex-col mdl:items-center max-mdl:max-w-[167px] flex items-start h-full ">
        <h2 className="text-2xl max-mdx:text-2xl font-semibold mdl:text-center z-10 mx-auto max-mdl:mb-[5px]">{title}</h2>
        <Link href={`/categories/catalog/${slug}`}>
          <GreenArrow title={"Перейти"} />
        </Link>
      </div>
      <div className="mdl:flex mdl:flex-col mdl:items-center flex-1 max-mdl:flex max-mdl:justify-end">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt={`${title} Photo`}
          className="absolute h-full z-0 object-contain -bottom-10 mdl:-bottom-16 mdl:w-1/2 mdl:h-[80%] max-mdl:w-auto max-mdl:h-full max-mdl:right-0"
        />
      </div>
    </div>
  );
}
