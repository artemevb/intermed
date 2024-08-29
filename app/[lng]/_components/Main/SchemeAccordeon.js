"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import upGreen from "@/public/svg/arrow-up-green.svg";
import downGray from "@/public/svg/arrow-down-gray.svg";
import schemeImage from "@/public/images/main/scheme-image.png";

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-t border-b border-solid border-neutral-200">
      <summary
        onClick={onClick}
        className={`flex gap-5 py-7 ${
          isOpen ? "text-greenView" : "text-neutral-400"
        } font-bold text-2xl max-md:flex-wrap max-md:max-w-full cursor-pointer`}
      >
        <span className="flex-auto">{title}</span>
        {isOpen ? (
          <Image
            src={upGreen}
            className=""
            alt={`Up icon red`}
            priority
            width={30}
            height={30}
            quality={100}
          />
        ) : (
          <Image
            src={downGray}
            className=""
            alt={`Down icon black`}
            priority
            width={30}
            height={30}
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
    key: "general",
    title: "Equipment Selection",
    description: "Consult with our experts to find equipment that perfectly meets your needs",
    image: schemeImage
  },
  {
    key: "blood",
    title: "Order Processing",
    description: "Consult",
    image: schemeImage
  },
  {
    key: "urine",
    title: "Customized Ordering and Installation",
    description: "Hola",
    image: schemeImage
  },
  {
    key: "feces",
    title: "Training and Support",
    description: "Consul",
    image: schemeImage
  }
];

export default function Instruction() {
  const [openSection, setOpenSection] = useState("general");
  const [openSectionAccordeon, setOpenSectionAccordeon] = useState("general");
  const [filteredData, setFilteredData] = useState(data[0]);

  const toggleSection = (section) => {
    setOpenSection(section);
    const result = data.find((item) => item.key === section);
    setFilteredData(result);
  };

  const toggleSectionAccordeon = (section) => {
    if (openSectionAccordeon ==  section) {
      setOpenSectionAccordeon("");
    } else {
      setOpenSectionAccordeon(section);
    }
    const result = data.find((item) => item.key === section);
    setFilteredData(result);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col w-full xl:hidden">
        {data.map(({ key, title, description, image }) => (
          <AccordionItem
            key={key}
            title={title}
            isOpen={openSectionAccordeon === key}
            onClick={() => toggleSectionAccordeon(key)}
          >
            <AccordionContent>
              <div className="flex flex-col gap-5 text-lg font-semibold text-neutral-900 w-full">
                <div className="flex gap-3 max-md:flex-wrap">
                  <p className="max-md:max-w-full">{description}</p>
                </div>
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="Scheme Image"
                  className="w-full h-auto"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
      <div className="w-full flex max-xl:hidden">
        <div className="flex-1 flex-col flex justify-between">
          {data.map((item, i) => (
            <button
              key={i}
              className={`border-t border-b h-full py-8 flex items-center justify-start ${
                openSection === item.key ? "text-greenView  border-r-4 border-r-green-800" : "text-neutral-400 border-r"
              }`}
              onClick={() => toggleSection(item.key)}
            >
              <p className="text-2xl font-semibold">{item.title}</p>
            </button>
          ))}
        </div>
        <div className="flex-1 flex-col justify-between border-b ">
          <Image
            src={filteredData.image}
            width={1000}
            height={1000}
            alt="Scheme Image"
            className="w-full h-auto"
          />
          <div className="px-4 py-4">
            {filteredData.description}
          </div>
        </div>
      </div>
    </section>
  );
}