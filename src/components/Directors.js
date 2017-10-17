import React from 'react';
import { directors } from '../data';
import moviesLi from '../mappers/movies';

const Directors = () => {
  const directorDivs = directors.map((director, index) => {
    return (
      <div key={index}>
        {director.name}
        <ul>
          {moviesLi(director.movies)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
