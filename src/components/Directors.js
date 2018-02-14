import React from 'react';
import { directors } from '../data';

// {directors} === {directors: Array(3)}
// {name: "dude", movies: Array(3)}
const leaders = { directors }.directors.map(director => {
  return (
    <div>
      <h2>{director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map(movie =>
          <li>{movie}</li>
        )}
      </ul>
    </div>
  )
});


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {leaders}
    </div>
  );
}

export default Directors
