import MainPartners from "../../_components/Partners/MainPartners";
import Application from "../../_components/Main/Application";
import PartnersSlider from "../../_components/Partners/PartnersSlider";
import axios from 'axios';

export default async function PartnerPage({ params }) {
    const { slug, lng } = params;

    let productData = null;
    let productsData = null;

    // Получаем информацию о продукте по slug
    try {
        const response = await axios.get(`https://imed.uz/api/v1/product/${slug}`, {
            headers: {
                'Accept-Language': lng,
            },
        });
        productData = response.data;
    } catch (error) {
        console.error('Failed to fetch product data:', error);
    }

    // Получаем оборудование по slug партнера
    try {
        const response = await axios.get(`https://imed.uz/api/v1/product/all-by-partner-slug/${slug}`, {
            headers: {
                'Accept-Language': lng,
            },
        });
        productsData = response.data.data; // Assuming 'data' is where products are stored
    } catch (error) {
        console.error('Failed to fetch partner products:', error);
    }

    return (
        <div>
            <MainPartners />
            <PartnersSlider data={productsData} />
            <Application />
        </div>
    );
}
