import FavoriteList from "../_components/Favorites/FavoriteList";
import Application from "../_components/Main/Application";



export default function page() {
  return (
    <div className="w-full bg-white gap-48 pt-12 flex flex-col">
      <FavoriteList />
      <Application />
      <a href="https://interlab.uz/" className="visually-hidden"></a>
      <a href="https://interlab.uz/ru/services" className="visually-hidden"></a>
      <a href="https://interlab.uz/ru/about" className="visually-hidden"></a>
    </div>
  )
}
