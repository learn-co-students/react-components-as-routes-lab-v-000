import React from 'react';
import {directors} from '../data';

const renderDirectors = () => {
  return directors.map((director, index) => {
    return (
      <div key={index}>
        <p>
          {director.name}
        </p>
        <ul>
          {renderMovies(director)}
        </ul>
      </div>
    )
  })
};

const renderMovies = director => {
  return director.movies.map((movie, index) => {
    return (
      <li key={index}>
        {movie}
      </li>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
      </h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
