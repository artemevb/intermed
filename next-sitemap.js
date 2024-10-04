// next-sitemap.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://imed.uz',
    generateRobotsTxt: true, // Генерация robots.txt
    sitemapSize: 7000, // Максимальное количество ссылок в одном sitemap.xml
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*', '/api/*'], // Исключение маршрутов
    alternateRefs: [
      {
        href: 'https://imed.uz/en',
        hreflang: 'en',
      },
      {
        href: 'https://imed.uz/ru',
        hreflang: 'ru',
      },
      {
        href: 'https://imed.uz/uz',
        hreflang: 'uz',
      },
    ],
    additionalPaths: async (config) => {
      const dynamicRoutes = await getDynamicRoutes();
      return dynamicRoutes.map(route => ({
        loc: route.loc,
        lastmod: route.lastmod,
      }));
    },
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin' },
        // Добавьте другие политики по необходимости
      ],
      additionalSitemaps: [
        'https://imed.uz/sitemap-0.xml',
        'https://imed.uz/sitemap-1.xml',
        // Добавьте дополнительные sitemap по необходимости
      ],
    },
  };
  
  // Функция для получения динамических маршрутов
  async function getDynamicRoutes() {
    // Пример статических динамических маршрутов (например, блоги)
    const posts = [
      { slug: 'post-1', updatedAt: '2024-04-01' },
      { slug: 'post-2', updatedAt: '2024-04-02' },
      // Добавьте остальные посты
    ];
  
    const languages = ['en', 'ru', 'uz']; // Добавьте другие языки по необходимости
  
    let routes = [];
  
    posts.forEach(post => {
      languages.forEach(lang => {
        routes.push({
          loc: `/${lang}/posts/${post.slug}`,
          lastmod: post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date().toISOString(),
        });
      });
    });
  
    return routes;
  }
  