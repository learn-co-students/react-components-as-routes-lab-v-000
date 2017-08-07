import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorMovies = (director) => director.movies.map((movie) => <li>{movie}</li>)

  let directorDivs = directors.map((director, index) => (
    <div key={index}>
      <h4>Name: {director.name}</h4>
      <p>Movies:</p>
      <ul>
        {directorMovies(director)}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
