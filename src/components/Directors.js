import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <React.Fragment>
      </React.Fragment>
      <React.Fragment>
        {directors.map(dir =>
          <div>
            <h3> {dir.name} </h3>
            Movies:
            <ul>
              {dir.movies.map(movie =>
                <li>{movie}</li>
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    </div>
  );
}

export default Directors
