import newsPhoto from "@/public/images/news/news-photo.png";
import NewCard from "../News/NewCard";
import Link from "next/link";
import GreenArrow from "@/app/_components/Buttons/GreenArrow";

export default function News() {
  const data = [
    {
      title: "The Future of Telemedicine and Remote Patient Monitoring",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "The Impact of Portable Medical Devices on Healthcare Accessibility",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "medical-devices",
    },
    {
      title: "The Future of Telemedicine and Remote Patient Monitoring",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "telemedicine",
    },
    {
      title:
        "Children's health: Vaccination and prevention of infectious diseases",
      date: "12 Июня",
      imageSrc: newsPhoto,
      slug: "children",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mb-[150px] mt-[150px] mdx:mt-[190px] xl:mt-[230px]">
      <h2 className="text-3xl max-mdx:text-2xl font-semibold uppercase">Другие новости</h2>
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
        <Link
          href="/news"
          className="border-1 border py-3 px-12 hover:bg-[#E94B50] hover:text-[#FFF] transition-all duration-200 "
        >
          Все новости
        </Link>
      </div>
    </div>
  );
}
