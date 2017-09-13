import React from 'react';
import { directors } from '../data';

const directorsData = directors.map((director, index) => {
  return(
    <div key={index}>
      <p>Name: {director.name}</p>
      <p>Movies:</p>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  );
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsData}
    </div>
  );
}

export default Directors
