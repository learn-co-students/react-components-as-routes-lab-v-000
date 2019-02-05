import React from 'react';
import { directors } from '../data';

const createDirectors = director => {
  return(
    <div>
        <h2>Name: {director.name}</h2>

        Movies:
        <ul>
          {director.movies.map(movie => { return <li>{movie}</li> })}
        </ul>
    </div>
  )
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => createDirectors(director))}
    </div>
  );
}

export default Directors
