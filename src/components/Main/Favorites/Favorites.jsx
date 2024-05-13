import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Card from '../Home/Results/Card/Card'
import Pagination from "../Pagination/Pagination";
import { MongoContext } from '../../../context/MongoContext'

function Favorites() {
    const { updateDatabase } = useContext(MongoContext);
    const [favorites, setFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getFavorites = async (page) => {
            try {
                const response = await axios.get(`http://localhost:3000/api?limit=4&page=${page}`);
                if (response.status === 200) {
                    console.log(response)
                    setFavorites(response.data.favorites);
                    updateDatabase(response.data.favorites);
                    setTotalPages(Math.ceil(response.data.total / 4));
                    console.log('Favoritos recibidos correctamente');
                    console.log(response.data);
                } else {
                    console.error('Error al recibir favoritos');
                }
            }
            catch (error) {
                console.error('Error al recibir favoritos:', error);
            }
        };
        getFavorites(currentPage);
    }, [currentPage]);

    const paintList = () => {
        return (
            favorites.map((favorite, index) => (
                <Card cardInfo={favorite} key={index}></Card>
            ))
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <section className="results-favorites">
               <div className="results-cards">
                {paintList()}
                </div> 
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </section>
            
        </>
    )
}

export default Favorites