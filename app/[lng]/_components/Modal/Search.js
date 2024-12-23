"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import { useTranslation } from '../../../i18n/client';
import searchIcon from "@/public/svg/tools/search-icon-red-for-search.svg";
import close from "@/public/svg/close.svg";
import arrow from "@/public/svg/tools/arrow-red-right.svg";
import Link from 'next/link';

export default function Search({ setSearchMenu }) {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'search');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [typingTimeout, setTypingTimeout] = useState(null); // Для контроля задержки

  const handleSearch = async () => {
    const trimmedQuery = query.trim(); // Удаляем лишние пробелы

    if (!trimmedQuery) return; // Если запрос пустой или содержит только пробелы, не выполняем запрос

    try {
      const { data } = await axios.get(`https://imed.uz/api/v1/search?query=${encodeURIComponent(trimmedQuery)}`, {
        headers: { 'Accept-Language': lng },
      });

      // Сортировка: сначала Product, затем все остальные
      const products = data.data.filter(item => item.dtoName === 'Product');
      const otherResults = data.data.filter(item => item.dtoName !== 'Product');
      setResults(products.concat(otherResults)); // Продукты будут выше остальных

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
        url = `/products/${item.slug}`;
        break;
      case 'Category':
        url = `/categories/catalog/${item.slug}`;
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

  // Добавление обработчика для клавиши Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Очистка обработчика при размонтировании или закрытии модального окна
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setSearchMenu(false); // Синхронизируем с состоянием родительского компонента
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed h-screen w-full bg-modalBg left-0 top-[70px] mdx:top-[90px] z-[9999]"
          onClick={closeModal} 
        >
          <div
            className="h-[80%] w-full bg-white mdx:pt-2"
            onClick={(e) => e.stopPropagation()} // Предотвращение закрытия при клике внутри модального окна
          >
            <hr className='absolute mt-[62px] mdx:mt-[90px] w-[150%] border-[#E1E1E1]' />
            <div className="h-[100%] w-full max-w-[1400px] mx-auto flex flex-col gap-8 ">
              <div className="flex items-center px-2 py-[20px] mdx:py-7  w-full relative">
                <button onClick={closeModal}>
                  <Image
                    quality={100}
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
                  onChange={handleInputChange}
                />
                <button onClick={handleSearch} >
                  <Image
                    quality={100}
                    src={searchIcon}
                    height={30}
                    width={30}
                    alt="Search Icon"
                    className="w-[20px] h-[20px] mdx:w-[30px] mdx:h-[30px] max-xl:ml-[12px]"
                  />
                </button>
              </div>
              <div className={`flex flex-col gap-[9px] xl:gap-4 ${results.length > 0 ? 'overflow-y-auto' : ''} ml-[10px]`}>
                {results.length === 0 && query.trim() && (
                  <p className="text-gray-400 text-center mt-[12%]">
                    {t('no-results')}
                  </p>
                )}
                {results.map((item) => (
                  <Link
                    key={item.id}
                    href={getLink(item)}
                    onClick={closeModal} // Закрытие при клике на ссылку
                    className="bg-white border-b border-[#E1E1E1] flex gap-4 w-full"
                  >
                    {item.photo && item.photo.url && (
                      <Image
                        quality={100}
                        src={item.photo.url}
                        alt={item.name || item.title}
                        width={200}
                        height={200}
                        className="w-[90px] h-[90px] object-cover mb-2 xl:mb-4"
                      />
                    )}
                    <div className="flex justify-between items-center w-full mb-2 pb-[20px]">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item['name' + lng.charAt(0).toUpperCase() + lng.slice(1)] || item.title}
                        </h3>
                        {item.categoryName && (
                          <p className="text-sm text-gray-400">
                            Category: {item['categoryName' + lng.charAt(0).toUpperCase() + lng.slice(1)]}
                          </p>
                        )}
                        <div>
                          <div className="text-2xl font-semibold">
                            {item.dtoName === 'Partner' ? `${t('products')} ${item.name}` : item.name}
                          </div>
                          {item.dtoName === 'Partner' && (
                            <p className="text-sm text-gray-400 mt-1">
                              {`${t('partner')} `}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="self-center ml-auto">
                        <button className="text-[#E31E24] px-4 py-2 font-extrabold flex items-center">
                          <span className="mdx:hidden">
                            <Image
                              src={arrow}
                              alt="Arrow"
                              width={24}
                              height={24}
                              className="object-contain"
                              quality={100}
                            />
                          </span>
                          <span className="hidden mdx:inline-flex items-center text-[16px] xl:text-[18px]">
                            Перейти
                            <Image
                              src={arrow}
                              alt="Arrow"
                              width={24}
                              height={24}
                              className="ml-2 object-contain"
                              quality={100}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
