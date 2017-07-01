import React from 'react';
import { directors } from '../data';

const decoratedDirectors = directors.map((director, index) => {
  return (
    <div key={index}
         className="director">
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>

    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {decoratedDirectors}
    </div>
  );
}

export default Directors
