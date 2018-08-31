import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const displayMovies = () => {
    return movies.map(({title,time,genres}, index) => {
      return (<div key={index}>
        <h2>{title}</h2>
        <h3>{time}</h3>
        <ul>
          {genres.map((genre,index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>)
    })
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {displayMovies()}
    </div>
  );
};

export default Movies;
