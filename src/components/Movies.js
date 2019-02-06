import React from 'react';
import { movies } from '../data';

const Movie = ({title, time, genres}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{time}</p>
      <ul>{genres.map((genre, index)=><li>{genre}</li>)}</ul>
    </div>
  )
}


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(Movie)}
    </div>
  );
};

export default Movies;
