import SchemeAccordeon from "@/app/_components/Main/SchemeAccordeon"

export default function Scheme() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
        <h2 className="text-3xl max-mdx:text-2xl font-bold">
            СХЕМА РАБОТЫ
        </h2>
        <p className="w-full max-w-[400px] text-neutral-400">Мы предлагаем удобный и простой процесс покупки медицинской техники</p>

        </div>
        <div className="grid w-full h-auto grid-cols-1 xl:grid-cols-4 grid-rows-4 xl:grid-rows-1 max-xl:pl-4">
          <div className="max-xl:border-l-2 relative border-red-200 xl:border-t-2">
            <div className="absolute xl:-top-[13px] max-xl:-left-[14px] rounded-full px-2 bg-redMain text-white">
              1
            </div>
            <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
              <h1 className="text-2xl text-redMain font-semibold">
                Выбор оборудования
              </h1>
              <p className="max-xl:max-w-[600px]">
              Проконсультируйтесь с нашими экспертами, чтобы найти оборудование, идеально соответствующее вашим потребностям
              </p>
            </div>
          </div>
          <div className="max-xl:border-l-2 relative border-red-200 xl:border-t-2">
            <div className="absolute xl:-top-[13px] max-xl:-left-[14px] rounded-full px-2 bg-redMain text-white">
              2
            </div>
            <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
              <h1 className="text-2xl text-redMain font-semibold">
              Оформление заказа
              </h1>
              <p className="max-xl:max-w-[600px]">
              После выбора модели мы подготовим для вас все необходимые документы для быстрой и легкой покупки
              </p>
            </div>
          </div>
          <div className="max-xl:border-l-2 relative border-red-200 xl:border-t-2">
            <div className="absolute xl:-top-[13px] max-xl:-left-[14px] rounded-full px-2 bg-redMain text-white">
              3
            </div>
            <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
              <h1 className="text-2xl text-redMain font-semibold">
              Доставка и установка
              </h1>
              <p className="max-xl:max-w-[600px]">
              Мы оперативно доставим и установим оборудование, чтобы вы могли начать использовать его без задержек
              </p>
            </div>
          </div>
          <div className="relative border-red-200 xl:border-t-2">
            <div className="absolute xl:-top-[13px] max-xl:-left-[12px] rounded-full px-2 bg-redMain text-white">
              4
            </div>
            <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
              <h1 className="text-2xl text-redMain font-semibold">
              Обучение и поддержка
              </h1>
              <p className="max-xl:max-w-[600px]">
              Мы обучим вас работе с оборудованием и предоставим надежную гарантийную поддержку для бесперебойной работы
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
