import Application from "../../_components/Main/Application";
import TechnicalSupport from "../../_components/Products/TechnicalSupport";


export default function page() {
  return (
    <div className="w-full bg-white flex flex-col">
        <TechnicalSupport />
        <Application />
    </div>
  )
}
