import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorList = directors.map((director, key) => {
    return <div className="director" key={key}>{director.name}
      <ul>
        {director.movies.map((movie, i) => <li key="{i}">{movie}</li>)}
      </ul>
    </div>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
