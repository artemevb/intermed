import uzi from "@/public/images/main/uzi.png";
import Image from "next/image";
import Link from "next/link";

export default function FullEquipments() {

    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <div className=" px-2 flex flex-col gap-3 bg-[#F6F8F9] mdl:mx-3">
                <div className="mdl:flex mdl:flex-row mdl:pb-4 mdl:justify-between mdl:px-[4%]">
                    <div className="mdx:px-3">
                        <h2 className="text-[#252324] mt-[20px] uppercase text-[30px] mdx:text-[29px] mdl:text-[31px] xl:text-[45px] font-semibold"><span className="text-redMain">Комплексное<br /></span>оснащение клиник</h2>
                        <p className="text-[15px] mdx:text-[18px] xl:text-[20px] text-[#808080] mt-3 mb-5 lg:mb-7">Полное решение для оснащения<br /> медицинских учреждений</p>
                        <Link href={'/'}>
                            <button className="text-white text-[14px] mdx:text-[16px] mt-[10px] bg-contactBg px-[70px] py-[11px] max-w-[224px] mdl:max-w-[164px] flex items-center justify-center xl:max-w-[224px] xl:py-[15px] hover:bg-[#EE787C] ">
                                Подробнее
                            </button>
                        </Link>
                    </div>
                    <div className="w-full lg:w-[50%] h-full flex relative pt-[25px]">
                        <div className="w-full flex justify-center mdl:justify-end">
                            <div className="w-full h-full bottom-0 left-0 mdx:max-w-[330px] mdx:max-h-[330px] xl:max-w-[400px] xl:max-h-[400px]">
                                <Image
                                    src={uzi}
                                    alt="Medical Equipment"
                                    objectFit="contain"
                                    className="min-w-full min-h-full "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
