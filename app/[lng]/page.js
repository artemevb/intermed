// import Link from 'next/link'
// import { useTranslation } from '../i18n'
// import { Footer } from './components/Footer'

// export default async function Page({ params: { lng } }) {
//   const { t } = await useTranslation(lng)
//   return (
//     <>
//       <h1>{t('title')}</h1>
//       <Link href={`/${lng}/second-page`}>
//         {t('to-second-page')}
//       </Link>
//       <br />
//       <Link href={`/${lng}/client-page`}>
//         {t('to-client-page')}
//       </Link>
//       <Footer lng={lng}/>
//     </>
//   )
// }
"use client"
import Main from "@/app/[lng]/_components/Main/Main";
export default function Home() {
  return (
    <div>
      <Main/>
    </div>
  );
}
