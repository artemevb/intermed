import Image from "next/image"
import newsPhoto from "@/public/images/news/news-photo.png";

export default function NewsTitle() {
    return (
        <div className="w-full max-w-[832px] mx-auto flex flex-col  gap-1 px-4 ">
            <div className=" mt-4 ">
                <p className="text-gray-400 text-[16px] mdx:text-[18px] xl:text-[20px]">12 June</p>
                <h1 className="text-[25px] text-black mb-2 mdx:text-[34px] xl:text-[40px] leading-[1.10] uppercase">Мастер класс: актуальные вопросы ультразвуковой диагностики пренатальном периоде и в гинекологии</h1>

            </div>
            <div >
                <p className="text-[16px] mdx:text-[20px]">В современном мире ультразвуковая диагностика играет ключевую роль в пренатальном периоде и гинекологии. Для повышения квалификации специалистов в этой области, 25 июля 2024 года в Ташкенте состоится мастер-класс на тему «Актуальные вопросы ультразвуковой диагностики в пренатальном периоде и гинекологии».</p>
            </div>
            <div className="xl:mt-7 xl:mb-[80px] flex flex-row justify-center">
                <Image
                    src={newsPhoto}
                    width={500}
                    height={500}
                    alt={`News Image`}
                    className="w-full h-auto max-w-[832px] max-h-[450px] object-cover rounded-xl"
                />
            </div>
            <div>
                <h2 className="text-[20px] mdx:text-[27px] font-semibold mb-[20px] text-[#252324]">Приглашенные эксперты</h2>
                <p className="text-[16px] mdx:text-[20px]">Озерская Ирина Аркадьевна - доктор  медицинских наук, профессор кафедры ультразвуковой диагностики и хирургии ФПК МР ФГБОУ ВПО «Российский университет дружбы народов» Минобрнауки России (г. Москва).
                </p>
                <p className="text-[16px] mdx:text-[20px] mt-[20px]">Батаева Роза Саидовна - Главный врач ЦМП г. Москва, Доцент кафедры УЗД ФГБОУ ДПО РМАНПО, Амбассадор и международный лектор ISUOG
                </p>
            </div>
            <div className="mt-[60px] mb-[140px]">
                <h3 className="text-[20px] mdx:text-[27px] font-semibold mb-[16px] text-[#252324]">Основными темами мастер-класса станут</h3>
                <ol className="list-disc pl-4 mdx:pl-5">
                    <li className="text-[16px] mdx:text-[20px]">Пренатальная ультразвуковая диагностика: новейшие подходы и технологии.</li>
                    <li className="text-[16px] mdx:text-[20px] ">Оценка состояния плода и диагностика врожденных аномалий.</li>
                    <li className="text-[16px] mdx:text-[20px] ">Применение ультразвука в гинекологии: от диагностики до лечения.</li>
                </ol>
                <div className="mt-[60px]">
                    <h3 className="text-[20px] mdx:text-[24px] font-semibold mb-[16px] text-[#252324]">Пренатальная ультразвуковая диагностика: новейшие подходы и технологии</h3>
                    <p className="text-[16px] mdx:text-[20px]">Обзор современных технологий в ультразвуковой диагностике.
                        Применение 3D и 4D ультразвука в пренатальной диагностике.
                        Использование доплеровского исследования для оценки состояния плода</p>
                </div>
                <div className="mt-[30px] mb-[10px] flex flex-row justify-center">
                    <Image
                        src={newsPhoto}
                        width={500}
                        height={500}
                        alt={`News Image`}
                        className="w-full h-auto max-w-[832px] max-h-[450px] object-cover rounded-xl"
                    />
                </div>
                <h3 className="text-[20px] mt-[60px] mdx:text-[27px] mb-[16px] font-semibold">Оценка состояния плода и диагностика врожденных аномалий</h3>
                <p className="text-[16px] mdx:text-[20px]">Основные параметры оценки развития плода.
                    Диагностика хромосомных и структурных аномалий.
                    Ранние признаки патологий и их интерпретация</p>
                <div className="mt-[30px] mb-[10px] flex flex-row justify-center">
                    <Image
                        src={newsPhoto}
                        width={500}
                        height={500}
                        alt={`News Image`}
                        className="w-full h-auto max-w-[832px] max-h-[450px] object-cover rounded-xl"
                    />
                </div>
                <h3 className="text-[20px] mt-[60px] mdx:text-[27px] mb-[16px] font-semibold">Применение ультразвука в гинекологии: от диагностики до лечения</h3>
                <p className="text-[16px] mdx:text-[20px]">Ультразвуковая диагностика воспалительных заболеваний органов малого таза.
                    Диагностика и мониторинг эндометриоза и миом матки.
                    Ультразвуковое исследование в постменопаузальном периоде</p>
                <div className="mt-[30px] mb-[10px] flex flex-row justify-center">
                    <Image
                        src={newsPhoto}
                        width={500}
                        height={500}
                        alt={`News Image`}
                        className="w-full h-auto max-w-[832px] max-h-[450px] object-cover rounded-xl"
                    />
                </div>
            </div>
            <div className="mdl:flex mdl:justify-center">

            </div>
        </div>
    );
}