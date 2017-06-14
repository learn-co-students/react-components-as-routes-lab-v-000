import React from 'react';
import { movies } from '../data';

const Movies = () => {
    const movieDivs = movies.map(movie => {
       return <div className="movie">
            <h1>Name: {movie.title}</h1>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
                {movie.genres.map(genre => {
                    return (<li>{genre}</li>)
                })}
            </ul>
        </div>
    })
    return (
        <div>
            <h1>Movies Page</h1>
            {movieDivs}
        </div>
    );
};

export default Movies;
