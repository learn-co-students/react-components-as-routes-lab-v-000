import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>

        {movies.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.time}</p>

            <ul>
              {item.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>

  );
};

export default Movies;
