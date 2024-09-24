// app/[lng]/products/[slug]/page.js

import axios from 'axios';
import Application from '../../_components/Main/Application';
import ProductInfo from '../../_components/Products/ProductInfo';
import Recenzii from '../../_components/Products/Recenzii';
import Similar from '../../_components/Products/Similar';
import VideoReview from '../../_components/Products/VideoReview';

// Функция для генерации мета-тегов на основе данных продукта
export async function generateMetadata({ params }) {
  const { slug, lng } = params;

  let productData = null;

  // Получение данных о продукте
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

    // Используем URL изображения продукта или уменьшенную версию
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
            width: 60,  // Укажите желаемую ширину
            height: 60, // Укажите желаемую высоту
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

  // Резервный вариант
  return {
    title: 'Продукт не найден',
    description: 'Продукт не найден или произошла ошибка.',
  };
}


export default async function Page({ params }) {
  const { slug, lng } = params;

  let productData = null;
  let similarProducts = [];

  // ЗАПРОС НА ПОЛУЧЕНИЕ ПРОДУКТА ПО SLUG
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

  // ЗАПРОС НА ПОЛУЧЕНИЕ ПОХОЖИХ ПРОДУКТОВ
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

  // Если данные о продукте не получены, можно вернуть страницу 404 или сообщение об ошибке
  if (!productData) {
    return (
      <div>
        <h1>Продукт не найден</h1>
        <p>Извините, запрошенный продукт не найден.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white flex flex-col gap-[120px] mdx:gap-[150px] mdl:gap-[180px] 2xl:gap-[200px] pt-12 ">
      {productData && <ProductInfo productData={productData.data} />}

      {productData && productData.data?.videos?.length > 0 && (
        <VideoReview videos={productData.data.videos} />
      )}

      {productData && productData.data?.reviews?.length > 0 && (
        <Recenzii reviews={productData.data.reviews} />
      )}

      {similarProducts.length > 0 && <Similar similarProducts={similarProducts} />}

      <Application />
    </div>
  );
}
