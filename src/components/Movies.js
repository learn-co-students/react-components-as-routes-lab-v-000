import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map((mov, idx) => 
        <div key={ idx }>
          <h2>{ mov.title }</h2>
          <h3>Length: { mov.time }</h3>
          <ul>
          { mov.genres.map((gnr, idx) => 
            <li key={ idx }>{ gnr }</li>
          )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
