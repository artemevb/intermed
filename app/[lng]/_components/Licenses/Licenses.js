'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'
import Modal from '../Modal/LicensesItem'

const Licenses = () => {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'awards-and-certificates')
	const [licenses, setLicenses] = useState(null)
	const params = useParams()

	const [selectedLicense, setSelectedLicense] = useState(null)

	useEffect(() => {
		const getAllSertificates = async () => {
			try {
				const response = await axios.get(
					`https://imed.uz/api/v1/certificate/get-all?onlyPhoto=true`,
					{
						headers: { 'Accept-Language': params.lng },
					}
				)
				setLicenses(response.data.data)
			} catch (error) {
				console.error('Failed to fetch news:', error.message)
				setLicenses(null) // Reset state if fetching fails
			}
		}
		getAllSertificates()
	}, [lng])

	const openModal = license => {
		setSelectedLicense(license)
	}

	const closeModal = () => {
		setSelectedLicense(null)
	}

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-4 py-6 bg-white mb-[120px] mdl:mb-[150px]'>
			<h2 className='text-[20px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold mb-6 mt-[40px] mdx:mt-[60px] xl:mt-[80px] uppercase lh'>
				{t('awards-and-certificates')}
			</h2>
			<div className='grid grid-cols-1 gap-6 mdl:grid-cols-2 mdl:gap-3 xl:gap-5 xl:grid-cols-4'>
				{licenses?.map(item => (
					<div
						key={item.id}
						className='w-full h-auto border py-[45px] px-[50px] cursor-pointer'
						onClick={() => openModal(item)}
					>
						<Image
							src={item.imageSrc}
							alt={item.alt}
							layout='responsive'
							objectFit='contain'
							quality={100}
							className='w-full h-full '
						/>
					</div>
				))}
			</div>

			<Modal selectedLicense={selectedLicense} closeModal={closeModal} />
		</div>
	)
}

export default Licenses
