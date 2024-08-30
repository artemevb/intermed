import Events from "../_components/News/Events";
import NewsComp from "../_components/News/NewsComp";
import Application from "../_components/Main/Application";


export default async function News() {
 
  return (
    <div>
      <Events />
      <NewsComp />
      <Application />
    </div>
  );
}