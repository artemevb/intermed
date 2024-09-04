"use client"
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../i18n/locales/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import mindrayDC60 from '@/public/images/Face.png';


const reviews = [
    {
        doctor: 'Иванов Иван Иванович',
        title: 'Врач УЗИ',
        summary: 'Наше медицинское учреждение недавно приобрело УЗИ-аппарат Resona R9, и я хотел бы поделиться своими впечатлениями об этом устройстве.',
        advantages: [
            'Исключительное качество изображения: Resona R9 демонстрирует превосходное качество изображения благодаря использованию передовых технологий, таких как ZST+ (Zone Sonography Technology). Это позволяет нам получать четкие и детализированные изображения, что существенно улучшает точность диагностики.',
            'Инновационные функции: Аппарат оснащен множеством современных функций, включая эластографию, 3D/4D-визуализацию и автоматическое измерение параметров. Эти функции расширяют возможности диагностики и делают его универсальным инструментом для различных медицинских исследований.',
            'Удобный интерфейс: Resona R9 имеет интуитивно понятный интерфейс, что облегчает его использование. Быстрый доступ к настройкам и параметрам позволяет врачу эффективно и без задержек проводить исследования.'
        ],
        disadvantages: [
            'Высокая стоимость: Resona R9 относится к премиум-классу, и его стоимость может быть значительной для небольших клиник. Однако, учитывая его возможности и функциональность, это можно рассматривать как долгосрочную инвестицию в качество диагностики.',
            'Обучение персонала: Из-за большого количества функций и возможностей, новому персоналу может потребоваться время для полного освоения аппарата. Важно обеспечить дополнительное обучение для максимального использования потенциала устройства.'
        ],
        conclusion: 'Resona R9 – это высокотехнологичный УЗИ-аппарат, который впечатляет своими возможностями и качеством изображения. Несмотря на высокую стоимость и необходимость обучения персонала, он обладает широкими диагностическими возможностями и разнообразит клинические потребности. Этот аппарат значительно повышает уровень диагностики в нашей клинике, и я рекомендую его для медицинских учреждений, стремящихся к наивысшему качеству диагностики и улучшению медицинских исследований.'
    },
    {
        doctor: 'Петров Петр Петрович',
        title: 'Врач УЗИ',
        summary: 'Недавно мы ввели в эксплуатацию УЗИ-аппарат Resona R9 в нашем медицинском центре, и я хочу поделиться своим опытом использования.',
        advantages: [
            'Высокое качество изображения: Resona R9 использует технологии ZST+ (Zone Sonography Technology), что позволяет получать четкие и детализированные изображения.',
            'Многофункциональность: Аппарат оснащен эластографией, 3D/4D-визуализацией и автоматическим измерением параметров, что расширяет диагностические возможности.',
            'Удобный интерфейс: Интуитивно понятный интерфейс упрощает использование и настройку аппарата.'
        ],
        disadvantages: [
            'Стоимость: Высокая стоимость может стать проблемой для небольших клиник.',
            'Обучение: Персоналу потребуется время на обучение для полного освоения всех возможностей аппарата.'
        ],
        conclusion: 'Resona R9 – это современный УЗИ-аппарат, который предоставляет широкий спектр диагностических возможностей и высокое качество изображения. Несмотря на высокую стоимость и необходимость обучения, этот аппарат является отличным выбором для медицинских учреждений.'
    }
];

export default function Reviews() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, 'recenzii')

    const [showAll, setShowAll] = useState(false);
    const visibleReviews = showAll ? reviews : reviews.slice(0, 1);

    return (
        <div className="max-w-[1440px] 5xl:max-w-[2000px] mx-auto p-4">
            <h2 className='uppercase text-[25px] font-semibold mdx:text-[25px]'>{t('recenzii')}</h2>
            {visibleReviews.map((review, index) => (
                <div key={index} className="bg-white p-6 mb-6">
                    <div className="flex items-center mb-4">
                        <Image src={mindrayDC60} alt="Doctor" width={60} height={60} className="rounded-full mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">{review.doctor}</h2>
                            <h3 className="text-md text-gray-400">{review.title}</h3>
                        </div>
                    </div>
                    <p className="mb-4">{review.summary}</p>
                    <h4 className="text-lg font-semibold mb-2">Основные преимущества
                    </h4>
                    <ul className="list-disc pl-5 mb-4">
                        {review.advantages.map((advantage, index) => (
                            <li key={index}>{advantage}</li>
                        ))}
                    </ul>
                    <h4 className="text-lg font-semibold mb-2">Недостатки</h4>
                    <ul className="list-disc pl-5 mb-4">
                        {review.disadvantages.map((disadvantage, index) => (
                            <li key={index}>{disadvantage}</li>
                        ))}
                    </ul>
                    <h4 className="text-lg font-semibold mb-2">Общий вывод</h4>
                    <p>{review.conclusion}</p>
                </div>
            ))}
            <div className="flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="border text-[#252324] py-3 px-[35px] mdx:px-[50px] font-bold hover:text-[#fff] hover:bg-[#E94B50]"
                >
                    {showAll ? t('hide') : t('see-all')}
                </button>
            </div>
        </div>
    );
}
