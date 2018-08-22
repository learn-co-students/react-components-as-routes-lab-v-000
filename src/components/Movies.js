import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {generateMovies()}
    </div>
  );

};

const generateMovies = () => {
  return movies.map(movie => {
    return(
      <div key={movie.title}>
        <h2>{movie.title}</h2><br/>
        <h4>Time: {movie.time}</h4><br/>
        <ul>{movie.genres.map(genre => {
          return <React.Fragment><li key={genre}>{genre}</li><br /></React.Fragment>;
        })}</ul>
      </div>
    );
  });
}
export default Movies;
