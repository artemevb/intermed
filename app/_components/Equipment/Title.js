
import Image from 'next/image';
import innovationMedical from "@/public/images/equipment/innovationMedical.png";

export default function Title() {





    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <div className='mx-[15px]'>
                <h1 className="text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] mb-4 uppercase xl:hidden font-semibold">Инновации и комфорт — залог вашего здоровья!</h1>
                <div className='xl:flex xl:flex-row'>
                    <div className=" w-[100%] h-auto mb-4 xl:w-[43%] px-[20px] xl:px-0">
                        <Image
                            src={innovationMedical}
                            alt={"Main photo"}
                            width={1000}
                            height={1000}
                            objectFit="contain"
                            className='w-full h-auto' />
                    </div>
                    <div className='xl:w-[50%] xl:ml-[62px] xl:mt-[20px]'>
                        <h1 className="font-semibold text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] mb-4 uppercase hidden xl:block text-[#252324]" >Инновации и комфорт — залог вашего здоровья!</h1>
                        <p className="text-[#808080] text-[15px] mdx:text-[20px] ">Комплексное оснащение клиники играет ключевую роль в предоставлении качественной медицинской помощи. Современные медицинские технологии и оборудование позволяют врачам более точно диагностировать и эффективно лечить различные заболевания. Новейшее медицинское оборудование способствует более эффективному и менее инвазивному лечению, минимизируя риски и сокращая время восстановления пациентов<br /><br />Комплексное оснащение клиники включает в себя не только диагностическое и лечебное оборудование, но и системы обеспечения безопасности пациентов. Стерильность операционных, современные системы вентиляции и контроль инфекций являются неотъемлемыми частями современной клиники. Обеспечение комфортных условий для пациентов и медицинского персонала</p>
                    </div>
                </div>
            </div>
        </div>
    );
}