import React from 'react';
import { directors } from '../data';

const directorList = directors.map(director => <div>{director.name} {director.movies.map(movie=> <ul>{movie}</ul>)}</div>)


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
