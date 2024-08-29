import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/intermed-logo.png";
import notfound from "@/public/images/Error404.png";

function Custom404() {
    return (
        <main className="h-screen w-full bg-white flex flex-col justify-between items-center">
            <div className="h-[30px] flex justify-center  w-full max-w-[1440px] items-center px-2 mdx:h-[61px]">
                <div className="h-full flex items-center">
                    <Image
                        src={logo}
                        height={400}
                        width={400}
                        alt="Logo Image"
                        className="h-full w-auto"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 mb-[11%] xl:flex-row">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row items-end ">
                    <p className="text-[123px] font-bold text-[#E94B50] mt-4 mdx:text-[150px] mr-3">4</p>
                    <div>
                        <Image
                            src={notfound}
                            width={500}
                            height={500}
                            alt="Not Found Image"
                            className="h-full w-auto max-h-[216px] mdx:max-h-[299px]"
                        />
                    </div>
                    <p className="text-[123px] font-bold text-[#E94B50] mt-4 mdx:text-[150px] ml-3">4</p>
                    </div>
                    <h3 className="text-[30px] font-bold text-[#E31E24] mdx:text-[40px]">Страница не найдена</h3>
                    <p className="max-w-[480px] w-full mx-auto text-neutral-400 text-center mt-4 mdx:text-[20px]">
                        Страница, на которой вы находитесь, не найдена. Но вы можете найти большое количество медицинского оборудования на нашем сайте
                    </p>
                    <Link href="/">
                        <button className="px-[76px] py-4 bg-[#E94B50] text-white font-semibold mt-8 hover:bg-[#EE787C]">
                            На главную
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Custom404;
