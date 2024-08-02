import Image from "next/image"
import Link from "next/link"
import backet from "@/public/svg/arrow-right-blck.svg"

function Logo() {
  return (
    <Link href="/backet" className="items-center gap-4 z-10 flex">
      <Image priority src={backet} width={28} height={28} alt="The Wild Oasis logo" quality={100} />
    </Link>
  )
}

export default Logo