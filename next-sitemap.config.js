// next-sitemap.config.js

const { languages } = require('./app/i18n/settings'); // Убедитесь, что путь правильный

const siteUrl = 'https://imed.uz'; // Замените на ваш фактический URL

const alternateRefs = languages.map((lng) => ({
  href: `${siteUrl}/${lng}`,
  hreflang: lng,
}));

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/404', '/500'],
  alternateRefs,
  // Добавляем функцию transform для корректного формирования записей
  transform: async (config, path) => {
    // Исключаем путь '/', так как он будет обработан отдельно
    if (path === '/index') {
      return null;
    }

    return {
      loc: path, // Локальный путь
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
      alternateRefs: config.alternateRefs.map((ref) => ({
        href: `${ref.href}${path}`,
        hreflang: ref.hreflang,
      })),
    };
  },
};
