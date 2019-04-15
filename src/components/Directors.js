import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorInfo = directors.map((director, index) => {
    return <div key={ index }>
      <h2>{director.name}</h2>
      <ul>{director.movies.map((movie, index) => (
          <li key={ index }>{ movie }</li>
      ))
    }
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      { directorInfo }
    </div>
  );
}

export default Directors
