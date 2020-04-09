import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const listMovies = () =>  {
    return movies.map(({title, time, genres}) => (
      <div key={title}>
        {title} - {time} minutes
        <ul>{genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
      </div>
    ));
  };
  
  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies()}
    </div>
  );
};

export default Movies;
