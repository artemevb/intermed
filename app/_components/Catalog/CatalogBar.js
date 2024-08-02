"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import upGreen from "@/public/svg/arrow-up-green.svg";
import downGray from "@/public/svg/arrow-down-gray.svg";
import Link from "next/link";

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-t border-b border-solid">
      <summary
        onClick={onClick}
        className={`flex gap-5 py-7 ${
          isOpen ? "text-redMain" : "text-black"
        } font-semibold text-xl  max-md:max-w-full cursor-pointer`}
      >
        <span className="flex-auto">{title}</span>
        {isOpen ? (
          <Image
            src={upGreen}
            alt="Up icon"
            priority
            width={20}
            height={20}
            quality={100}
          />
        ) : (
          <Image
            src={downGray}
            alt="Down icon"
            priority
            width={20}
            height={20}
            quality={100}
          />
        )}
      </summary>
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-screen opacity-100"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="max-h-screen opacity-100"
        leaveTo="max-h-0 opacity-0"
      >
        <div className="overflow-hidden">{children}</div>
      </Transition>
    </div>
  );
};

const AccordionContent = ({ children }) => {
  return <div className="pb-5 px-4">{children}</div>;
};

const data = [
  {
    id: 1,
    name: "УЗД оборудование",
    slug: "1-ultrasound-diagnostic-systems",
    active: true,
    catalogList: [
      {
        id: 4,
        name: "Стационарные",
        slug: "4-portable",
        active: true,
      },
      {
        id: 2,
        name: "Портативные",
        slug: "2-stationary",
        active: true,
      },
      {
        id: 3,
        name: "Фибросканы",
        slug: "3-fibrocsani",
        active: true,
      },
    ],
  },
  {
    id: 2,
    name: "Лабороторное оборудование",
    slug: "2-laboratory-equipment",
    active: true,
    catalogList: [
      {
        id: 3,
        name: "Портативные",
        slug: "3-portable",
        active: true,
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "Single Equipment",
  //   slug: "3-single-equipment",
  //   active: true,
  //   catalogList: [],
  // },
];

export default function CatalogList() {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        {data.map(({ id, name, slug, catalogList }) => (
          <div key={id} className="w-full">
            {catalogList.length > 0 ? (
              <AccordionItem
                title={name}
                isOpen={openSections.includes(id)}
                onClick={() => toggleSection(id)}
              >
                <AccordionContent>
                  <div className="flex flex-col gap-5 text-lg font-semibold text-[#252324] w-full">
                    {catalogList.map(
                      (catalogItem) =>
                        catalogItem.active && (
                          <div className="cursor-pointer" key={catalogItem.id}>{catalogItem.name}</div>
                        )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div href={slug} className="w-full h-full">
                <div
                  href={slug}
                  className="py-7 border-t border-b border-solid border-neutral-200"
                >
                  <span className="text-2xl font-bold text-neutral-900">
                    {name}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
