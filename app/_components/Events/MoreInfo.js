export default function MoreInfo() {
    const infoData = [
        { label: "Организатор", value: "Intermed Innovation" },
        { label: "Страна проведения", value: "Узбекистан" },
        { label: "Дата", value: "17 июля - 25 июля" },
        { label: "Время", value: "17:00 - 20:00" },
        { label: "Адрес", value: "Узбекистан, г. Ташкент, НВК \"Узэкспоцентр\"" },
        { label: "Стоимость участия", value: "Бесплатно" },
        { label: "Контактный телефон", value: "+998 78 150-47-47" },
        { label: "Контактный E-mail", value: "info@imed.uz" }
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-4 px-2">
            <div className="xl:flex xl:flex-row xl:gap-2 xl:justify-between">
                <div>
                    <h2 className="text-[25px] mdx:text-[33px] xl:text-[39px] font-semibold xl:w-[467px]">ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h2>
                </div>
                <div className="grid grid-cols-2 mt-[30px] gap-x-5 gap-y-5">
                    {infoData.map((item, index) => (
                        <>
                            <div key={`label-${index}`} className="text-[#808080]">{item.label}</div>
                            <div key={`value-${index}`}>{item.value}</div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
