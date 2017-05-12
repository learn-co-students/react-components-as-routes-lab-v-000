import React from 'react';
import { directors } from '../data';
import MoviesListItem from './MoviesListItem';

const Directors = () => {
  const buildList = (movies) => {
    return movies.map((movie, index) => {
      return <MoviesListItem movie={movie} key={index} />
    })
  }

  let directorsList = directors.map((director, index) => {
    return (
      <div key={index} className="director">
        <strong>Name: {director.name}</strong>
        <p>Movies:</p>
        <ul>
          {buildList(director.movies)}
        </ul>
      </div>
    )
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
