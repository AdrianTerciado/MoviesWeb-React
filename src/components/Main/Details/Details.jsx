import { useParams } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ResultContext } from '../../../context/ResultContext'
import { MongoContext } from '../../../context/MongoContext'

function Details() {
    const { result } = useContext(ResultContext);
    const { database } = useContext(MongoContext);
    const movieID = useParams();
    const [isFavorite, setIsFavorite] = useState(false);

    let movieDetails = null;

    if (result.some(item => item.id == movieID.id)) {
        [movieDetails] = result.filter(item => item.id == movieID.id);
    }
    else {
        [movieDetails] = database.filter(item => item.id == movieID.id);
    }

    let url = "https://image.tmdb.org/t/p/w500";

    const handleFavoriteToggle = async () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            try {
                const response = await axios.post('http://localhost:3000/api/',
                    {
                        "id": movieDetails.id,
                        "title": movieDetails.title,
                        "poster_path": movieDetails.poster_path,
                        "release_date": movieDetails.release_date,
                        "backdrop_path": movieDetails.backdrop_path,
                        "overview": movieDetails.overview,
                        "vote_average": movieDetails.vote_average
                    }
                );
                if (response.status === 201) {
                    console.log('Película marcada como favorita correctamente');
                } else {
                    console.error('Error al marcar la película como favorita');
                }
            } catch (error) {
                console.error('Error al marcar la película como favorita:', error);
            }
        } else {
            try {
                const response = await axios.delete(`http://localhost:3000/api/${movieDetails.id}`);
                if (response.status === 200) {
                    console.log('Película barrada correctamente');
                } else {
                    console.error('Error al borrar la película de favoritos');
                }
            } catch (error) {
                console.error('Error al borrar la película de favoritos:', error);
            }
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