

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/intermed-logo.png";

function Logo() {
  return (
    <Link href="/" className="h-[66%] mdx:h-[60%] items-center flex">
        <Image
          src={logo}
          width={300}
          height={300}
          alt="MRJ Logo"
          className="h-full w-auto"
        />
    </Link>
  );
}

export default Logo;
