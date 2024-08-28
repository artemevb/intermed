"use client";
import { useState, useEffect, useCallback } from "react";
import CatalogList from "./CatalogBar";
import CatalogItem from "./Catalogitem";
import Dropdown from "./DropDown";
import Category from "../Modal/Category";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const List = ({ data, allCotegories, productWithCatalogID, productWithCategoryId }) => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Все товары");
  const [filteredData, setFilteredData] = useState([]);

  // Ma'lumotlar o'zgarishi bilan komponentni qayta render qilish
  useEffect(() => {
    // Initially load data based on the presence of productWithCatalogID or productWithCategoryId
    if (productWithCatalogID?.data && !productWithCategoryId?.data) {
      setFilteredData(productWithCatalogID.data);
    } else if (!productWithCatalogID?.data && productWithCategoryId?.data) {
      setFilteredData(productWithCategoryId.data);
    } else if (productWithCatalogID?.data && productWithCategoryId?.data) {
      setFilteredData(productWithCatalogID.data); // Prioritize CatalogID data if both are present
    } else {
      setFilteredData([]);
    }
  }, [productWithCatalogID, productWithCategoryId]);

  // Handle filter changes
  const handleFilter = useCallback((category) => {
    setSelectedCategory(category);
  
    let items = productWithCatalogID?.data || productWithCategoryId?.data || [];
  
    switch (category) {
      case "Новинки":
        setFilteredData(items.filter((item) => item.new));
        break;
      case "Акции":
        setFilteredData(items.filter((item) => item.sale));
        break;
      case "Все товары":
      default:
        setFilteredData(items);
        break;
    }
    setDisplayAll(false);
  }, [productWithCatalogID, productWithCategoryId]);

  // Clear productWithCategoryId data and use productWithCatalogID data
  const handleCatalogOpen = useCallback((id) => {
    if (productWithCatalogID?.data && id === productWithCatalogID.catalogId) {
      setFilteredData(productWithCatalogID.data);
    } else if (productWithCategoryId?.data && id === productWithCategoryId.categoryId) {
      setFilteredData(productWithCategoryId.data);
    } else {
      setFilteredData([]); // Clear data if no matching ID
    }
  }, [productWithCatalogID, productWithCategoryId]);

  const handleClose = () => setCategoryModal(false);
  const handleLoadMore = () => setDisplayAll(true);

  // Get filtered data for rendering
  const getFilteredData = () => displayAll ? filteredData : filteredData.slice(0, 10);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:gap-20 gap-5 px-2 py-24">
      {categoryModal && <Category handleClose={handleClose} allCotegories={allCotegories} />}
      
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-5">
        <h1 className="text-3xl max-mdx:text2xl font-semibold">КАТАЛОГ</h1>
        <div className="z-[999] flex items-center justify-between">
          <button
            onClick={() => setCategoryModal(true)}
            className="px-4 py-3 justify-center backdrop-opacity-10 flex items-center lg:hidden w-1/2 border border-gray-300"
          >
            Категории
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          </button>
          <Dropdown handleFilter={handleFilter} />

          <div className="w-full flex-col gap-2 hidden lg:flex">
            <div className="hidden lg:flex flex-col relative items-end">
              <div className="overflow-x-scroll gap-4 lg:gap-6 scrollbar-hide touch-auto hidden lg:flex">
                {["Все товары", "Новинки", "Акции"].map((category) => (
                  <button
                    onClick={() => handleFilter(category)}
                    key={category}
                    className={`z-10 w-auto text-lg transition-text font-semibold ${
                      selectedCategory === category
                        ? "text-redMain border-b-2 border-b-redMain"
                        : "text-neutral-400"
                    }`}
                  >
                    <h3 className="my-2 whitespace-nowrap">{category}</h3>
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
            allCotegories={allCotegories}
            onCatalogOpen={handleCatalogOpen}
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
              null
            )}
         
          </div>
          {!displayAll && filteredData.length > 10 && (
            <div className="flex justify-center mt-[50px] mdx:mt-[70px]">
              <button
                className="border p-3 text-[14px] mdx:text-[16px] px-[50px] hover:bg-[#F9D2D3] font-bold"
                onClick={handleLoadMore}
              >
                Загрузить еще
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
