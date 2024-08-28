"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import upGreen from '@/public/svg/arrow-up-green.svg';
import downGray from '@/public/svg/arrow-down-gray.svg';
import { useRouter, useSearchParams, useParams } from 'next/navigation';

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
export default function CatalogList({ allCotegories, onCatalogOpen }) {
  const params = useParams();
  const [openSection, setOpenSection] = useState(null);
  const [selectedCatalogId, setSelectedCatalogId] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const { slug } = params;
    const openSectionId = searchParams.get('openSection');
    const catalogId = searchParams.get('catalogId');

    if (slug && allCotegories) {
      const matchedCategory = allCotegories.data.find(category => category.slug === slug);
      if (matchedCategory) {
        setOpenSection(matchedCategory.id);
        if (!openSectionId || !catalogId) {
          const newUrl = `/categories/catalog/${matchedCategory.slug}?openSection=${matchedCategory.id}&catalogId=${catalogId || ''}`;
          router.replace(newUrl, undefined, { shallow: true });
        }
      }
    }

    if (openSectionId) {
      setOpenSection(Number(openSectionId));
    }

    if (catalogId) {
      setSelectedCatalogId(Number(catalogId));
    }
  }, [params.slug, allCotegories, searchParams, router]);

  const toggleSection = useCallback(
    (id, slug, hasChildren) => {
      const newOpenSection = openSection === id ? null : id;
      setOpenSection(newOpenSection);

      if (newOpenSection) {
        onCatalogOpen(id);
      }

      // When a new section is opened, remove the catalogId from the URL
      const newUrl = `/categories/catalog/${slug}?openSection=${newOpenSection ?? ''}`;
      router.replace(newUrl, undefined, { shallow: true });

      if (!hasChildren) {
        onCatalogOpen(id);
      }
      
      // Clear the selectedCatalogId when a new section is opened
      if (newOpenSection !== openSection) {
        setSelectedCatalogId(null);
      }
    },
    [openSection, router, onCatalogOpen]
  );

  const handleCatalogClick = useCallback(
    (catalogId, slug) => {
      setSelectedCatalogId(catalogId);
      onCatalogOpen(catalogId);

      const newUrl = `/categories/catalog/${slug}?openSection=${openSection ?? ''}&catalogId=${catalogId}`;
      router.replace(newUrl, undefined, { shallow: true });
    },
    [openSection, router, onCatalogOpen]
  );

  const renderedCategories = useMemo(
    () =>
      allCotegories?.data.map(({ id, name, slug, catalogs }) => (
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
                  {catalogs.map(catalogItem => (
                    <div
                      key={catalogItem.id}
                      className={`cursor-pointer ${
                        selectedCatalogId === catalogItem.id
                          ? 'text-red-500'
                          : 'text-black'
                      }`}
                      onClick={() => handleCatalogClick(catalogItem.id, slug)}
                    >
                      {catalogItem.name}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        </div>
      )),
    [allCotegories, openSection, selectedCatalogId, toggleSection, handleCatalogClick]
  );

  return (
    <section className="w-full">
      <div className="flex flex-col w-full">{renderedCategories}</div>
    </section>
  );
}
