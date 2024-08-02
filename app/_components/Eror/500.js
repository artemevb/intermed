import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/mrj-logo.png";
import notfound from "@/public/images/Error500.png";

function Custom500() {
    return (
        <main className="h-screen w-full bg-white">
            <div className="h-[70px] mx-auto flex justify-center w-full max-w-[1440px] items-center px-2 ">
                <div className="h-full ">
                    <Image
                        src={logo}
                        height={500}
                        width={500}
                        alt="Logo Image"
                        className="h-full w-auto"
                    />
                </div>
            </div>
            <div className="w-full max-w-[1440px] h-full flex justify-center items-center mx-auto px-2">
                <div className="flex flex-col mdx:gap-8 gap-5 items-center">
                    <Image
                        src={notfound}
                        width={1000}
                        height={1000}
                        alt="Not Found Image"
                        className="mdx:h-[200px] w-full mdx:w-auto"
                    />
                    <div className="text-center flex flex-col gap-3">
                        <h2 className="mdx:text-4xl text-2xl font-bold text-greentxt uppercase mdx:text-[40px]">
                            server Error
                        </h2>
                        <p className="max-w-[480px] w-full mx-auto text-neutral-400 text-[15px] mdx:text-[20px]">
                            It seems our site has decided to take a short break, like an old blood pressure monitor after a long day of work
                        </p>
                    </div>

                    <Link href="/">
                        <button className="px-[76px] py-4 rounded-2xl bg-greentxt text-white font-semibold">
                            Home page
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Custom500;
