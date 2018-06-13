import React from 'react';
import { directors } from '../data';

const directorsList = directors.map((director, index) => {
  return (
    <div>
      <h2 key={index}>{director.name}</h2>
      <p>Movies: {director.movies.join(", ")}</p>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
