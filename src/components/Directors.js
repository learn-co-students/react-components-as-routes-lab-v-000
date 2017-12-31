import React from 'react';
import { directors } from '../data';

const listItems = directors.map((director, index) =>
  <div key={index}>
    <h3>{director.name}</h3>
    <ul>{director.movies.map((movie, ind) =>
      <li key={ind}>{movie}</li>)}
    </ul>
  </div>
)

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {listItems}
    </div>
  );
}

export default Directors
