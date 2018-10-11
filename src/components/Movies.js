import React from 'react';
import { movies } from '../data';



const Movies = () => {
  function generateGenreList(genres){
    return (
      <ul>
        {genres.map((genre) => { return <li>{genre}</li>})}
      </ul>
    )
  }
  function generateMovieList() {
    return movies.map((movie) => {
      return (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.time} minutes</p>
          {generateGenreList(movie.genres)}
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {generateMovieList()}
    </div>
  );
};

export default Movies;
