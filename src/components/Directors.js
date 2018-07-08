import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {directors.map(director =>
        <div>
          <h2>Name</h2>
            <p> {director.name} </p>
            <h4> Movies: </h4>
            {director.movies.map(movie =>
              <ul>
                {movie}
              </ul>
            )}
        </div>
      )}
    </div>
  );
}

export default Directors
