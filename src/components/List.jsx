import React, { useEffect, useState } from 'react'
import './List.css'
import ListItem from './ListItem'
import axios from "../axios"
function List({ title, url, smallCard }) {
    const [movies, setMovie] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            // console.log(response.data.results[0], `${imgUrl}${response.data.results[0].poster_path}`);
            setMovie(response.data.results);
            console.log(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.map((singleMovie) => {
                        // console.log(singleMovie)
                        return (
                            <ListItem movie={singleMovie} smallCard={smallCard} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List
