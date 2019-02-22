import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map(director =>
    <div>
      <h3 className="director">Name: { director.name }</h3>
      <ul>{director.movies.map((movie,i) => <li key={i}>{ movie }</li>)}</ul>
    </div>
  )
  return (
    <div>
      <h1>Directors Page</h1>
      { directorsList }
    </div>
  );
}

export default Directors
