import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map((director, i) => {
      return (
        <div key={i}>
          <h4>{director.name}</h4>
          <ul>
            {
              director.movies.map((movie, i) => {
                return (
                  <li key={i}>{movie}</li>
                )
              })
            }
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
