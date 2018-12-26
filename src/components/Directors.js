import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {directors.map(director =>
        <div>
          <h3>{director.name}</h3>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

export default Directors
