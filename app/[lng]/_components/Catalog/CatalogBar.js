'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import upGreen from '@/public/svg/arrow-up-green.svg';
import downGray from '@/public/svg/arrow-down-gray.svg';
import { useRouter, usePathname } from 'next/navigation';
import AccordionItem from './AccordionItem'; // Вынесено в отдельный файл

// Accordion Content Component
const AccordionContent = ({ children }) => (
  <div className="pb-5 px-4">
    {children}
  </div>
);

// Main CatalogList Component
export default function CatalogList({
  allCategories,
  setCategoryID,
  setCatalogID,
  lng,
  handleClose,
  currentCategoryId,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState(null);
  const [selectedCatalogId, setSelectedCatalogId] = useState(null);
  // Инициализация открытой секции на основе выбранной категории или URL
  useEffect(() => {
    if (currentCategoryId) {
      setOpenSection(currentCategoryId);
      setCategoryID(currentCategoryId);
    } else {
      const slug = pathname.split('/').pop(); // Предполагается, что slug в конце URL
      if (slug && allCategories) {
        const matchedCategory = allCategories.find(
          (category) => category.slug === slug
        );
        if (matchedCategory) {
          setOpenSection(matchedCategory.id);
          setCategoryID(matchedCategory.id);
        }
      }
    }
  }, [currentCategoryId, pathname, allCategories, setCategoryID]);

  // Обновление URL
  const updateUrl = useCallback(
    (slug) => {
      if (!lng) {
        console.error('Language is undefined');
        return;
      }
      const newUrl = `/${lng}/categories/catalog/${slug}`;
      router.push(newUrl);
    },
    [router, lng]
  );

  // Проверка мобильного экрана
  const isMobileView = () =>
    typeof window !== 'undefined' && window.innerWidth < 1024;

  // Переключение секций категорий
  const toggleSection = useCallback(
    (id, slug, hasChildren) => {
      const newOpenSection = openSection === id ? null : id;
      setOpenSection(newOpenSection);
  
      if (newOpenSection) {
        setCategoryID(newOpenSection);
      } else {
        setSelectedCatalogId(null);
        setCatalogID(null);
      }
  
      // Проверяем, что `lng` и `slug` не undefined
      if (!lng || !slug) {
        console.error("Missing language or slug:", { lng, slug });
        return;
      }
  
      // Обновление URL с помощью Next.js Router
      const newUrl = `/${lng}/categories/catalog/${slug}`;
      router.push(newUrl); // Меняем URL при переключении категории
  
      // Условие для закрытия модального окна
      if (!hasChildren && isMobileView()) {
        handleClose(); // Close the modal immediately if there are no subcategories
      }
    },
    [openSection, setCategoryID, setCatalogID, handleClose, router, lng]
  );
  
  // Обработка клика по каталогу (subcategory)
  const handleCatalogClick = useCallback(
    (catalogId) => {
      setSelectedCatalogId(catalogId);
      setCatalogID(catalogId);
  
      // Закрытие модального окна на мобильных устройствах при выборе подкаталога
      if (isMobileView()) {
        handleClose(); // Close the modal after selecting a subcategory
      }
    },
    [setCatalogID, handleClose]
  );
  

  // Рендеринг категорий
  const renderedCategories = useMemo(() => {
    if (!allCategories) {
      return <p>Loading categories...</p>;
    }

    // Фильтрация активных категорий
    const activeCategories = allCategories.filter((category) => category.active);

    return activeCategories.map(({ id, name, catalogs, slug }) => {
      // Фильтрация активных подкаталогов
      const activeCatalogs = catalogs.filter(
        (catalog) => catalog.active !== false
      );

      return (
        <div key={id} className="w-full">
          <AccordionItem
            title={name}
            isOpen={openSection === id}
            onClick={() => toggleSection(id, slug, activeCatalogs.length > 0)}
            hasChildren={activeCatalogs.length > 0}
          >
            {activeCatalogs.length > 0 && (
              <AccordionContent>
                <div className="flex flex-col gap-5 text-lg font-semibold text-[#252324] w-full">
                  {activeCatalogs
                    .sort((a, b) => a.id - b.id)
                    .map((catalogItem) => (
                      <div
                        key={catalogItem.id}
                        className={`cursor-pointer ${selectedCatalogId === catalogItem.id
                            ? 'text-red-500'
                            : 'text-black'
                          }`}
                        onClick={() => handleCatalogClick(catalogItem.id)}
                      >
                        {catalogItem.name}
                      </div>
                    ))}
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        </div>
      );
    });
  }, [allCategories, openSection, selectedCatalogId, toggleSection, handleCatalogClick]);

  return (
    <section className="w-full">
      <div className="flex flex-col w-full">{renderedCategories}</div>
    </section>
  );
}
