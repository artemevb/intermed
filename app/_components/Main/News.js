import newsPhoto from "@/public/images/news/news-photo.png";
import NewCard from "../News/NewCard";
import Link from "next/link";

export default function News() {
  const data = [
    {
      title: "Мастер класс: актуальные вопросы ультразвуковой диагностики пренатальном",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "Мастер класс: актуальные вопросы ультразвуковой диагностики пренатальном",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "medical-devices",
    },
    {
      title: "Мастер класс: актуальные вопросы ультразвуковой диагностики пренатальном",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "Мастер класс по УЗД. Абышева Мария Сергеевна",
      date: "12 June",
      imageSrc: newsPhoto,
      slug: "children",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold">НОВОСТИ</h2>
      <div className="w-full grid gap-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto">
        {data.map((item, i) => {
          return (
            <Link key={i} href={`/news/${item.slug}`}>
              <NewCard
                key={i}
                title={item.title}
                date={item.date}
                imageSrc={item.imageSrc}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex w-full justify-center">
      <Link href={'/news'} className=" border border-neutral-300 px-12 py-3 transition-all duration-200 hover:bg-[#E94B50] hover:text-[#ffffff]">
            Все новости
        </Link>
      </div>
    </div>
  );
}
