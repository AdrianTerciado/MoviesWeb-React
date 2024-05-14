import React from 'react';

function Pagination({ totalPages, currentPage, onPageChange }) {

    const goToPage = (page) => {
        onPageChange(page);
    };

    const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);
    console.log(pageNumbers)

    return (
        <div className="pagination">
            {pageNumbers.map(page => (
                <button key={page} onClick={() => goToPage(page)} className={currentPage === page ? 'active' : ''}>
                    {page}
                </button>
            ))}
        </div>
    );
}

export default Pagination;