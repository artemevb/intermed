"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import upGreen from '@/public/svg/arrow-up-green.svg';
import downGray from '@/public/svg/arrow-down-gray.svg';
import { useParams } from 'next/navigation';

// Accordion Item Component
const AccordionItem = ({ title, isOpen, onClick, children, hasChildren }) => (
  <div className="border-t border-b border-solid">
    <summary
      onClick={onClick}
      className={`flex gap-5 py-7 ${isOpen ? 'text-redMain' : 'text-black'} font-semibold text-xl max-md:max-w-full cursor-pointer`}
    >
      <span className="flex-auto">{title}</span>
      {hasChildren && (
        <Image
          src={isOpen ? upGreen : downGray}
          alt="Arrow icon"
          priority
          width={20}
          height={20}
          quality={100}
        />
      )}
    </summary>
    {hasChildren && (
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-screen opacity-100"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="max-h-screen opacity-100"
        leaveTo="max-h-0 opacity-0"
      >
        <div className="overflow-hidden">{children}</div>
      </Transition>
    )}
  </div>
);

const AccordionContent = ({ children }) => (
  <div className="pb-5 px-4">{children}</div>
);

export default function CatalogList({ allCategories, setCategoryID, setCatalogID, lng, shouldCloseModal = () => {} }) {
  const params = useParams();
  const [openSection, setOpenSection] = useState(null);
  const [selectedCatalogId, setSelectedCatalogId] = useState(null);

  // Чтение slug из URL
  const slug = params.slug;

  // Чтение сохраненного состояния из localStorage при загрузке компонента
  useEffect(() => {
    const savedCategoryId = localStorage.getItem('openCategoryId');
    if (savedCategoryId) {
      setOpenSection(Number(savedCategoryId)); // Восстанавливаем состояние открытой категории
    }
  }, []);

  // Сохраняем выбранную категорию в localStorage
  const saveCategoryToLocalStorage = (categoryId) => {
    localStorage.setItem('openCategoryId', categoryId);
  };

  useEffect(() => {
    const slugId = slug?.split('-')[0];
    if (slugId) {
      setCategoryID(slugId);
    }
  }, [slug, setCategoryID]);

  const updateUrl = useCallback((slug) => {
    const newUrl = `/${params.lng}/categories/catalog/${slug}`;
    window.history.pushState({}, '', newUrl); // Update URL without reloading the page
  }, [lng, params.lng]);

  const toggleSection = useCallback(
    (id, slug, hasChildren) => {
      const newOpenSection = openSection === id ? null : id;
      setOpenSection(newOpenSection);

      if (newOpenSection) {
        setCategoryID(newOpenSection);
        saveCategoryToLocalStorage(newOpenSection); // Сохраняем выбранную категорию в localStorage

        if (!hasChildren) {
          shouldCloseModal(true); // Close modal if category has no subcategories
        }
      } else {
        setSelectedCatalogId(null);
        setCatalogID(null);
      }

      updateUrl(slug);
    },
    [openSection, setCategoryID, setCatalogID, updateUrl, shouldCloseModal]
  );

  const handleCatalogClick = useCallback(
    (catalogId) => {
      setSelectedCatalogId(catalogId);
      setCatalogID(catalogId);

      // Close the modal for subcategories
      shouldCloseModal(true);
    },
    [setCatalogID, shouldCloseModal]
  );

  const renderedCategories = useMemo(() => {
    if (!allCategories) {
      return <p>Loading categories...</p>;
    }

    const activeCategories = allCategories.filter((category) => category.active);

    return activeCategories.map(({ id, name, catalogs, slug }) => {
      const activeCatalogs = catalogs.filter((catalog) => catalog.active !== false);

      return (
        <div key={id} className="w-full">
          <AccordionItem
            title={name}
            isOpen={openSection === id} // Проверяем, соответствует ли категория открытой
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
