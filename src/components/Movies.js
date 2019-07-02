import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((m, i) => 
        <div key={i} className="movie">
          <h2>Name: {m.title}</h2>
          <h3>Time: {m.time}</h3>
          <h3>Genres:</h3>
          <ul>
            {m.genres.map((j, i) => 
              <li key={i}>{j}</li>
            )}
          </ul>
        </div>
        )}
    </div>
  );
};

export default Movies;
