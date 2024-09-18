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
            <ul className="flex justify-center items-center gap-2">
                <li>
                    <button
                        onClick={handlePrevClick}
                        className="px-2 py-1 text-black hover:bg-gray-200"
                    >
                        &lt;
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-4 py-2 rounded-full transition-all ${currentPage === number
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
                        className="px-2 py-1 text-black "
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    )
}
