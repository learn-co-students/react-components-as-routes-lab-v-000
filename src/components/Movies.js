import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((e, i) =>
        <div key={i}>
          <p>{e.title} - Time: {e.time}</p>
          <p>Metascore: {e.metascore}</p>
          <p>Genres:{e.genres.map((e, i) =>
            ` ${e}`
          )}</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
