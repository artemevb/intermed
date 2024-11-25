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
	lng,
}) {
	const { t } = useTranslation(lng, 'modal-category');
	const modalRef = useRef(null);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			handleClose(); // Закрыть модальное окно
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Function to close modal when a subcategory is clicked
	const shouldCloseModal = (isSubcategory) => {
		if (isSubcategory) {
			handleClose(); // Закрываем окно, если выбрана субкатегория
		}
	};

	return (
		<div className='fixed lg:hidden h-screen w-full inset-0 z-[9999] bg-modalBg flex justify-center items-center max-mdx:px-2 px-12 pt-12 pb-[90px]'>
			<div
				className='w-full h-full overflow-y-scroll no-scrollbar bg-white relative px-6 pt-8'
				ref={modalRef}
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
						alt='close Icon'
						className='h-full w-full'
					/>
				</button>
				<h2 className='mb-8 text-3xl max-mdx:text-2xl font-semibold'>
					{t('category')}
				</h2>
				<CatalogList
					allCategories={allCategories}
					setCategoryID={setCategoryID}
					setCatalogID={setCatalogID}
					lng={lng}
					shouldCloseModal={shouldCloseModal} // Pass callback for closing modal
				/>
			</div>
		</div>
	);
}
