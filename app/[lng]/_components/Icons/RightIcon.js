import Image from "next/image"
import Link from "next/link"
import backet from "@/public/svg/arrow-right-blck.svg"

function Logo() {
  return (

      <Image priority src={backet} width={28} height={28} alt="Arrow right" quality={100} />

  )
}

export default Logo