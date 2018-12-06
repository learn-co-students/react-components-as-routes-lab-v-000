import React from 'react';
import { movies } from '../data';

const renderMovies = (movies) => {
    return movies.map(movie => {
        return <div>
                    <h4>Title: {movie.title}</h4>
                    <p>Time: {movie.time}</p>
                    <p>Genres: {movie.genres}</p>
                </div>
    })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { renderMovies(movies) }
    </div>
  );
};

export default Movies;
