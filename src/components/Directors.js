import React from 'react';
import { directors } from '../data';


const directorsList = directors.map((director, index) => (
    <div>
      {director.name}
      {director.movies.map((movie) =>
        <ul>{movie}</ul>)}
    </div>
  ))

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
