import Application from "../_components/Main/Application";
import Licenses from "../_components/Licenses/Licenses";

export default function News() {
    return (
        <div>
            <Licenses />
            <Application />
            <a href="https://rmcdeluxe.com/" className="visually-hidden"></a>
            <a href="https://rmcdeluxe.com/ru/blog" className="visually-hidden"></a>
            <a href="https://rmcdeluxe.com/ru/contacts" className="visually-hidden"></a>
        </div>
    );
}