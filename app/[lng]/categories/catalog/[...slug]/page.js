import axios from 'axios'
import List from '../../../_components/Catalog/List'
import Application from '../../../_components/Main/Application'

export default async function Page({ params, searchParams }) {
  const { slug, lng } = params;
  
  // Обработка slug как массива
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const categorySlug = slugArray[0] || null;
  const subcategorySlug = slugArray[1] || null;
  
  // Получение всех категорий
  const allCategories = await axios
    .get('https://imed.uz/api/v1/category', {
      headers: {
        'Accept-Language': lng,
      },
    })
    .then((res) => res.data.data)
    .catch(() => []);
  
  // Фильтрация активных категорий
  const activeCategories = allCategories.filter((category) => category.active);
  
  let data = [];
  let catalogID = null;
  
  if (categorySlug) {
    // Поиск категории по slug
    const categoryData = allCategories.find(cat => cat.slug === categorySlug);
    if (categoryData) {
      data = [categoryData];
      
      if (subcategorySlug && subcategorySlug !== 'all') {
        // Поиск субкатегории по slug
        const subcategory = categoryData.catalogs.find(cat => cat.slug === subcategorySlug && cat.active);
        if (subcategory) {
          catalogID = subcategory.id;
        }
      }
      // Если субкатегория 'all', catalogID остаётся null для отображения всех продуктов категории
    }
  }
  
  console.log("Category Slug:", categorySlug);
  console.log("Subcategory Slug:", subcategorySlug);
  console.log("Catalog ID:", catalogID);
  
  return (
    <div className="w-full bg-white flex flex-col">
      <List
        data={data}
        allCategories={activeCategories} // Передача только активных категорий
        selectedCatalogId={catalogID}    // Передача catalogID для фильтрации
      />
      <Application />
    </div>
  );
}
