import React, { memo } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import upGreen from '@/public/svg/arrow-up-green.svg';
import downGray from '@/public/svg/arrow-down-gray.svg';

// Memoized AccordionItem for performance optimization
const AccordionItem = memo(({ title, isOpen, onClick, children, hasChildren }) => (
  <div className="border-t border-b border-solid">
    <button
      onClick={onClick}
      className={`flex gap-5 py-7 ${isOpen ? 'text-redMain' : 'text-black'} font-semibold text-xl max-md:max-w-full cursor-pointer w-full flex justify-between items-center`}
      aria-expanded={isOpen}
      aria-controls={`section-${title}`}
    >
      <p className='text-left'>{title}</p>
      {hasChildren && (
        <Image
          src={isOpen ? upGreen : downGray}
          alt={isOpen ? 'Collapse section' : 'Expand section'}
          priority
          width={20}
          height={20}
          quality={100}
        />
      )}
    </button>
    {hasChildren && (
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-screen opacity-100"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="max-h-screen opacity-100"
        leaveTo="max-h-0 opacity-0"
      >
        <div id={`section-${title}`} role="region" aria-labelledby={`button-${title}`} className="overflow-hidden">
          {children}
        </div>
      </Transition>
    )}
  </div>
));

export default AccordionItem;
