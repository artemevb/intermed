import axios from 'axios';
import EventsPages from '../_components/Events/EventsPages';
import Application from '../_components/Main/Application';
import Script from 'next/script';


export async function generateMetadata({ params }) {
	const { lng } = params;

	return {
		title: 'Медицинские мероприятия в Ташкенте от INTERMED INNOVATION',
		description: 'Присоединяйтесь к медицинским конференциям и событиям INTERMED INNOVATION в Ташкенте. Узнайте о последних тенденциях в медицине и медицинских технологиях. Регистрируйтесь на наши мероприятия и расширьте свои знания!',
		openGraph: {
			title: 'Медицинские мероприятия в Ташкенте от INTERMED INNOVATION',
			description: 'Присоединяйтесь к медицинским конференциям и событиям INTERMED INNOVATION в Ташкенте. Узнайте о последних тенденциях в медицине и медицинских технологиях. Регистрируйтесь на наши мероприятия и расширьте свои знания!',
			url: `https://imed.uz/${lng}/events`,
			images: [
				{
					url: 'https://imed.uz/og.jpg',
					alt: 'Мероприятия компании Intermed Innovation',
					width: 1200,
					height: 630,
				},
			],
			locale: lng,
			site_name: 'Intermed Innovation',
		},
		twitter: {
			title: 'Медицинские мероприятия в Ташкенте от INTERMED INNOVATION',
			description: 'Присоединяйтесь к медицинским конференциям и событиям INTERMED INNOVATION в Ташкенте. Узнайте о последних тенденциях в медицине и медицинских технологиях. Регистрируйтесь на наши мероприятия и расширьте свои знания!',
			images: ['https://imed.uz/og.jpg'],
			cardType: 'summary_large_image',
		},
		alternates: {
			canonical: `https://imed.uz/${lng}/events`,
			languages: {
				ru: `https://imed.uz/ru/events`,
				uz: `https://imed.uz/uz/events`,
				en: `https://imed.uz/en/events`,
			},
		},
		robots: {
			index: true,
			follow: true,
		},
		author: 'Intermed Innovation',
	};
}

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Event",
	"name": "Медицинские мероприятия в Ташкенте от INTERMED INNOVATION",
	"location": {
		"@type": "Place",
		"name": "Intermed Innovation Event Location",
		"sameAs": [
			"https://www.youtube.com/@intermedinnovation9644",
			"https://t.me/intermedtrade",
			"https://www.facebook.com/intermed.mindray",
			"https://www.instagram.com/intermed.mindray/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
		],
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "г. Ташкент, Юнусабадский р-он, ул. Чинобод 10А",
			"addressLocality": "Ташкент",
			"postalCode": "100000",
			"addressCountry": "UZ"
		},
	},
	"image": "https://imed.uz/og.jpg",
	"description": "Присоединяйтесь к медицинским конференциям и событиям INTERMED INNOVATION в Ташкенте. Узнайте о последних тенденциях в медицине и медицинских технологиях. Регистрируйтесь на наши мероприятия и расширьте свои знания!",
	"url": "https://imed.uz/ru/events",
	"performer": {
		"@type": "Organization",
		"name": "Intermed Innovation"
	}
};

export default async function EventsPage({ params }) {
	const { lng } = params;

	let eventData = null;

	// Получение данных о мероприятиях
	try {
		const response = await axios.get('https://imed.uz/api/v1/event/get-all', {
			headers: {
				'Accept-Language': lng,
				'Cache-Control': 'no-cache'
			},
		});
		eventData = response.data.data;
	} catch (error) {
		console.error('Failed to fetch event data:', error);
	}

	return (
		<>
			<Script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				key="jsonld-events"
			/>

			<main className="w-full bg-white flex flex-col gap-32 mx-auto px-4 sm:px-6 lg:px-8">
				{/* Раздел с мероприятиями */}
				<section aria-labelledby="events-title">
					<EventsPages Data={eventData} />
				</section>
				<section aria-label="Описание страницы мероприятий" className="sr-only">
					Важные медицинские мероприятия в Ташкенте

					INTERMED INNOVATION регулярно организует и проводит медицинские мероприятия в Ташкенте, которые служат важной платформой для обсуждения актуальных вопросов медицины, обмена опытом и ознакомления с новейшими технологиями. Наши конференции, семинары и воркшопы привлекают ведущих специалистов и профессионалов из различных областей медицины, что позволяет оставаться в курсе самых последних достижений и тенденций в отрасли.

					Предстоящие мероприятия

					1. Международная конференция по медицинским инновациям:

					Присоединяйтесь к ведущим экспертам и исследователям в области медицинских технологий. Обсудите последние достижения в области диагностики и лечения с мировыми лидерами отрасли.

					2. Семинар по ультразвуковой диагностике:

					Получите новые практические навыки и изучите передовые технологии ультразвукового обследования. Семинар включает в себя демонстрации работы с современными УЗИ-аппаратами, что поможет вам улучшить навыки диагностики.

					3. Воркшоп по МРТ:

					Узнайте все о возможностях и передовых решениях в области магнитно-резонансной томографии. Воркшоп включает практическое знакомство с новыми МРТ-аппаратами, что позволит вам углубить знания и улучшить использование МРТ в медицинской практике.

					4. Тренинг по медицинскому оборудованию:

					Погрузитесь в мир медицинского оборудования. На тренинге участники узнают о новых моделях и технологиях в области МРТ, УЗИ и других видов диагностики, а также получат полезную информацию по уходу за оборудованием и его эффективному использованию.


					Почему стоит участвовать в наших мероприятиях?

					- Обмен опытом: Наши мероприятия собирают специалистов со всего мира, что открывает возможность обменяться опытом, узнать о передовых методах и лучших практиках в медицине.
					- Актуальные знания: Вы получите актуальную информацию о новейших разработках и тенденциях в области медицины, что поможет вам быть на шаг впереди.
					- Networking и деловые связи: Важным преимуществом наших мероприятий является возможность расширить круг профессиональных контактов и наладить связи с коллегами и экспертами из разных стран.
					- Техническая поддержка: Мы также организуем мастер-классы и тренинги, которые помогают участникам освоить новое оборудование и технологии, что особенно полезно для медицинских учреждений.

					Как зарегистрироваться?

					Зарегистрироваться на мероприятия INTERMED INNOVATION можно через наш сайт. Мы предлагаем гибкие условия для участников, а также индивидуальные скидки для групповых заявок. Не упустите возможность повысить свою квалификацию и улучшить медицинскую практику с INTERMED INNOVATION.

					INTERMED INNOVATION — это не только поставки высококачественного медицинского оборудования, но и площадка для обмена знаниями и опытом. Мы гордимся тем, что наши мероприятия помогают специалистам улучшать навыки, разрабатывать новые идеи и внедрять передовые технологии в медицинскую практику.

					Присоединяйтесь к нашим мероприятиям в Ташкенте, чтобы быть в курсе самых актуальных событий в мире медицины!
				</section>
				{/* Раздел с заявкой */}
				<section aria-labelledby="application-title">
					<Application />
				</section>

				<a
					href="https://med-trip.uz/"
					className="visually-hidden"
					target="_blank"
					rel="noopener noreferrer"
				></a>
				<a
					href="https://med-trip.uz/en/tours"
					className="visually-hidden"
					target="_blank"
					rel="noopener noreferrer"
				></a>
				<a
					href="https://med-trip.uz/en/sanatoriums"
					className="visually-hidden"
					target="_blank"
					rel="noopener noreferrer"
				></a>
			</main>
		</>
	);
}
