import Image from "next/image";
import close from "@/public/svg/close.svg";
import fileIcon from "@/public/svg/filered.svg";
import { useTranslation } from '../../../i18n/client';
import { useLanguage } from '../../../i18n/locales/LanguageContext';

const Modal = ({ selectedAttachedFiles, closeModal }) => {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'modal-attached-files');

    // Проверка, что selectedAttachedFiles существует
    if (!selectedAttachedFiles) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999] overflow-y-auto" onClick={closeModal}>
            <div className="bg-white max-w-[600px] w-full relative mx-4 my-4 flex flex-col overflow-y-auto max-h-full no-scrollbar xl:h-auto" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-3 right-3 mdx:right-4 xl:top-4 xl:right-3">
                    <Image src={close} quality={100} alt="close icon" width={24} height={24} />
                </button>
                <div className="px-4 mdx:px-6 my-[30px] xl:px-8 xl:my-6">
                    <h3 className="font-bold text-[22px] mdx:text-[24px] xl:text-[30px]">
                        {t ? t('attached-files') : 'Loading...'}
                    </h3>
                    <div className="mt-4 space-y-4">
                        {selectedAttachedFiles.map((file) => (
                            <div key={file.id} className="relative bg-[#F6F8F9] flex items-center justify-between p-4">
                                <div className="flex items-center">
                                    <Image quality={100} src={fileIcon} alt="file icon" width={24} height={24} className="mr-3" />
                                    <p className="text-lg font-medium">{file.name}</p>
                                </div>
                                <p className="text-sm text-[#BABABA]">{file.size}</p>
                                <a
                                    href={file.downloadLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 w-full h-full"
                                    style={{ opacity: 0 }}
                                >
                                    {t ? t('download') : 'Download'}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
