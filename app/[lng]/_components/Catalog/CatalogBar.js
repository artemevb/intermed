"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import upGreen from '@/public/svg/arrow-up-green.svg';
import downGray from '@/public/svg/arrow-down-gray.svg';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '../../../i18n/client';

// Компонент элемента аккордеона
const AccordionItem = ({ title, isOpen, onClick, children, hasChildren }) => (
  <div className="border-t border-b border-solid">
    <summary
      onClick={onClick}
      className={`flex gap-5 py-7 ${
        isOpen ? 'text-redMain' : 'text-black'
      } font-semibold text-xl max-md:max-w-full cursor-pointer`}
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

export default function CatalogList({
  allCategories,
  setCategoryID,
  setCatalogID,
  lng,
  shouldCloseModal = () => {},
}) {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation(lng, 'list-catalog');
  const [openSection, setOpenSection] = useState(null);
  const [selectedCatalogKey, setSelectedCatalogKey] = useState(null);

  // Чтение slug из URL (ожидается массив)
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const categorySlug = slugArray[0] || null;
  const subcategorySlug = slugArray[1] || null;

  // Инициализация состояния при загрузке компонента
  useEffect(() => {
    if (categorySlug) {
      const categoryId = Number(categorySlug.split('-')[0]);
      setOpenSection(categoryId);
      setCategoryID(categoryId);
  
      if (subcategorySlug) {
        if (subcategorySlug === 'all') {
          setSelectedCatalogKey(`${categoryId}-all`);
          setCatalogID(null);
        } else {
          const subcategoryId = Number(subcategorySlug.split('-')[0]);
          setSelectedCatalogKey(`${categoryId}-${subcategoryId}`);
          setCatalogID(subcategoryId);
        }
      } else {
        // Если нет subcategorySlug, считаем, что выбрана "Все продукты"
        setSelectedCatalogKey(`${categoryId}-all`);
        setCatalogID(null);
      }
    } else {
      // Сбрасываем состояние, если categorySlug отсутствует
      setOpenSection(null);
      setCategoryID(null);
      setSelectedCatalogKey(null);
      setCatalogID(null);
    }
  }, [categorySlug, subcategorySlug, setCategoryID, setCatalogID]);
  

  // Функция для обновления URL
  const updateUrl = useCallback(
    (categorySlug, subcategorySlug = null) => {
      let newUrl = `/${lng}/categories/catalog/${categorySlug}`;
      if (subcategorySlug) {
        newUrl += `/${subcategorySlug}`;
      }
      router.push(newUrl);
    },
    [lng, router]
  );

  // Функция для переключения секции аккордеона
  const toggleSection = useCallback(
    (id, slug, hasChildren) => {
      const newOpenSection = openSection === id ? null : id;
      setOpenSection(newOpenSection);

      if (newOpenSection) {
        setCategoryID(id);

        if (!hasChildren) {
          updateUrl(slug);
          shouldCloseModal(true);
        }
      } else {
        // При закрытии категории сбрасываем selectedCatalogKey
        setSelectedCatalogKey(null);
        setCatalogID(null);
      }
    },
    [openSection, setCategoryID, setCatalogID, updateUrl, shouldCloseModal]
  );

  // Функция для обработки клика по подкатегории
  const handleCatalogClick = useCallback(
    (catalogId, catalogSlug, categoryId, categorySlug) => {
      if (catalogId === 0) {
        // Выбрана подкатегория "Все продукты"
        setSelectedCatalogKey(`${categoryId}-all`);
        setCatalogID(null);
        updateUrl(categorySlug); // Не включаем subcategorySlug в URL
      } else {
        setSelectedCatalogKey(`${categoryId}-${catalogId}`);
        setCatalogID(catalogId);
        updateUrl(categorySlug, catalogSlug);
      }
      shouldCloseModal(true);
    },
    [setCatalogID, shouldCloseModal, updateUrl]
  );

  // Рендеринг категорий и подкатегорий
  const renderedCategories = useMemo(() => {
    if (!allCategories) {
      return <p>Loading categories...</p>;
    }

    const activeCategories = allCategories.filter((category) => category.active);

    return activeCategories.map(({ id, name, catalogs, slug }) => {
      const activeCatalogs = catalogs.filter(
        (catalog) => catalog.active !== false
      );

      // Добавляем подкатегорию "Все продукты"
      const catalogsWithAll =
        activeCatalogs.length > 0
          ? [
              { id: 0, slug: 'all', name: t('allProducts'), active: true },
              ...activeCatalogs,
            ]
          : activeCatalogs;

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
                  {catalogsWithAll
                    .sort((a, b) => a.id - b.id)
                    .map((catalogItem) => {
                      const catalogKey =
                        catalogItem.id === 0
                          ? `${id}-all`
                          : `${id}-${catalogItem.id}`;
                      return (
                        <div
                          key={catalogItem.id || catalogItem.slug}
                          className={`cursor-pointer ${
                            selectedCatalogKey === catalogKey
                              ? 'text-red-500'
                              : 'text-black'
                          }`}
                          onClick={() =>
                            handleCatalogClick(
                              catalogItem.id,
                              catalogItem.slug,
                              id,
                              slug
                            )
                          }
                        >
                          {catalogItem.name}
                        </div>
                      );
                    })}
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        </div>
      );
    });
  }, [
    allCategories,
    openSection,
    selectedCatalogKey,
    toggleSection,
    handleCatalogClick,
    t,
  ]);

  return (
    <section className="w-full">
      <div className="flex flex-col w-full">{renderedCategories}</div>
    </section>
  );
}
