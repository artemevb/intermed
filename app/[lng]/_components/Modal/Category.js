import CatalogList from "../Catalog/CatalogBar";
import Image from "next/image";
import close from "@/public/svg/close-gray.svg"

export default function Category({ handleClose }) {
  return (
    <div className="fixed lg:hidden h-screen w-full inset-0 z-[9999] bg-modalBg flex justify-center items-center max-mdx:px-2 px-12 py-12">
      <div className="w-full h-full overflow-y-scroll no-scrollbar bg-white relative px-6 pt-8">
        <button onClick={handleClose} className="w-6 h-6 absolute right-6 top-8">
        <Image  
        src={close}
        width={100}
        height={100}
        alt="Icon"
        className="h-full w-full"
        />

        </button>
        <h2 className="mb-8 text-3xl max-mdx:text-2xl font-semibold">
          Категории
        </h2>
        <CatalogList />
      </div>
    </div>
  )
}
