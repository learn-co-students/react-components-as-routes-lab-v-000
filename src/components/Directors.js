import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(
          (director, id1) => (
            <div className="director" key={id1}>
              <p>{director.name}</p>
              <ul>{director.movies.map( (movie, id2) => <li key={id2}>{movie}</li> )}</ul>
            </div>
        )
      )}
    </div>
  );
}

export default Directors
