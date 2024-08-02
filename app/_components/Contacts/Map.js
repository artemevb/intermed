

export default function Map() {
    return (
        <div className="mx-auto relative w-full">
            <div className="w-full h-auto xl:h-full relative left-0 xl:top-0 z-0">
                <div className="h-[350px] mdx:h-[450px] xl:h-[620px] w-full">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A518e000d74529368bca3a568b2843702261e398bdb518ddbd5458260f3f56097&amp;source=constructor" width="100%" height="400" className="relative top-0 left-0 w-full h-full border-none " frameborder="0"></iframe>
                </div>
            </div>
            <div className="max-w-[1440px] mx-[14px] 3xl:mx-auto">
                <div className="mt-4 max-w-[1440px] xl:mx-5">
                    <form className="flex flex-col space-y-4 xl:grid xl:grid-cols-2 xl:gap-8">
                        <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col items-start gap-1 pb-3 xl:border-b-0'>
                            <div>
                                <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Address</p>
                            </div>
                            <div>
                                <a href="https://www.google.com/maps/search/?api=1&query=Deira,+Baniyas+road,+Twin+Towers,+20+floor+office+number+10" target="_blank" rel="noopener noreferrer" className="block text-black text-[20px] mdx:text-[28px] xl:text-[30px] mdx:w-[470px]">
                                    Deira, Baniyas road, Twin Towers, 20 floor office number 10
                                </a>
                            </div>
                        </div>
                        <div className='xl:pb-[30px] border-b-2 border-contactBorder  xl:border-b-0 flex flex-col gap-1 items-start pb-3'>
                            <div>
                                <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Phone</p>
                            </div>
                            <div>
                                <a href="tel:+971543980707" className="hover:underline text-black text-[20px] mdx:text-[28px] xl:text-[30px]">+971543980707</a>
                            </div>
                        </div>
                        <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 xl:border-b-0'>
                            <div>
                                <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Schedule</p>
                            </div>
                            <p className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]">Open daily 09:00 - 18:00</p>
                        </div>
                        <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 xl:border-b-0'>
                            <div>
                                <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">E-mail</p>
                            </div>
                            <div>
                                <a href="mailto:info@mrjtrade.ae" className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]">info@mrjtrade.ae</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}