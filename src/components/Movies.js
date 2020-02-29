import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((mov, idx) => {
        return <div key={idx}>
          <h3>{mov.title}</h3>
          <p>{mov.time}</p>
          <p>{mov.metascore}</p>
          <ul>
            {mov.genres.map(gen => <li>{gen}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
