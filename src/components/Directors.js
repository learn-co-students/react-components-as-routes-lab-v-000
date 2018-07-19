import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map( d => <div>
    <h3> {d.name} </h3>
    <p> Movies: </p>
    <ul> {d.movies.map( movie => <li> {movie} </li>)}</ul>
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
