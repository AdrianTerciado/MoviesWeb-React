import React, { useEffect, useState, useContext } from 'react';
import { ResultContext } from '../../../../context/ResultContext'

function Search() {

    const { result, updateResult } = useContext(ResultContext);
    const [contador, setContador] = useState(0);
    const [search, setSearch] = useState(null);
    const [genre, setGenre] = useState(null)

    function handleChange(e) {

        if (contador) {
            clearTimeout(contador)
        }

        setContador(setTimeout(() => {
            setSearch(e.target.value);
            e.target.value = "";
        }, 1000))
    }

    useEffect(() => {
        const getMovie = async () => {
            if (search) {
                const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`);
                const data = await resp.json();
                console.log(data);
                updateResult(data.results);
                console.log({ result });
            }
            else if (genre) {
                const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genre}`);
                const data = await resp.json();
                console.log(data);
                updateResult(data.results);
                console.log({ result });
            } else {
                console.log("No hay búsqueda");
            }
        }
        getMovie();
    }, [search, genre]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.genre.value);
        setGenre(e.target.genre.value);
        console.log(genre);
    }

    return (
        <>
            <h1 className="index-text">What would you like to watch today?</h1>
            <input type="text" className="input-search" placeholder="What do you want to watch?" onChange={handleChange} />
            <form onSubmit={handleSubmit} className="form">
                <label className='filter-label' htmlFor="genre">Select by genre: </label>
                <select className="filter-search" id="genre" name="genre">
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="36">History</option>
                    <option value="27">Horror</option>
                    <option value="10402">Music</option>
                    <option value="9648">Mystery</option>
                    <option value="10749">Romance</option>
                    <option value="878">Science Fiction</option>
                    <option value="10770">TV Movie</option>
                    <option value="53">Thriller</option>
                    <option value="10752">War</option>
                    <option value="37">Western</option>
                </select>
                <input type="submit" className='submit-button' />
            </form>
        </>
    )
}

export default Search