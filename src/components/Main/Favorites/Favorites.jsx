import { useState, useEffect } from "react";
import axios from 'axios';
import Card from '../Home/Results/Card/Card'

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/');
                if (response.status === 200) {
                    setFavorites(response.data);
                    console.log('Favoritos recibidos correctamente');
                    console.log(response.data);
                    console.log(favorites);
                } else {
                    console.error('Error al recibir favoritos');
                }
            }
            catch (error) {
                console.error('Error al recibir favoritos:', error);
            }
        };
        getFavorites();
    }, []);

    const paintList = () => {
        return (          
                favorites.map((favorite, index) => (
                    <Card cardInfo={favorite} key={index}></Card>
                ))    
        );
    };

    return (
        <>
            <section className="results">
                {paintList()}
            </section>
        </>
    )
}

export default Favorites