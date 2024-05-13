import Card from './Card/Card'
import React, { useEffect, useState, useContext } from 'react';
import { ResultContext } from '../../../../context/ResultContext'
import Pagination from "../../Pagination/Pagination";

function Results() {

    const { result } = useContext(ResultContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        setTotalPages(Math.ceil(result.length / itemsPerPage));
    }), [result];

    const paintList = () => {

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, result.length);

        const itemsOnPage = result.slice(startIndex, endIndex);

        return itemsOnPage.map((item, i) =>
            <Card cardInfo={item} key={i}></Card>
        )
    }



    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="results">
             <div className="results-cards">
                {paintList()}
                </div> 
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </section>
    )
}

export default Results