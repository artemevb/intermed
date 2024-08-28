import List from "../_components/Categories/List";
import Application from "../_components/Main/Application";
import { getAllCotegories } from '../lib/api';

export default async function Home() {
  const data = await getAllCotegories();
  
  return (
    <div className="w-full bg-white flex flex-col gap-44 pt-[40px] mdx:pt-[60px]">
      <List  data={data}/>
      <Application />
    </div>
  );
}
