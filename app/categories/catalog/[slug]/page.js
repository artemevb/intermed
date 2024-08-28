import List from '@/app/_components/Catalog/List';
import Application from "@/app/_components/Main/Application";
import { getAllCotegories, getCotegoriesWithSlug, getProductWithCatalogID  , getProductCategoryID} from '@/app/lib/api';

export default async function Page({ params, searchParams }) {
  const { slug } = params;
  const id = searchParams?.catalogId || null;
  const getCategoryID = searchParams?.openSection || null

  let productWithCatalogID = [];
  if (id) {
    try {
      productWithCatalogID = await getProductWithCatalogID(id);
    } catch (error) {
      console.error('Error fetching huysos:', error.message);
    }
  }

  let productWithCategoryId = []
  if (getCategoryID) {
    try {
      productWithCategoryId = await getProductCategoryID(getCategoryID);
    }catch (error) {
      console.log(error.message)
    }
    
  }

  let allCotegories = [];
  try {
    allCotegories = await getAllCotegories();
  } catch (error) {
    console.error('Error fetching all categories:', error.message);
  }

  let data = [];
  try {
    data = await getCotegoriesWithSlug({ slug });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }

  return (
    <div className='w-full bg-white flex flex-col'>
      <List data={data} allCotegories={allCotegories} selectedCatalogId={id} productWithCatalogID={productWithCatalogID} productWithCategoryId={productWithCategoryId}/>
      <Application />
    </div>
  );
}
