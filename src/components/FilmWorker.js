import React from 'react'

const FilmWorker = (props) => {

    const renderMovies = () => {
        return (
            <ul>
                {props.movies.map(m => <li>{m}</li>)}
            </ul>
        )
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Movies:</h3>
            {renderMovies()}
            <hr/>
        </div>
        
    )
}

export default FilmWorker