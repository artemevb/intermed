'use client'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import Category from '../Modal/Category'
import CatalogList from './CatalogBar'
import CatalogItem from './Catalogitem'
import Dropdown from './DropDown'
import search_red from "@/public/svg/tools/search-icon-red.svg";
import Image from 'next/image'
import { DNA } from "react-loader-spinner";

export default function List({ data, allCategories }) {
    const lng = useLanguage()
    const { t } = useTranslation(lng, 'list-catalog')

    const [categoryModal, setCategoryModal] = useState(false)
    const [displayAll, setDisplayAll] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all') // Default to 'all'
    const [filteredData, setFilteredData] = useState(null) // Initialize as null

    // IDs for filtering
    const [categoryID, setCategoryID] = useState(0)
    const [catalogID, setCatalogID] = useState(0)

    // Product data
    const [productWithCatalogID, setProductWithCatalogID] = useState([])
    const [productWithCategoryId, setProductWithCategoryId] = useState([])

    // Loading state
    const [loading, setLoading] = useState(true)

    // State for categories with products
    const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);

    // Fetch products and filter categories/subcategories without products
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const allCategoriesWithProducts = await Promise.all(
                    allCategories.map(async (category) => {
                        // Fetch products for the category
                        const response = await axios.get(
                            `https://imed.uz/api/v1/product?category-id=${category.id}`,
                            {
                                headers: { 'Accept-Language': lng },
                            }
                        );
                        const products = response.data.data;

                        // If there are products, return the category with products
                        if (products.length > 0) {
                            return { ...category, products };
                        }

                        // Check subcategories
                        const subcategoriesWithProducts = await Promise.all(
                            category.catalogs.map(async (subcategory) => {
                                const subcategoryResponse = await axios.get(
                                    `https://imed.uz/api/v1/product?catalog-id=${subcategory.id}`,
                                    {
                                        headers: { 'Accept-Language': lng },
                                    }
                                );
                                const subcategoryProducts = subcategoryResponse.data.data;

                                // If there are products in the subcategory, return it with products
                                if (subcategoryProducts.length > 0) {
                                    return { ...subcategory, products: subcategoryProducts };
                                } else {
                                    // If no products, set active: false for the subcategory
                                    return { ...subcategory, active: false };
                                }
                            })
                        );

                        // Filter out inactive subcategories
                        const filteredSubcategories = subcategoriesWithProducts.filter(
                            (subcat) => subcat && subcat.active !== false
                        );

                        if (filteredSubcategories.length > 0) {
                            return { ...category, catalogs: filteredSubcategories };
                        } else {
                            // If no active subcategories, set active: false for the category
                            return { ...category, active: false };
                        }
                    })
                );

                // Filter out inactive categories
                const filteredCategories = allCategoriesWithProducts.filter(
                    (cat) => cat && cat.active !== false
                );

                setCategoriesWithProducts(filteredCategories);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [allCategories, lng]);

    // Fetch products by catalog ID
    useEffect(() => {
        const fetchProductWithCatalogID = async () => {
            if (catalogID) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `https://imed.uz/api/v1/product?catalog-id=${catalogID}`,
                        {
                            headers: { 'Accept-Language': lng },
                        }
                    );
                    setProductWithCatalogID(response.data.data);
                    setProductWithCategoryId([]);
                } catch (error) {
                    console.error('Failed to fetch products by catalog ID:', error.message);
                    setProductWithCatalogID([]);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProductWithCatalogID();
    }, [catalogID, lng]);

    // Fetch products by category ID
    useEffect(() => {
        const fetchProductWithCategoryID = async () => {
            if (categoryID) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `https://imed.uz/api/v1/product?category-id=${categoryID}`,
                        {
                            headers: { 'Accept-Language': lng },
                        }
                    );
                    setProductWithCategoryId(response.data.data);
                    setProductWithCatalogID([]);
                } catch (error) {
                    console.error('Failed to fetch products by category ID:', error.message);
                    setProductWithCategoryId([]);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProductWithCategoryID();
    }, [categoryID, lng]);

    // Initialize filtered data based on selected category
    useEffect(() => {
        const items =
            productWithCatalogID.length > 0
                ? productWithCatalogID
                : productWithCategoryId

        let filteredItems;

        switch (selectedCategory) {
            case 'new':
                filteredItems = items.filter(item => item.new)
                break
            case 'promotions':
                filteredItems = items.filter(item => item.sale)
                break
            case 'all':
            default:
                filteredItems = items
                break
        }

        setFilteredData(filteredItems)
        setLoading(false); // Set loading to false after updating filteredData
    }, [productWithCatalogID, productWithCategoryId, selectedCategory])

    // Handle category selection
    const handleFilter = useCallback(
        (categorySlug) => {
            setSelectedCategory(categorySlug)

            const items =
                productWithCatalogID.length > 0
                    ? productWithCatalogID
                    : productWithCategoryId

            let filteredItems;

            switch (categorySlug) {
                case 'new':
                    filteredItems = items.filter(item => item.new)
                    break
                case 'promotions':
                    filteredItems = items.filter(item => item.sale)
                    break
                case 'all':
                default:
                    filteredItems = items
                    break
            }

            setFilteredData(filteredItems)
            setDisplayAll(false)
        },
        [productWithCatalogID, productWithCategoryId]
    )

    // Handle catalog opening
    const handleCatalogOpen = useCallback((id) => {
        setCatalogID(id);
        setCategoryID(0);
    }, []);

    // Close category modal
    const handleClose = () => setCategoryModal(false)

    // Get filtered data for display
    const getFilteredData = () => filteredData

    // Define categories for filtering
    const categories = [
        { title: t('allProducts'), slug: 'all' },
        { title: t('newProducts'), slug: 'new' },
        { title: t('promotions'), slug: 'promotions' },
    ]

    console.log("Category List", allCategories)

    return (
        <div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col lg:gap-[43px] gap-5 px-2 py-24'>
            {categoryModal && (
                <Category
                    handleClose={handleClose}
                    allCategories={allCategories}
                    setCategoryID={setCategoryID}
                    setCatalogID={setCatalogID}
                    lng={lng}
                />
            )}

            <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-5'>
                <h1 className='text-4xl max-mdx:text2xl font-semibold uppercase'>
                    {t('title-list')}
                </h1>
                <div className='z-[999] flex items-center justify-between'>
                    <button
                        onClick={() => setCategoryModal(true)}
                        className='px-4 py-3 justify-center backdrop-opacity-10 flex items-center lg:hidden w-1/2 border border-gray-300'
                    >
                        {t('categories')}
                        <ChevronDownIcon
                            className='w-5 h-5 ml-2 -mr-1'
                            aria-hidden='true'
                        />
                    </button>
                    <Dropdown handleFilter={handleFilter} />

                    <div className='w-full flex-col gap-2 hidden lg:flex'>
                        <div className='hidden lg:flex flex-col relative items-end'>
                            <div className='overflow-x-scroll gap-4 lg:gap-6 scrollbar-hide touch-auto hidden lg:flex'>
                                {categories.map(({ title, slug }) => (
                                    <button
                                        onClick={() => handleFilter(slug)}
                                        key={slug}
                                        className={`z-10 w-auto text-lg transition-text font-semibold ${selectedCategory === slug
                                                ? 'text-redMain border-b-2 border-b-redMain'
                                                : 'text-neutral-400'
                                            }`}
                                    >
                                        <h3 className='my-2 whitespace-nowrap'>{title}</h3>
                                    </button>
                                ))}
                            </div>
                            <hr className='w-full border-t-2 absolute bottom-0 border-slate-300' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex gap-10 max-lg:justify-center'>
                <div className='w-full max-w-[350px] max-2xl:max-w-[280px] max-lg:hidden'>
                    <CatalogList
                        data={categoriesWithProducts}
                        allCategories={allCategories}
                        onCatalogOpen={handleCatalogOpen}
                        setCategoryID={setCategoryID}
                        setCatalogID={setCatalogID}
                        lng={lng}
                    />
                </div>
                <div>
                    <div className='w-full grid grid-cols-2 3xl:grid-cols-3 gap-3 mdx:gap-4'>
                        {loading || filteredData === null ? (
                            <div className='w-full flex flex-col items-center justify-center lg:mb-[-300px] lg:ml-[350%]'>
                                <DNA
                                    visible={true}
                                    height="120"
                                    width="120"
                                    ariaLabel="dna-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="dna-wrapper"
                                />
                            </div>
                        ) : filteredData.length === 0 ? (
                            <div className="w-full flex flex-col items-center justify-center ml-[55%] lg:mb-[-300px] lg:ml-[100%] 2xl:ml-[170%] lg:gap-[14px] gap-[7px] mt-[100px]">
                                <Image
                                    src={search_red}
                                    width={60}
                                    height={60}
                                    alt="The Wild Oasis logo"
                                    quality={100}
                                    className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]'
                                />
                                <h2 className='w-full text-[18px] lg:text-[24px] font-semibold text-[#E31E24] '>{t('noResults')}</h2>
                            </div>
                        ) : (
                            getFilteredData().map((item, index) => (
                                <div key={item.id || index}>
                                    <CatalogItem
                                        new={item.new}
                                        sale={item.sale}
                                        image={item.gallery[0]?.url}
                                        title={item.name}
                                        description={item.shortDescription}
                                        price={item.originalPrice}
                                        slug={item.slug}
                                        discount={item.discount}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
