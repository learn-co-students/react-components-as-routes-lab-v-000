import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>

      <h1>Directors Page</h1>

      {directors.map(director => {
        return <div key={director.name}>
          <h3>{director.name}</h3>
          <p>Movies:</p>
            <ul>
              {" " + director.movies.join(', ')}
            </ul>
            <hr></hr>
        </div>
      })}
    </div>
  );
}

export default Directors
