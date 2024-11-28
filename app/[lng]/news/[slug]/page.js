import axios from 'axios';
import Application from "../../_components/Main/Application";
import NewPages from "../../_components/NewsPages/NewsTitle";
import Share from "../../_components/NewsPages/Share";
import OtherNews from "../../_components/NewsPages/OtherNews";

export async function generateMetadata({ params }) {
  const { slug, lng } = params;

  let newsData = null;
  try {
    const response = await axios.get(`https://imed.uz/api/v1/new/get/${slug}`, {
      headers: { 'Accept-Language': lng },
    });
    newsData = response.data;
  } catch (error) {
    console.error("Не удалось получить данные о новости:", error);
    return {
      title: 'Новость не найдена',
      description: 'Новость не найдена или произошла ошибка.',
    };
  }

  if (newsData) {
    const { head, newOptions } = newsData.data;
    const title = head.heading || 'Заголовок новости';
    const description = newOptions[0]?.text?.substring(0, 160) || 'Описание отсутствует';
    const imageUrl = head.photo?.url || 'https://example.com/default-image.jpg';  // Если фото не найдено, дефолтное изображение

    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: `https://imed.uz/${lng}/news/${slug}`,
        images: [
          {
            url: imageUrl,
            alt: title,
            width: 1200,
            height: 630,
          },
        ],
        type: 'article',
        siteName: 'Intermed Innovation',
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [imageUrl],
      },
      keywords: title,
      other: {
        'article:published_time': head.createdDate,
      },
    };
  }

  return {
    title: 'Новость не найдена',
    description: 'Новость не найдена или произошла ошибка.',
  };
}

export default async function NewsPage({ params }) {
  const { slug, lng } = params;

  let newsData = null;
  let similarNews = [];

  try {
    const response = await axios.get(`https://imed.uz/api/v1/new/get/${slug}`, {
      headers: { 'Accept-Language': lng },
    });
    newsData = response.data;
  } catch (error) {
    console.error("Не удалось получить данные о новости:", error);
  }

  try {
    const response = await axios.get(`https://imed.uz/api/v1/new/get/${slug}?similar=true`, {
      headers: { 'Accept-Language': lng },
    });
    similarNews = response.data?.data || [];
  } catch (error) {
    console.error("Не удалось получить похожие новости:", error);
  }

  if (!newsData) {
    return (
      <div>
        <h2>Новость не найдена</h2>
        <p>Извините, запрашиваемая новость не найдена.</p>
      </div>
    );
  }

  return (
    <div>
      <NewPages newsData={newsData} />
      <Share />
      <OtherNews similarNews={similarNews} />
      <Application />
    </div>
  );
}
