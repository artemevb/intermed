import { languages } from './app/i18n/settings';

/** @type {import('next-sitemap').IConfig} */

const siteUrl = 'https://imed.uz';

const alternateRefs = languages.map((lng) => ({
  href: `${siteUrl}/${lng}`,
  hreflang: lng,
}));

export default {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/404', '/500'],
  alternateRefs,
  // Uncomment and configure if you have dynamic routes
  // additionalPaths: async (config) => {
  //   // Your dynamic paths logic
  // },
};
