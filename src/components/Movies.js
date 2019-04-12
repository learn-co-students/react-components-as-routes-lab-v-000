import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((m, i) => {
        return (
          <div className="actor" key={i}>
            <h3>Name: {m.title}</h3>
            <p>Time: {m.time} minutes</p>
            Genres: {m.genres.map((g, j)=> {
              return (
                <li key={j}>{g}</li>
              )
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
