import axios from 'axios';
import ProductPageContent from '../ProductPageContent';
import en from '../../../i18n/locales/en/product-page.json';
import ru from '../../../i18n/locales/ru/product-page.json';
import uz from '../../../i18n/locales/uz/product-page.json';

const translations = {
  en,
  ru,
  uz,
};

export async function generateMetadata({ params }) {
  const { slug, lng } = params;
  const t = translations[lng] || translations['ru'];

  let productData = null;

  try {
    const response = await axios.get(`https://imed.uz/api/v1/product/${slug}`, {
      headers: {
        'Accept-Language': lng,
      },
    });

    productData = response.data;
  } catch (error) {
    console.error('Не удалось получить данные о продукте:', error);
    return {
      title: 'Продукт не найден',
      description: 'Продукт не найден или произошла ошибка.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  if (productData && productData.data) {
    const data = productData.data;
    const availability = data.active ? 'instock' : 'outofstock';
    const imageUrl = data.gallery[0]?.url || '/default-image.jpg';
    const pageUrl = `https://imed.uz/${lng}/products/${data.slug}`;

    return {
      title: `${data.name} — ${t.buy}`,
      description: data.shortDescription || 'Описание недоступно',
      openGraph: {
        title: `${data.name} — ${t.buy}`,
        description: data.shortDescription || 'Описание недоступно',
        url: pageUrl,
        images: [
          {
            url: imageUrl,
            alt: data.name,
            width: 60,
            height: 60,
          },
        ],
        type: 'website',
        siteName: 'Intermed Innovation',
      },
      twitter: {
        card: 'summary',
        title: `${data.name} — ${t.buy}`,
        description: data.shortDescription || 'Описание недоступно',
        images: [imageUrl],
      },
      keywords: data.name,
      other: {
        'product:availability': availability,
        'og:type': 'product',
      },
      alternates: {
        canonical: pageUrl,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: 'Продукт не найден',
    description: 'Продукт не найден или произошла ошибка.',
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function Page({ params }) {
  const { slug, lng } = params;

  let productData = null;
  let similarProducts = [];

  try {
    const response = await axios.get(`https://imed.uz/api/v1/product/${slug}`, {
      headers: {
        'Accept-Language': lng,
      },
    });
    productData = response.data;
  } catch (error) {
    console.error('Не удалось получить данные о продукте:', error);
  }

  try {
    const response = await axios.get(`https://imed.uz/api/v1/product/${slug}?similar=true`, {
      headers: {
        'Accept-Language': lng,
      },
    });
    similarProducts = response.data?.data || [];
  } catch (error) {
    console.error('Не удалось получить похожие продукты:', error);
  }

  if (!productData) {
    return (
      <div>
        <h2>Продукт не найден</h2>
        <p>Извините, запрошенный продукт не найден.</p>
      </div>
    );
  }

  return (
    <ProductPageContent productData={productData.data} similarProducts={similarProducts} />
  );
}
