import MainPartners from "../../_components/Partners/MainPartners";
import Application from "../../_components/Main/Application";
import PartnersSlider from "../../_components/Partners/PartnersSlider";
import axios from 'axios';

export default async function PartnerPage({ params }) {
    const { slug, lng } = params;

    let productsData = null;

    // Получаем оборудование по slug партнера
    try {
        const response = await axios.get(`https://imed.uz/api/v1/product/all-by-partner-slug/${slug}`, {
            headers: {
                'Accept-Language': lng,
            },
        });
        productsData = response.data.data; // Assuming 'data' is where products are stored
        console.log(productsData); // Add this to verify the API response
    } catch (error) {
        console.error('Failed to fetch partner products:', error);
    }

    // Add a fallback in case the API returns null or empty
    const fallbackProducts = productsData?.length ? productsData : [];

    return (
        <div>
            <MainPartners />
            <PartnersSlider data={fallbackProducts} /> {/* Ensure data is passed even if empty */}
            <Application />
        </div>
    );
}
