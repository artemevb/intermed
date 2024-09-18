
import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div>
            <div className="mt-6 flex">
                <ul className="flex list-none">
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-3xl mx-1 bg-white text-gray-700"
                        >
                            &lt;
                        </button>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 text-[16px] mdx:text-[20px] py-2 rounded-3xl mx-1 ${currentPage === index + 1 ? 'bg-contactBg text-white' : 'bg-white text-gray-400'}`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-3xl mx-1 bg-white text-gray-700"
                        >
                            &gt;
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
