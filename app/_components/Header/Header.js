
import Logo from "@/app/_components/Header/Logo";
import Navigation from "@/app/_components/Header/Navigation";
import Tools from "@/app/_components/Header/Tools";

export default function Header() {
  const data = [
    {
      title: 'Каталог',
      slug: 'categories',
    },
    {
      title: 'О компании',
      slug: 'about',
    },
    {
      title: 'Партнеры',
      slug: 'partners',
    },
    {
      title: 'Новости',
      slug: 'news',
    },
    {
      title: 'Клиенты',
      slug: 'clients',
    },
    {
      title: 'Контакты',
      slug: 'contacts',
    },
  ]
  return (
    <header className="w-full bg-white py-4 px-2 h-[90px] max-mdx:h-[70px] shadow-2xl border-b">
      <div className="w-full max-w-[1440px] flex items-center justify-between gap-2 h-full mx-auto ">
        <Logo />
        <Navigation navOptions={data} />
        <Tools navOptions={data} />
      </div>
    </header>
  )
}
