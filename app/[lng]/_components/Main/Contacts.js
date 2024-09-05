"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from '../../../i18n/client'
import AskaQuestion from "../Modal/AskaQuestion";

export default function Contacts({ lng }) {
  const { t } = useTranslation(lng, 'contact-main')

  const [contactHeight, setContactHeight] = useState(0);
  const [isAskaQuestionModalOpen, setIsAskaQuestionModalOpen] = useState(false);

  const openAskaQuestionModal = () => setIsAskaQuestionModalOpen(true);
  const closeAskaQuestionModal = () => setIsAskaQuestionModalOpen(false);

  useEffect(() => {
    const contactDiv = document.getElementById("contact-details");
    if (contactDiv) {
      setContactHeight(contactDiv.clientHeight);
    }
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] px-[15px] mx-auto ">
      {
        isMounted &&
        <>
          <h2 className="text-3xl font-semibold xl:hidden">{t('title-main')}</h2>
          <div className="flex flex-col-reverse xl:flex-row xl:gap-[100px]">

            <div id="contact-details" className="flex-1 flex flex-col gap-5">
              <h2 className="text-3xl font-semibold hidden xl:block">{t('title-main')}</h2>
              <div className="flex flex-col gap-1">
                <div>
                  <a
                    href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.288713%2C41.350869&mode=usermaps&source=mapframe&um=constructor%3A91d36eeb34d790da6904a560f5fd9b0e0072a93a42f95bc0fe3dd8ae45fdaf0c&utm_source=mapframe&z=14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black text-lg mdl:text-xl"
                  >
                    {t('adress')}
                  </a>
                </div>
                <p className="text-neutral-400 text-sm">{t('adress-name')}</p>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <p className="text-lg mdl:text-xl">{t('work-schedule')}</p>
                <p className="text-neutral-400 text-sm">{t('work-schedule-name')}</p>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+971543980707"
                  className="hover:underline text-black text-lg mdl:text-xl"
                >
                  +998 78 150-47-47
                </a>
                <p className="text-neutral-400 text-sm">{t('phone-main')}</p>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@mrjtrade.ae"
                  className="text-black text-lg mdl:text-xl"
                >
                  info@imed.uz
                </a>
                <p className="text-neutral-400 text-sm">E-mail</p>
              </div>
              <hr />
              <div>
                <button
                  className="px-24 max-mdx:px-12 py-3 w-auto bg-contactBg text-white hover:bg-[#EE787C] font-bold"
                  onClick={openAskaQuestionModal}
                >
                  {t('call')}
                </button>
              </div>
            </div>
            <div className="block flex-1 relative max-xl:mb-[20px]" >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11980.576319452191!2d69.28673930863411!3d41.34922195465565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef35418406693%3A0xf91e0631f842852c!2sINTERMED%20Innovation!5e0!3m2!1sru!2s!4v1723049950593!5m2!1sru!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[100%] h-full"
              ></iframe>
            </div>
          </div>


          {isAskaQuestionModalOpen && <AskaQuestion closeModal={closeAskaQuestionModal} />}
        </>
      }
    </div >
  );
}
