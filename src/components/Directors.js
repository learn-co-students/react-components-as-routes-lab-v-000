import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsHTML = directors.map((director, index) => {
    return <div key={index}>
        <h1>{director.name}</h1>
        <ul>{director.movies.map((movie, index) => {return <li key={index}>{movie}</li>})}</ul>
      </div>
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsHTML}
    </div>
  );
}

export default Directors
