// next-sitemap.config.cjs

const { languages } = require('./app/i18n/settings');

const siteUrl = 'https://imed.uz'; // Замените на ваш фактический URL сайта

const alternateRefs = languages.map((lng) => ({
  href: `${siteUrl}/${lng}`,
  hreflang: lng,
}));

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/404', '/500'],
  alternateRefs,
  // Если у вас есть динамические маршруты, вы можете добавить их здесь
  // additionalPaths: async (config) => {
  //   // Ваш код для добавления дополнительных путей
  // },
};
