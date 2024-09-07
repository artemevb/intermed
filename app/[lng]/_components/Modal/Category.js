import { useEffect, useRef } from 'react';
import CatalogList from '../Catalog/CatalogBar';
import Image from 'next/image';
import close from '@/public/svg/close-gray.svg';
import { useTranslation } from '../../../i18n/client';

export default function Category({
	handleClose,
	allCategories,
	setCategoryID,
	setCatalogID,
	handleCatalogOpen,
	lng,
}) {
	const { t } = useTranslation(lng, 'modal-category');
	const modalRef = useRef(null); // Реф для модального окна

	// Функция для проверки кликов вне модального окна
	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			handleClose(); // Закрыть модальное окно
		}
	};

	// Добавляем и удаляем обработчик кликов
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className='fixed lg:hidden h-screen w-full inset-0 z-[9999] bg-modalBg flex justify-center items-center max-mdx:px-2 px-12 py-12'>
			<div
				className='w-full h-full overflow-y-scroll no-scrollbar bg-white relative px-6 pt-8'
				ref={modalRef} // Привязываем реф к модальному окну
			>
				<button
					onClick={handleClose}
					className='w-6 h-6 absolute right-6 top-8'
				>
					<Image
						src={close}
						width={100}
						height={100}
						quality={100}
						alt='Icon'
						className='h-full w-full'
					/>
				</button>
				<h2 className='mb-8 text-3xl max-mdx:text-2xl font-semibold'>
					{t('category')}
				</h2>
				<CatalogList
					allCategories={allCategories}
					onCatalogOpen={handleCatalogOpen}
					setCategoryID={setCategoryID}
					setCatalogID={setCatalogID}
					lng={lng}
				/>
			</div>
		</div>
	);
}
