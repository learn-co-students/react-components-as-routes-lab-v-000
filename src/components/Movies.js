import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {/*console.log(movies)*/}
        {movies.map((movie) => {
          return <div key={movie.title.toString()}>
            {/*console.log('movie : ', movie)*/}
            <strong>Name: {movie.title}</strong>
            <p>Time: {movie.time}</p>
            Genres:
            <ul>
              {movie.genres.map((genre) => {
                return <li key={genre.toString()}>{genre}</li>
              })}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
