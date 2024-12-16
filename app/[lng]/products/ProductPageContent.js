// components/ProductPageContent.js
import ProductInfo from '../_components/Products/ProductInfo';
import Recenzii from '../_components/Products/Recenzii';
import Similar from '../_components/Products/Similar';
import VideoReview from '../_components/Products/VideoReview';
import Application from '../_components/Main/Application';

const ProductPageContent = ({ productData, similarProducts }) => {
  return (
    <div className="w-full bg-white flex flex-col gap-[120px] mdx:gap-[150px] mdl:gap-[180px] 2xl:gap-[200px] pt-12 ">

      <ProductInfo productData={productData} />

      {productData.videos?.length > 0 && (
        <VideoReview videos={productData.videos} />
      )}

      {productData.reviews?.length > 0 && (
        <Recenzii reviews={productData.reviews} />
      )}

      {similarProducts.length > 0 && <Similar similarProducts={similarProducts} />}

      <Application />
    </div>
  );
};

export default ProductPageContent;
