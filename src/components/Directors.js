import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map((director, idx) =>
    <div key={idx}>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
      <ul>
        {
          director.movies.map((movie, idx) => <li key={idx}>{movie}</li>)
        }
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
