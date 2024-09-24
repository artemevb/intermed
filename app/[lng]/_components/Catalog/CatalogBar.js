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

// Accordion Content Component
const AccordionContent = ({ children }) => (
  <div className="pb-5 px-4">{children}</div>
);

// Main CatalogList Component
export default function CatalogList({ allCategories, setCategoryID, setCatalogID, lng }) {
  const params = useParams();
  const [openSection, setOpenSection] = useState(null);
  const [selectedCatalogId, setSelectedCatalogId] = useState(null);

  useEffect(() => {
    const slug = params.slug;

    // If slug is provided and matches a category, open the corresponding section
    if (slug && allCategories) {
      const matchedCategory = allCategories.find(category => category.slug === slug);
      if (matchedCategory) {
        setOpenSection(matchedCategory.id);
        setCategoryID(matchedCategory.id);
      }
    }
  }, [params.slug, allCategories, setCategoryID]);

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
      } else {
        setSelectedCatalogId(null);
        setCatalogID(null);
      }

      // Always update the URL with the slug, regardless of children
      updateUrl(slug);
    },
    [openSection, setCategoryID, setCatalogID, updateUrl]
  );

  const handleCatalogClick = useCallback(
    (catalogId) => {
      setSelectedCatalogId(catalogId);
      setCatalogID(catalogId);

      // Update URL with the slug when clicking on a catalog item
    },
    [setCatalogID]
  );

  const renderedCategories = useMemo(() => {
    if (!allCategories) {
      return <p>Loading categories...</p>;
    }

    return allCategories.map(({ id, name, catalogs, slug }) => (
      <div key={id} className="w-full">
        <AccordionItem
          title={name}
          isOpen={openSection === id}
          onClick={() => toggleSection(id, slug, catalogs.length > 0)}
          hasChildren={catalogs.length > 0}
        >
          {catalogs.length > 0 && (
            <AccordionContent>
              <div className="flex flex-col gap-5 text-lg font-semibold text-[#252324] w-full">
                {catalogs
                  .sort((a, b) => a.id - b.id) // Sort catalogs by id in ascending order
                  .map(catalogItem => (
                    <div
                      key={catalogItem.id}
                      className={`cursor-pointer ${selectedCatalogId === catalogItem.id
                          ? 'text-red-500'
                          : 'text-black'
                        }`}
                      onClick={() => handleCatalogClick(catalogItem.id)}
                    >
                      ggg
                    </div>
                  ))}

              </div>
            </AccordionContent>
          )}
        </AccordionItem>
      </div>
    ));
  }, [allCategories, openSection, selectedCatalogId, toggleSection, handleCatalogClick]);

  return (
    <section className="w-full">
      <div className="flex flex-col w-full">{renderedCategories}</div>
    </section>
  );
}
