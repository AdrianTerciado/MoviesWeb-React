import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { ResultContext } from '../../../context/ResultContext'

function Details() {
    const { result } = useContext(ResultContext);
    const movieID = useParams();

    const [isFavorite, setIsFavorite] = useState(false); // Estado para controlar si la película está marcada como favorita

    let movieDetails = null;

    if (movieID && result) {
        console.log(`Aquí está tu ID: ${movieID.id}`);
        console.log(`Aquí están tus resultados: `, result);

        [movieDetails] = result.filter(item => item.id == movieID.id);
    }
    else {
        console.log("Algún dato (movieID o resultados de búsqueda) no ha sido recibido");
    }

    let url = "https://image.tmdb.org/t/p/w500";

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            // Si la peli está marcada como favorita, enviar datos a mongo
            console.log("Película marcada como favorita:", movieDetails);
        } else {
            // Si la película no está marcada como favorita, la eliminamos de la base de datos
            console.log("Película eliminada de favoritos:", movieDetails);
        }
    };

    return (
        <>
            <section className="details">
                <img src={url + movieDetails.backdrop_path} className='details-background' />
                <article className='movie-details'>
                    <figure className='img-card'>
                        <img src={url + movieDetails.poster_path} className='movie-img' />
                    </figure>
                    <div className='info-movie'>
                        <h1 className='title-1'>{movieDetails.title}</h1>
                        <p className='data'>Release date: {movieDetails.release_date}</p>
                        <h2 className='title-2'>Overview</h2>
                        <p className='data'>{movieDetails.overview}</p>
                        <p className='data'>Vote average: {movieDetails.vote_average}</p>
                        <div className='contenedor-favoritos'>
                            <p>Add to favorites: </p>
                            {isFavorite ? (
                                <p className="corazon" onClick={handleFavoriteToggle}>❤️</p>
                            ) : (
                                <p className="corazon" onClick={handleFavoriteToggle}>🤍</p>
                            )}
                        </div>
                    </div>
                </article>
            </section >
        </>
    )
}

export default Details