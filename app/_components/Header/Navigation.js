import Link from "next/link"

export default function Navigation({navOptions}) {

  return (
    <nav className="h-full flex gap-10 items-center max-2xl:hidden">
        {navOptions.map((item, i) => {
            return (
                <Link href={`/${item.slug}`} key={i}>
                    <div className="text-[#252324] font-medium text-[18px] hover:text-gray-400 transition-all duration-300 whitespace-nowrap ">{item.title}</div>
                </Link>
            )
        })}
    </nav>
  )
}