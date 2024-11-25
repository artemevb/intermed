import Image from "next/image";
import questionsent from "@/public/svg/questionsent.svg";
import { useTranslation } from '../../../i18n/client'
import { useLanguage } from '../../../i18n/locales/LanguageContext';

export default function QuestionSent({ closeModal }) {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'modal-question-sent')

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
            <div className="bg-white p-6 shadow-md w-[90%] max-w-[466px] relative flex flex-col items-center justify-center">
                <div className="w-full max-w-[90px] mdx:max-w-[90px] mb-[30px] mt-[15px]">
                    <Image
                        src={questionsent}
                        width={100}
                        height={100}
                        quality={100}
                        alt="questionsent Icon"
                        className="h-full w-full "
                    />
                </div>
                <h2 className="text-[22px] font-semibold mb-2 mdl:text-[26px] xl:text-[28px] xl:mb-4">{t('your-questions')}</h2>
                <p className="text-[14px] text-gray-500 mb-6 w-full mdx:text-[16px] mdl:text-[17px] xl:text-[18px] flex justify-center">{t('your-answers-1')}<br />{t('your-answers-2')}</p>
                <button
                    type="button"
                    className="w-full mdx:max-w-[224px] bg-[#E94B50] hover:bg-[#EE787C] py-3 px-4 text-white font-semibold mb-3"
                    onClick={closeModal}>
                    {t('ok')}
                </button>
            </div>
        </div>
    );
}
