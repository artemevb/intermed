import Image from "next/image";
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";

export default function EventCard({ title, imageSrc, slug }) {
  return (
    <div className="relative overflow-hidden h-full mdx:h-full grid grid-rows-2 w-full">
      <div className="relative row-span-2 col-span-2 h-[300px] mdx:h-[350px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full" // Убедитесь, что тут нет класса rounded
        />
      </div>
      <div className="bg-white pt-2 flex flex-col col-span-2">
        <h3 className="text-xl font-semibold text-black mb-4 mdx:text-[24px] mdx:uppercase max-w-[584px]">{title}</h3>
        <Link href={`/events/${slug}`} className="font-semibold text-[20px]">
          <GreenArrow title={"Подробнее"} />
        </Link>
      </div>
    </div>
  );
}
