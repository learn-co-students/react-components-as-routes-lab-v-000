import React from 'react';
import { movies } from '../data';

const movieList = () => {
  return (

    movies.map(movie =>
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>Time: {movie.time}</p>
        <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movieList()}

        {/*{code here}*/}
    </div>
  );
};

export default Movies;
