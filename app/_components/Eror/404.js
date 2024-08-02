import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/mrj-logo.png"; // Убедитесь, что путь к логотипу правильный
import notfound from "@/public/images/Error404.png"; // Убедитесь, что путь к изображению правильный

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
                <div>
                    <Image
                        src={notfound}
                        width={500}
                        height={500}
                        alt="Not Found Image"
                        className="h-full w-auto"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[70px] font-bold text-greentxt mt-4 mdx:text-[90px]">404</h2>
                    <h3 className="text-[30px] uppercase font-bold text-greentxt mdx:text-[40px]">Error Oops!</h3>
                    <p className="max-w-[480px] w-full mx-auto text-neutral-400 text-center mt-4 mdx:text-[20px]">
                        The page you are on was not found. But you can find a large number of medical equipment on our website
                    </p>
                    <Link href="/">
                        <button className="px-[76px] py-4 rounded-2xl bg-greentxt text-white font-semibold mt-8">
                            Home page
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Custom404;
