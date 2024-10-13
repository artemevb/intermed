// const { languages } = require('./app/i18n/settings'); // Убедитесь, что путь правильный

// const siteUrl = 'https://imed.uz'; // Замените на ваш фактический URL

// const alternateRefs = languages.map((lng) => ({
//   href: `${siteUrl}/${lng}`,
//   hreflang: lng,
// }));

// module.exports = {
//   siteUrl,
//   generateRobotsTxt: true,
//   exclude: ['/404', '/500'],
//   alternateRefs,
//   // Обновлённая функция transform
//   transform: async (config, path) => {
//     // Исключаем путь '/', так как он будет обработан отдельно
//     if (path === '/index') {
//       return null;
//     }

//     // Используем регулярное выражение для извлечения языкового префикса и базового пути
//     const match = path.match(/^\/(ru|en|uz)(\/.*)?$/);
//     if (!match) {
//       // Если путь не начинается с языкового префикса, пропускаем
//       return null;
//     }

//     const currentLang = match[1];
//     const basePath = match[2] || '/';

//     // Формируем полный URL текущей страницы
//     const loc = `${siteUrl}/${currentLang}${basePath}`;

//     // Генерируем альтернативные ссылки для всех поддерживаемых языков
//     const alternateLinks = config.alternateRefs.map((ref) => ({
//       href: `${ref.href}${basePath}`,
//       hreflang: ref.hreflang,
//     }));

//     return {
//       loc, // Полный URL текущей страницы
//       lastmod: new Date().toISOString(),
//       changefreq: 'daily',
//       priority: 0.7,
//       alternateRefs: alternateLinks,
//     };
//   },
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://imed.uz',
  generateRobotsTxt: true, // опционально, можно отключить
  // ...другие опции
}