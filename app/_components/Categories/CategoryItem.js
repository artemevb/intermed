import Image from "next/image";
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";

export default function CategoryItem({ key, title, imageSrc, slug }) {
  return (
    <div
      key={key}
      className="w-full border  overflow-hidden px-6 py-6 max-mdx:px-4 max-mdx:py-4 transition-all duration-200 relative pb-72 max-mdx:h-[300px] flex flex-col items-center gap-5"
    >
      <h2 className="text-2xl max-mdx:text-2xl font-semibold text-center z-10">{title}</h2>
      <Link href={`/categories/catalog/${slug}`}>
        <GreenArrow title={"Перейти"} />
      </Link>
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={`${title} Photo`}
        className="absolute w-1/2 h-[80%] z-0 object-contain -bottom-16"
      />
    </div>
  );
}
