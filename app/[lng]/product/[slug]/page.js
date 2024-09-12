import axios from 'axios';
import Application from '../../_components/Main/Application';
import ProductInfo from '../../_components/Products/ProductInfo';
import Recenzii from '../../_components/Products/Recenzii';
import Similar from '../../_components/Products/Similar';
import VideoReview from '../../_components/Products/VideoReview';

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

  return (
    <div className="w-full bg-white flex flex-col gap-[120px] mdx:gap-[150px] mdl:gap-[180px] 2xl:gap-[200px] pt-12 ">
      {productData && productData.data?.videos?.length > 0 && (
        <VideoReview videos={productData.data.videos} />
      )}

      {productData && <ProductInfo productData={productData.data} />}

      {productData && productData.data?.reviews?.length > 0 && (
        <Recenzii reviews={productData.data.reviews} />
      )}

      {similarProducts.length > 0 && <Similar similarProducts={similarProducts} />}

      <Application />
    </div>
  );
}
