'use client'

import CategoryItem from "@/app/_components/Categories/CategoryItem";
export default function List({data}) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h1 className="text-3xl max-mdx:text-2xl font-semibold uppercase">
        Категории
      </h1>
      <div className="w-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-4">
        {
          data?.data.map((item) => (
            <CategoryItem key={item.id} title={item.name} imageSrc={item.photo.url} slug={item.slug} />
          ))
        }
      </div>
    </div>
  )
}