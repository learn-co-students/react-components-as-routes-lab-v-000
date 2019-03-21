import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map((director, index) => {
        return (
          <div className="director" key={index}>
            <h3 className="directorName">Name: {director.name}</h3>
            Movies:
            <ul className="movies">{ director.movies.map(movie => {
                return <li>{movie}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
