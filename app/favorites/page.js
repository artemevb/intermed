import FavoriteList from "@/app/_components/Favorites/FavoriteList";
import Application from "../_components/Main/Application";
import Map from "../_components/About/Map";


export default function page() {
  return (
    <div className="w-full bg-white gap-48 pt-12 flex flex-col">
        <FavoriteList />
        <Application />
        <Map />
    </div>
  )
}
