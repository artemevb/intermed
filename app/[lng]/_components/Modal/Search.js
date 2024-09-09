"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import { useTranslation } from '../../../i18n/client';
import searchIcon from "@/public/svg/tools/search-icon-red-for-search.svg";
import close from "@/public/svg/close.svg";
import arrow from "@/public/svg/tools/arrow-red-right.svg";

export default function Search() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'search')
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [typingTimeout, setTypingTimeout] = useState(null); // Для контроля задержки

  const handleSearch = async () => {
    const trimmedQuery = query.trim(); // Удаляем лишние пробелы

    if (!trimmedQuery) return; // Если запрос пустой или содержит только пробелы, не выполняем запрос

    try {
      const { data } = await axios.get(`http://213.230.91.55:8130/v1/search?query=${encodeURIComponent(trimmedQuery)}`, {
        headers: { 'Accept-Language': lng },
      });
      setResults(data.data);
    } catch (error) {
      console.error('Error fetching search results:', error.message);
      setResults([]);
    }
  };


  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }


    setTypingTimeout(setTimeout(() => {
      if (newQuery.trim()) {
        handleSearch();
      }
    }, 500));
  };

  const getLink = (item) => {
    let url = '';
    switch (item.dtoName) {
      case 'Product':
        url = `/product/${item.slug}`;
        break;
      case 'Category':
        url = `/categories/${item.slug}`;
        break;
      case 'Catalog':
        url = `/categories/`;
        break;
      case 'New':
        url = `/news/${item.slug}`;
        break;
      case 'Partner':
        url = `/partners/${item.slug}`;
        break;
      case 'Event':
        url = `/events/${item.slug}`;
        break;
      default:
        url = '#';
        break;
    }
    return url;
  };

  const getTypeLabel = (dtoName) => {
    switch (dtoName) {
      case 'Product':
        return 'Product';
      case 'New':
        return 'News';
      case 'Partner':
        return 'Partner';
      case 'Catalog':
        return 'Catalog';
      default:
        return '';
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed h-screen w-full bg-modalBg left-0 top-[70px] mdx:top-[89px] z-[9999999]">
          <div className="h-[80%] w-full bg-white mdx:pt-2 ">
            <div className="h-[100%] w-full max-w-[1400px] mx-auto flex flex-col gap-8 ">
              <div className="flex items-center p-[20px] mdx:p-7  w-full border-b">
                <button onClick={closeModal}>
                  <Image
                    src={close}
                    height={30}
                    width={30}
                    alt="Close Icon"
                    className="w-[20px] h-[20px]  mdx:w-[26px] mdx:h-[26px] mr-[12px]"
                  />
                </button>
                <input
                  type="text"
                  placeholder={t('placeholder')}
                  className="bg-transparent outline-none flex-1 text-[#252324] placeholder-gray-400 text-[18px] mdx:text-[20px] xl:text-[24px]"
                  value={query}
                  onChange={handleInputChange} // Изменяемый метод
                />
                <button onClick={handleSearch}>
                  <Image
                    src={searchIcon}
                    height={30}
                    width={30}
                    alt="Search Icon"
                    className="w-[20px] h-[20px] mdx:w-[30px] mdx:h-[30px]"
                  />
                </button>
              </div>
              <div className="flex flex-col gap-[9px] xl:gap-4 overflow-y-scroll ml-[10px]">
                {results.length === 0 && query.trim() && ( // Если результатов нет и запрос не пустой
                  <p className="text-gray-400 text-center mt-[12%]">
                    {t('no-results')} {/* Добавьте перевод для текста "Ничего не найдено" */}
                  </p>
                )}
                {results.map((item) => (
                  <a
                    key={item.id}
                    href={getLink(item, lng)} // Передаем lng в getLink
                    className="bg-white border-b border-[#E1E1E1] flex gap-4 w-full"
                  >
                    {item.photo && item.photo.url && (
                      <Image
                        src={item.photo.url}
                        alt={item.name || item.title}
                        width={200}
                        height={200}
                        className="w-[90px] h-[90px] object-cover mb-2 xl:mb-4"
                      />
                    )}
                    <div className="flex justify-between items-center w-full mb-2 xl:mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item['name' + lng.charAt(0).toUpperCase() + lng.slice(1)] || item.title}
                        </h3>
                        {item.categoryName && (
                          <p className="text-sm text-gray-400">
                            Category: {item['categoryName' + lng.charAt(0).toUpperCase() + lng.slice(1)]}
                          </p>
                        )}
                        <p className="text-sm text-gray-400">{getTypeLabel(item.dtoName)}</p>
                      </div>
                      <a href={getLink(item, lng)} className="self-center ml-auto"> {/* Также передаем lng здесь */}
                        <button className="text-[#E31E24] px-4 py-2 font-extrabold flex items-center">
                          <span className="mdx:hidden">
                            <Image
                              src={arrow}
                              alt="Arrow"
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </span>
                          <span className="hidden mdx:inline-flex items-center text-[16px] xl:text-[18px]">
                            Перейти
                            <Image
                              src={arrow}
                              alt="Arrow"
                              width={24}
                              height={24} // Те же размеры для стрелки рядом с текстом
                              className="ml-2 object-contain"
                            />
                          </span>
                        </button>
                      </a>
                    </div>
                  </a>
                ))}
              </div>



            </div>
          </div>
        </div>
      )}
    </>
  );
}
