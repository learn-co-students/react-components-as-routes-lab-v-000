import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const array = directors;
  return (
    <div>
      <h1>Directors Page</h1>
      {array.map(director => {
        return (
          <div>
            {director.name}
            <ul>
              {director.movies.map(movie => {
                return (
                  <li>{movie}</li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Directors
