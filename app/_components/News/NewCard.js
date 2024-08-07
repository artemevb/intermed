import Image from "next/image"
import GreenArrow from "../Buttons/GreenArrow"

export default function NewCard({ key, title, date, imageSrc }) {
  return (
    <div className="w-full border border-neutral-300 bg-white h-full flex flex-col gap-5 justify-between">
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={`News Image ${key}`}
        className="w-full h-auto object-cover"
      />
      <div className="w-full flex flex-col gap-6 pl-4 pb-4">
        <h3 className="text-xl max-mdx:text-lg font-semibold">
          {title}
        </h3>
          <GreenArrow title={"Подробнее"} />
      </div>
    </div>
  )
}
