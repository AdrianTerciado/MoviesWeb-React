import React, { useEffect, useState, useContext } from 'react';
import { ResultContext } from '../../../../context/ResultContext'

function Search() {

    const { result, updateResult } = useContext(ResultContext);
    const [contador, setContador] = useState(0);
    const [search, setSearch] = useState(null);

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
            if (!search) {
                console.log("No hay búsqueda");
            }
            else {
                const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`);
                const data = await resp.json();
                console.log(data);
                updateResult(data.results);
                console.log({result});
            }
        }
        getMovie();
    }, [search]);

    return (
        <>
            <h1 className="index-text">What would you like to watch today?</h1>
            <input type="text" className="input-search" placeholder="What do you want to watch?" onChange={handleChange} />
        </>
    )
}

export default Search