import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsDiv = directors.map((director, index) => (
    <div key={index}>
      <p>{director.name}</p>
      <ul>
        {director.movies.map((movie, index) => ( <li>{movie}</li> ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDiv}
    </div>
  );
}

export default Directors
