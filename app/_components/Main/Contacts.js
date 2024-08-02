"use client";
import React, { useEffect, useState } from "react";

export default function Contacts() {
  const [contactHeight, setContactHeight] = useState(0);

  useEffect(() => {
    const contactDiv = document.getElementById("contact-details");
    if (contactDiv) {
      setContactHeight(contactDiv.clientHeight);
    }
  }, []);

  return (
    <div className="w-full max-w-[1440px] px-2 mx-auto flex flex-col xl:flex-row gap-24 max-xl:gap-6">
      <div id="contact-details" className="flex-1 flex flex-col gap-5">
        <h2 className="text-3xl font-semibold">КОНТАКТЫ</h2>
        <div className="flex flex-col gap-1">
          <p className="text-lg">
            г. Ташкент, Юнусабадский р-он, ул. Чинобод 10А
          </p>
          <p className="text-neutral-400 text-sm">Адрес</p>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <p className="text-lg">Ежедневно 09:00 - 18:00</p>
          <p className="text-neutral-400 text-sm">График работы</p>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <p className="text-lg">+998 78 150-47-47</p>
          <p className="text-neutral-400 text-sm">Номер телефона</p>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <p className="text-lg">info@imed.uz</p>
          <p className="text-neutral-400 text-sm">E-mail</p>
        </div>
        <hr />
        <div>
          <button className="px-24 max-mdx:px-12 py-3 w-auto bg-contactBg text-white hover:bg-[#EE787C]">
            Обратный звонок
          </button>
        </div>
      </div>
      <div className="flex-1 relative" style={{ height: contactHeight }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24966.757420357804!2d69.27042282739593!3d41.3532846060789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef35418406693%3A0xf91e0631f842852c!2sINTERMED%20Innovation!5e0!3m2!1sru!2s!4v1721738006511!5m2!1sru!2s"
          className="w-full h-full xl:h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
