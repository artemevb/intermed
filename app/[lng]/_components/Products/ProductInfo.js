import { useTranslations } from 'next-intl';
import { Link } from '../i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage'); // Ensure the 'HomePage' namespace matches the locale structure

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/services">{t('uslugi')}</Link>
          </li>
          <li>
            <Link href="/cases">{t('keysi')}</Link>
          </li>
          <li>
            <Link href="/blog">{t('blog')}</Link>
          </li>
          <li>
            <Link href="/about-us">{t('about_us')}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
