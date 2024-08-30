import FavoriteList from "../_components/Favorites/FavoriteList";
import Application from "../_components/Main/Application";



export default function page() {
  return (
    <div className="w-full bg-white gap-48 pt-12 flex flex-col">
        <FavoriteList />
        <Application />
    </div>
  )
}
