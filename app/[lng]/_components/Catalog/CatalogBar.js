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

    // Отфильтровываем неактивные категории
    const activeCategories = allCategories.filter((category) => category.active);

    return activeCategories.map(({ id, name, catalogs, slug }) => {
      // Отфильтровываем неактивные подкаталоги
      const activeCatalogs = catalogs.filter((catalog) => catalog.active !== false);

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
