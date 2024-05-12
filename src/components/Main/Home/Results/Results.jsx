import Card from './Card/Card'
import React, { useEffect, useState, useContext } from 'react';
import { ResultContext } from '../../../../context/ResultContext'

function Results() {

    const { result } = useContext(ResultContext);

    console.log(result);

    const paintList = () => {
        return result.map((item, i) =>
            <Card cardInfo={item} key={i}></Card>
        )
    }

    return (
        <section className="results">
            {paintList()}
        </section>
    )
}

export default Results