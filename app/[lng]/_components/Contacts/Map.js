

export default function Map() {
    return (
        <div className="mx-auto relative w-full">
            <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
                <div className="h-[350px] mdx:h-[450px] xl:h-[620px] w-full xl:max-w-[950px] xl:max-h-[750px]">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A91d36eeb34d790da6904a560f5fd9b0e0072a93a42f95bc0fe3dd8ae45fdaf0c&amp;source=constructor" width="100%" height="400" className="relative top-0 left-0 w-full h-full border-none " frameborder="0"></iframe>

                </div>
                <div className=" mx-[14px] 3xl:mx-auto">
                    <div className="mt-4 max-w-[1440px] xl:mx-5">
                        <form className="flex flex-col xl:grid xl:gap-8">
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col items-start gap-1 pb-3'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Адрес</p>
                                </div>
                                <div>
                                    <a href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.288713%2C41.350869&mode=usermaps&source=mapframe&um=constructor%3A91d36eeb34d790da6904a560f5fd9b0e0072a93a42f95bc0fe3dd8ae45fdaf0c&utm_source=mapframe&z=14" target="_blank" rel="noopener noreferrer" className="block text-black text-[20px] mdx:text-[28px] xl:text-[30px] mdx:w-[470px]">
                                        г. Ташкент, Юнусабадский р-он, ул. Чинобод 10А
                                    </a>
                                </div>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder   flex flex-col gap-1 items-start pb-3'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Телефон</p>
                                </div>
                                <div>
                                    <a href="tel:+971543980707" className="hover:underline text-black text-[20px] mdx:text-[28px] xl:text-[30px]">+998 78 150-47-47</a>
                                </div>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 '>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">График работы</p>
                                </div>
                                <p className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]">Ежедневно 09:00 - 18:00</p>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 xl:border-b-0'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">E-mail</p>
                                </div>
                                <div>
                                    <a href="mailto:info@mrjtrade.ae" className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]">info@imed.uz</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}