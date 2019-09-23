import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map((director, id) => {

      const movies = director.movies.map((movie, id) => {
        return <li key={id}>{movie}</li>
      })

      return (
        <div key={id}>
        {director.name}
          <ul>
            {movies}
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
