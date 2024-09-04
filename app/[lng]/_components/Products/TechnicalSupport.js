'use client'
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext'

export default function TechnicalSupport({ support }) {
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'popular-products-main')

	const formatTextWithNewlines = text => {
		return text.split('\n').map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		))
	}

	return (
		<div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-[10px] flex flex-col gap-2  mb-[100px] mt-[30px] mdx:mt-[40px] mdx:mb-[140px] xl:mt-[60px] xl:mb-[170px]'>
			<h2 className='uppercase text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-semibold'>
				{t('service')}
			</h2>
			{support.map(support => (
				<div key={support.id} className='flex items-center gap-4 pb-[30px] '>
					<div>
						<h2 className='text-[20px] mdx:text-[24px] font-semibold pb-[7px]'>
							{formatTextWithNewlines(support.title)}
						</h2>
						<p className='text-[15px] mdx:text-[20px]'>
							{formatTextWithNewlines(support.text)}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
