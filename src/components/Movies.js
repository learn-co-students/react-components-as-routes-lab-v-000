import React from 'react';
import { movies } from '../data';

let moviesHTML = movies.map(movie=>{
  return (<div>
    <h3>{movie.title}</h3>
    <h5>{movie.time} minutes</h5>
    <ul>
      {movie.genres.map(genre=><li>{genre}</li>)}
    </ul>
    <h5>Metascore: {movie.metascore}</h5>
  </div>
  );
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        { moviesHTML }
    </div>
  );
};

export default Movies;
