import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsDiv = directors.map(director => (
    <div className="director">
      <h2>{director.name}</h2>
      Movies: {" "} 
        {director.movies.map(movie => (
          <ul>{movie}</ul>
        ))}
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
        {directorsDiv}
    </div>
  );
}

export default Directors
