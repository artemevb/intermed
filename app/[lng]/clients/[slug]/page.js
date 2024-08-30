import Application from "../../_components/Main/Application";
import TitleMain from "../../_components/Clients/TitleMain";
import Gallery from "../../_components/Clients/Gallery";
import axios from 'axios';

export default async function MainClients({ params }) {
    const { lng, slug } = params;

    // Fetching the client data
    let DataClient = {};
    try {
        const response = await axios.get(`https://imed.uz/api/v1/client/${slug}`, {
            headers: {
                'Accept-Language': lng,
            }
        });
        DataClient = response.data;
    } catch (e) {
        console.log("Error Fetching Client Data:", e);
        DataClient = null;
    }

    if (!DataClient) {
        return <div>Error loading client data.</div>;
    }

    return (
        <div>
            <TitleMain Data={DataClient.data} />
            <Gallery Gallery={DataClient.data.gallery}/>
            <Application />
        </div>
    );
}
