import Map from "@/app/_components/Contacts/Map";
import ContAddress from "@/app/_components/Contacts/ContAddress";
import Representatives from "@/app/_components/Contacts/Representatives";

export default function page() {
    return (
        <div className="w-full bg-white flex flex-col gap-23 ">
            <Map />
            <Representatives />
            <ContAddress />
        </div>
    );
}