import Image from "next/image";
import close from "@/public/svg/close.svg";

const formatTextWithNewlines = (text) => {
    return text.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ))
}


const Modal = ({ selectedLicense, closeModal }) => {
    if (!selectedLicense) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999] overflow-y-auto" onClick={closeModal}>
            <div className="bg-white max-w-[950px] w-full relative mx-4 my-4 flex flex-col overflow-y-auto max-h-full mdl:mx-[19%] no-scrollbar h-[88%] xl:h-[86%]" onClick={(e) => e.stopPropagation()}>
                <div className="bg-white xl:flex xl:flex-row">
                    <button onClick={closeModal} className="absolute top-2 right-2 xl:top-4 xl:right-3 ">
                        <Image src={close} alt="close" width={25} height={25} />
                    </button>
                    <div className="flex flex-col items-center py-[45px] px-[50px] border mx-5 my-9 mdx:py-[35px] mdx:px-[30px] mdx:w-[50%] mdx:mx-[30px] xl:w-[70%] justify-center xl:my-[30px] max-h-[635px]">
                        <Image
                            width={800}
                            height={800}
                            src={selectedLicense.photo.url}
                            alt={selectedLicense.alt}
                            quality={100}
                            layout="responsive"
                            objectFit="contain"
                            className='w-full h-full'
                        />
                    </div>
                    <div className="px-[16px] mdx:px-[30px] xl:w-[100%] xl:px-0 xl:my-[30px] xl:mr-[30px]">
                        <h3 className="font-bold mt-4 text-[18px] mdx:text-[28px] uppercase xl:mt-0">
                            {formatTextWithNewlines(selectedLicense.title)}
                        </h3>
                        <p className="mt-4 text-[15px] mdx:text-[20px] text-left">
                            {formatTextWithNewlines(selectedLicense.text)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
