import Image from "next/image";
import close from "@/public/svg/close.svg";

const Modal = ({ selectedLicense, closeModal }) => {
    if (!selectedLicense) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto" onClick={closeModal}>
            <div className="bg-white max-w-[950px] w-full relative mx-4 my-4 flex flex-col overflow-y-auto max-h-full mdl:mx-[19%] no-scrollbar h-[88%] xl:h-[72%]" onClick={(e) => e.stopPropagation()}>
                <div className="bg-white xl:flex xl:flex-row">
                    <button onClick={closeModal} className="absolute top-2 right-2 xl:top-4 xl:right-3 ">
                        <Image src={close} alt="close" width={24} height={24} />
                    </button>
                    <div className="flex flex-col items-center py-[45px] px-[50px] border mx-5 my-9 mdx:py-[35px] mdx:px-[30px] mdx:w-[50%] mdx:mx-[30px] xl:w-[70%] justify-center xl:my-[30px]">
                        <Image
                            src={selectedLicense.imageSrc}
                            alt={selectedLicense.alt}
                            layout="responsive"
                            objectFit="contain"
                            className='w-full h-full'
                        />
                    </div>
                    <div className="px-[16px] mdx:px-[30px] xl:w-[100%] xl:px-0 xl:my-[30px] xl:mr-[30px]">
                        <h3 className="font-bold mt-4 text-[18px] mdx:text-[28px] uppercase xl:mt-0">
                            {selectedLicense.alt}
                        </h3>
                        <p className="mt-4 text-[15px] mdx:text-[20px] text-left">
                            {selectedLicense.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
