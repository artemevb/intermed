export default function MoreInfo({Data}) {

    const infoData = [
        { label: "Организатор", value: Data?.organizer },
        { label: "Страна проведения", value: Data?.country },
        { label: "Дата", value: `${Data?.dateFrom} - ${Data?.dateTo}` },
        { label: "Время", value:  `${Data?.timeFrom} - ${Data?.timeTo}`},
        { label: "Адрес", value: Data?.address },
        { label: "Стоимость участия", value: "Бесплатно" },
        { label: "Контактный телефон", value: Data?.phoneNum },
        { label: "Контактный E-mail", value: Data?.email }
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
