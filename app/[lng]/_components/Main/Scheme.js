"use client"
import SchemeAccordeon from "./SchemeAccordeon"
import { useTranslation } from '../../../i18n/client'
import { useState, useEffect } from "react";

export default function Scheme({ lng }) {
  const { t } = useTranslation(lng, 'scheme-main')

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-10">
      {
        isMounted && <div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl max-mdx:text-2xl 5xl:text-5xl font-bold">
                {t('work_scheme')}
              </h2>
              <p className="w-full max-w-[400px] text-[#808080] 5xl:text-2xl">
                {t('process_description')}
              </p>
            </div>
            <div className="grid w-full h-auto grid-cols-1 xl:grid-cols-4 grid-rows-4 xl:grid-rows-1 max-xl:pl-4">
              <div className="max-xl:border-l-2 relative border-red-200 xl:border-t-2">
                <div className="absolute xl:-top-[13px] max-xl:-left-[14px] rounded-full px-2 5xl:px-3 bg-redMain text-white">
                  1
                </div>
                <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
                  <h1 className="text-2xl 5xl:text-3xl text-redMain font-semibold">
                    {t('equipment_selection')}
                  </h1>
                  <p className="max-xl:max-w-[600px] 5xl:text-xl">
                    {t('consult_experts')}
                  </p>
                </div>
              </div>
              <div className="max-xl:border-l-2 relative border-red-200 xl:border-t-2">
                <div className="absolute xl:-top-[13px] max-xl:-left-[14px] rounded-full px-2 5xl:px-3 bg-redMain text-white">
                  2
                </div>
                <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
                  <h1 className="text-2xl 5xl:text-3xl text-redMain font-semibold">
                    {t('order_processing')}
                  </h1>
                  <p className="max-xl:max-w-[600px] 5xl:text-xl">
                    {t('prepare_documents')}
                  </p>
                </div>
              </div>
              <div className="max-xl:border-l-2 relative border-red-200 xl:border-t-2">
                <div className="absolute xl:-top-[13px] max-xl:-left-[14px] rounded-full px-2 5xl:px-3 bg-redMain text-white">
                  3
                </div>
                <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
                  <h1 className="text-2xl 5xl:text-3xl text-redMain font-semibold">
                    {t('delivery_installation')}
                  </h1>
                  <p className="max-xl:max-w-[600px] 5xl:text-xl">
                    {t('prompt_delivery')}
                  </p>
                </div>
              </div>
              <div className="relative border-red-200 xl:border-t-2">
                <div className="absolute xl:-top-[13px] max-xl:-left-[12px] rounded-full px-2 5xl:px-3 bg-redMain text-white">
                  4
                </div>
                <div className="max-xl:pl-8 max-xl:pb-12 xl:pt-6 xl:pr-8 flex flex-col gap-2">
                  <h1 className="text-2xl 5xl:text-3xl text-redMain font-semibold">
                    {t('training_support')}
                  </h1>
                  <p className="max-xl:max-w-[600px] 5xl:text-xl">
                    {t('training_and_support')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
