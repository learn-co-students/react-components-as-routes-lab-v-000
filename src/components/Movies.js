import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieList = movies.map((movie) => {
    return <div className="movie">
              <h3>Title: {movie.title}</h3>
              <h3>Time: {movie.time}</h3>
              <h3>Rating: {movie.metascore}</h3>
              <h4>Genres:</h4>
              <ul>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
              </ul>
            </div>;
      })

  return (
    <div>
      <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
