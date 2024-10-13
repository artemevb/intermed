
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://imed.uz',
  generateRobotsTxt: true, // опционально, можно отключить
  // ...другие опции
}