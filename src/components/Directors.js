import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map((dir, idx) =>
        <div key={ idx }>
          <h2>{ dir.name }</h2>
          <ul>
            { dir.movies.map((mov, idx) =>
              <li key={ idx }>{ mov }</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Directors
