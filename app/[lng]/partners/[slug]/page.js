import MainPartners from "../../_components/Partners/MainPartners";
import Application from "../../_components/Main/Application";
import PartnersSlider from "../../_components/Partners/PartnersSlider";
import axios from 'axios';


export default async function PartnerPage({ params }) {
    const { slug, lng } = params

    let productData = null

    // GET PRODUCT WITH SLUG
    try {
        const response = await axios.get(`https://imed.uz/api/v1/product/${slug}`, {
            headers: {
                'Accept-Language': lng,
            },
        })

        productData = response.data
    } catch (error) {
        console.error('Failed to fetch product data:', error)
    }
    let productsData = null

    // GET PRODUCT WITH SLUG
    try {
        const response = await axios.get(`https://imed.uz/api/v1/product`, {
            headers: {
                'Accept-Language': lng,
            },
        })

        productsData = response.data.data
    } catch (error) {
        console.error('Failed to fetch product data:', error)
    }

    return (
        <div>
            <MainPartners />
            <PartnersSlider data={productsData} />
            <Application />
        </div>
    );
}


