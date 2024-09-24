// pages/products/[slug]/page.js
import axios from 'axios';
import ProductPageContent from '../ProductPageContent';

export async function generateMetadata({ params }) {
  const { slug, lng } = params;

  let productData = null;

  try {
    const response = await axios.get(`https://imed.uz/api/v1/product/${slug}`, {
      headers: {
        'Accept-Language': lng,
      },
    });

    productData = response.data.data;
  } catch (error) {
    console.error('Не удалось получить данные о продукте:', error);
    return {
      title: 'Продукт не найден',
      description: 'Продукт не найден или произошла ошибка.',
    };
  }

  if (productData) {
    const availability = productData.active ? 'instock' : 'outofstock';
    const imageUrl = productData.gallery[0]?.url || '/default-image.jpg';

    return {
      title: `${productData.name} — Купить в Ташкенте`,
      description: productData.shortDescription || 'Описание недоступно',
      openGraph: {
        title: `${productData.name} — Купить в Ташкенте`,
        description: productData.shortDescription || 'Описание недоступно',
        url: `https://imed.uz/${lng}/products/${productData.slug}`,
        images: [
          {
            url: imageUrl,
            alt: productData.name,
            width: 60,
            height: 60,
          },
        ],
        type: 'website',
        siteName: 'Intermed Innovation',
      },
      twitter: {
        card: 'summary',
        title: `${productData.name} — Купить в Ташкенте`,
        description: productData.shortDescription || 'Описание недоступно',
        images: [imageUrl],
      },
      keywords: productData.name,
      other: {
        'product:availability': availability,
        'og:type': 'product',
      },
    };
  }

  return {
    title: 'Продукт не найден',
    description: 'Продукт не найден или произошла ошибка.',
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
        <h1>Продукт не найден</h1>
        <p>Извините, запрошенный продукт не найден.</p>
      </div>
    );
  }

  return (
    <ProductPageContent productData={productData.data} similarProducts={similarProducts} />
  );
}
