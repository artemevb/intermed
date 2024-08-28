"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Tools from "./Tools";
import { useTranslation } from '../../../i18n/client';

export default function Header({ lng }) {
  const { t } = useTranslation(lng, 'header')

  const data = [
    {
      title: t('catalog'),
      slug: 'categories',
    },
    {
      title: t('about_company'),
      slug: 'about',
    },
    {
      title: t('partners'),
      slug: 'partners',
    },
    {
      title: t('news'),
      slug: 'news',
    },
    {
      title: t('clients'),
      slug: 'clients',
    },
    {
      title: t('contacts'),
      slug: 'contacts',
    },
  ];

  return (
    <header className="w-full bg-white px-2 h-[90px] max-mdx:h-[70px] shadow-2xl border-b">
      <div className="w-full max-w-[1440px] flex items-center justify-between gap-2 h-full mx-auto ">
        <Logo lng={lng}/>
        <Navigation  navOptions={data} />
        <Tools lng={lng} navOptions={data} />
      </div>
    </header>
  );
}
