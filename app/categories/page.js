import List from "../_components/Categories/List";
import Application from "../_components/Main/Application";


export default function Home() {
  return (
    <div className="w-full bg-white flex flex-col gap-44 pt-24">
      <List />
      <Application />
    </div>
  );
}
