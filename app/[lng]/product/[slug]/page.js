import Application from "../../_components/Main/Application";
import ProductInfo from "../../_components/Products/ProductInfo";
import AlsoTake from "../../_components/Products/AlsoTake";
import Similar from "../../_components/Products/Similar";
import Recenzii from "../../_components/Products/Recenzii";
import VideoReview from "../../_components/Products/VideoReview";

export default function page() {
  return (
    <div className="w-full bg-white flex flex-col gap-56 pt-12 ">
        <ProductInfo />
        <VideoReview/>
        <Recenzii />
        <AlsoTake />
        <Similar />
        <Application />
    </div>
  )
}
