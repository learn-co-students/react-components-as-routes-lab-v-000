import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorList = directors.map(director =>
    <div className='director'>{director.name}
      {director.movies.map(movie => <ul>{movie}</ul>)}
    </div>
  )

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
