"use client";
import { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import CatalogList from "./CatalogBar";
import CatalogItem from "./Catalogitem";
import Dropdown from "./DropDown";
import Category from "../Modal/Category";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function List({ data, allCategories }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'list-catalog');

  const [categoryModal, setCategoryModal] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to 'all'
  const [filteredData, setFilteredData] = useState([]);
  // IDs for filtering
  const [categoryID, setCategoryID] = useState(0);
  const [catalogID, setCatalogID] = useState(0);
  // Data for products
  const [productWithCatalogID, setProductWithCatalogID] = useState([]);
  const [productWithCategoryId, setProductWithCategoryId] = useState([]);
  console.log(categoryID , catalogID)

  // Fetch products based on catalog ID
  useEffect(() => {
    const fetchProductWithCatalogID = async () => {
      if (catalogID) {
        try {
          const response = await axios.get(`http://213.230.91.55:8130/v1/product?catalog-id=${catalogID}`, {
            headers: { 'Accept-Language': lng },
          });
          setProductWithCatalogID(response.data.data);
        } catch (error) {
          console.error('Failed to fetch products by catalog ID:', error.message);
          setProductWithCatalogID([]);
        }
      }
    };

    fetchProductWithCatalogID();
  }, [catalogID, lng]);

  // Fetch products based on category ID
  useEffect(() => {
    const fetchProductWithCategoryID = async () => {
      if (categoryID) {
        try {
          const response = await axios.get(`http://213.230.91.55:8130/v1/product?category-id=${categoryID}`, {
            headers: { 'Accept-Language': lng },
          });
          setProductWithCategoryId(response.data.data);
        } catch (error) {
          console.error('Failed to fetch products by category ID:', error.message);
          setProductWithCategoryId([]);
        }
      }
    };

    fetchProductWithCategoryID();
  }, [categoryID, lng]);

  // Initialize filtered data based on the selected category
  useEffect(() => {
    const items = productWithCatalogID.length > 0 ? productWithCatalogID : productWithCategoryId;

    switch (selectedCategory) {
      case 'new':
        setFilteredData(items.filter(item => item.new));
        break;
      case 'promotions':
        setFilteredData(items.filter(item => item.sale));
        break;
      case 'all':
      default:
        setFilteredData(items);
        break;
    }
  }, [productWithCatalogID, productWithCategoryId, selectedCategory]);

  // Handle category selection
  const handleFilter = useCallback((categorySlug) => {
    setSelectedCategory(categorySlug);

    const items = productWithCatalogID.length > 0 ? productWithCatalogID : productWithCategoryId;

    switch (categorySlug) {
      case 'new':
        setFilteredData(items.filter(item => item.new));
        break;
      case 'promotions':
        setFilteredData(items.filter(item => item.sale));
        break;
      case 'all':
      default:
        setFilteredData(items);
        break;
    }

    setDisplayAll(false);
  }, [productWithCatalogID, productWithCategoryId]);

  // Handle catalog opening logic
  const handleCatalogOpen = useCallback((id) => {
    setCatalogID(id);
  }, []);

  // Toggle category modal
  const handleClose = () => setCategoryModal(false);

  // Load more items
  const handleLoadMore = () => setDisplayAll(true);

  // Get filtered data for rendering
  const getFilteredData = () => displayAll ? filteredData : filteredData.slice(0, 10);

  // Category definitions for filtering
  const categories = [
    { title: t('allProducts'), slug: 'all' },
    { title: t('newProducts'), slug: 'new' },
    { title: t('promotions'), slug: 'promotions' },
  ];

  return (
    <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto flex flex-col lg:gap-20 gap-5 px-2 py-24">
      {categoryModal && (
        <Category 
          handleClose={handleClose} 
          allCategories={allCategories} 
          setCategoryID={setCategoryID}
          setCatalogID={setCatalogID}
          lng={lng} 
        />
      )}
      
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-5">
        <h1 className="text-3xl max-mdx:text2xl font-semibold uppercase">{t('title-list')}</h1>
        <div className="z-[999] flex items-center justify-between">
          <button
            onClick={() => setCategoryModal(true)}
            className="px-4 py-3 justify-center backdrop-opacity-10 flex items-center lg:hidden w-1/2 border border-gray-300"
          >
            {t('categories')}
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          </button>
          <Dropdown handleFilter={handleFilter} />

          <div className="w-full flex-col gap-2 hidden lg:flex">
            <div className="hidden lg:flex flex-col relative items-end">
              <div className="overflow-x-scroll gap-4 lg:gap-6 scrollbar-hide touch-auto hidden lg:flex">
                {categories.map(({ title, slug }) => (
                  <button
                    onClick={() => handleFilter(slug)}
                    key={slug}
                    className={`z-10 w-auto text-lg transition-text font-semibold ${
                      selectedCategory === slug
                        ? "text-redMain border-b-2 border-b-redMain"
                        : "text-neutral-400"
                    }`}
                  >
                    <h3 className="my-2 whitespace-nowrap">{title}</h3>
                  </button>
                ))}
              </div>
              <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-10">
        <div className="w-full max-w-[350px] max-2xl:max-w-[280px] max-lg:hidden">
          <CatalogList
            data={data}
            allCategories={allCategories}
            onCatalogOpen={handleCatalogOpen}
            setCategoryID={setCategoryID}
            setCatalogID={setCatalogID}
          />
        </div>
        <div>
          <div className="w-full grid grid-cols-1 mdl:grid-cols-2 3xl:grid-cols-3 gap-4">
            {getFilteredData().length > 0 ? (
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
            ) : (
              <p>{t('noResults')}</p>
            )}
          </div>
          {!displayAll && filteredData.length > 10 && (
            <div className="flex justify-center mt-[50px] mdx:mt-[70px]">
              <button
                className="border p-3 text-[14px] mdx:text-[16px] px-[50px] hover:bg-[#F9D2D3] font-bold"
                onClick={handleLoadMore}
              >
                {t('load')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
