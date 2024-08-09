import Application from "@/app/_components/Main/Application";
import ProductInfo from "@/app/_components/Products/ProductInfo";
import AlsoTake from "@/app/_components/Products/AlsoTake";
import Similar from "@/app/_components/Products/Similar";
import Recenzii from "@/app/_components/Products/Recenzii";
import VideoReview from "@/app/_components/Products/VideoReview";

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
