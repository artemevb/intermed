import Application from "@/app/_components/Main/Application";
import TechnicalSupport from "@/app/_components/Products/TechnicalSupport";


export default function page() {
  return (
    <div className="w-full bg-white flex flex-col">
        <TechnicalSupport />
        <Application />
    </div>
  )
}
