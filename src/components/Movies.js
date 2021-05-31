import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map((movie, index) => (
          <div key={index}>
            <h3>{movie.title}</h3>
            <p>Running Time: {movie.time}</p>
            <p>Genres: {movie.genres.join(" ")}</p>
            { (!!movie.metascore) ? <p>Metacritic Score: {movie.metascore}</p> : null}
          </div>
        ))}
    </div>
  );
};

export default Movies;
