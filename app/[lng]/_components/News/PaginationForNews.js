"use cient"
import left from '/public/images/arrowsforpagination/left.svg'
import right from '/public/images/arrowsforpagination/right.svg'
import Image from 'next/image'

export default function Pagination({ newsPerPage, totalNews, paginate, currentPage }) {
    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handlePrevClick = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1)
        }
    }

    const handleNextClick = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1)
        }
    }

    return (
        <nav>
            <ul className="flex justify-center items-center content-center gap-2">
                <li>
                    <button
                        onClick={handlePrevClick}
                        className='flex items-center'
                    >
                        <Image
                            quality={100}
                            src={left}
                            width={30}
                            height={30}
                            alt='left Icon'
                            className='w-[24px] h-[24px] object-cover slg:h-[30px] slg:w-[30px]'
                        />
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-[17px] py-[9px] xl:px-[19px] xl:py-[10px] text-[16px] xl:text-[20px] rounded-full transition-all ${currentPage === number
                                ? 'bg-red-500 text-white'
                                : 'bg-transparent text-gray-500 '
                                }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={handleNextClick}
                        className='flex items-center'
                    >
                        <Image
                            quality={100}
                            src={right}
                            width={30}
                            height={30}
                            alt='right Icon'
                            className='w-[24px] h-[24px] object-cover slg:h-[30px] slg:w-[30px]'
                        />
                    </button>
                </li>
            </ul>
        </nav>
    )
}
