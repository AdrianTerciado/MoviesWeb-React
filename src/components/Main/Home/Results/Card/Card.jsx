import { Link } from 'react-router-dom'

function Card({ cardInfo }) {

    let year = cardInfo.release_date.slice(0, 4)

    return (
        <Link to={`/item/${cardInfo.id}`} >
            <article className='movie-card'>
                <figure className='img-container'>
                    <img src={`https://image.tmdb.org/t/p/w500${cardInfo.poster_path}`} className='img-card' />
                </figure>
                <h4 className='title'>{`${cardInfo.title}`}</h4>
                <p className='year'> · {`${year}`}</p>
            </article>
        </Link>
    )
}

export default Card