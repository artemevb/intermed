export default function sitemap() {
    const lastModified = new Date();
  
    return [
      {
        url: 'https://imed.uz',
        lastModified,
        changeFrequency: 'weekly',
        priority: 1,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru',
            uz: 'https://imed.uz/uz',
            en: 'https://imed.uz/en',
          },
        },
      },
      {
        url: 'https://imed.uz/categories',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/categories',
            uz: 'https://imed.uz/uz/categories',
            en: 'https://imed.uz/en/categories',
          },
        },
      },
      {
        url: 'https://imed.uz/about-company',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/about-company',
            uz: 'https://imed.uz/uz/about-company',
            en: 'https://imed.uz/en/about-company',
          },
        },
      },
      {
        url: 'https://imed.uz/partners',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/partners',
            uz: 'https://imed.uz/uz/partners',
            en: 'https://imed.uz/en/partners',
          },
        },
      },
      {
        url: 'https://imed.uz/news',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/news',
            uz: 'https://imed.uz/uz/news',
            en: 'https://imed.uz/en/news',
          },
        },
      },
      {
        url: 'https://imed.uz/client',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/client',
            uz: 'https://imed.uz/uz/client',
            en: 'https://imed.uz/en/client',
          },
        },
      },
      {
        url: 'https://imed.uz/contacts',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/contacts',
            uz: 'https://imed.uz/uz/contacts',
            en: 'https://imed.uz/en/contacts',
          },
        },
      },
      {
        url: 'https://imed.uz/licenses',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/licenses',
            uz: 'https://imed.uz/uz/licenses',
            en: 'https://imed.uz/en/licenses',
          },
        },
      },
      {
        url: 'https://imed.uz/favorites',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/favorites',
            uz: 'https://imed.uz/uz/favorites',
            en: 'https://imed.uz/en/favorites',
          },
        },
      },
      {
        url: 'https://imed.uz/events',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/events',
            uz: 'https://imed.uz/uz/events',
            en: 'https://imed.uz/en/events',
          },
        },
      },
      {
        url: 'https://imed.uz/equipment',
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            ru: 'https://imed.uz/ru/equipment',
            uz: 'https://imed.uz/uz/equipment',
            en: 'https://imed.uz/en/equipment',
          },
        },
      },
    ]
  }
  