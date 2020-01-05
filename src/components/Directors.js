import React from 'react';
import { directors } from '../data';

const directorList = () => {
  return (
    directors.map((director) => 
        <div>
          <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => <li>{movie}</li>)}
            </ul>
        </div>
      )
    )
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList()}
    </div>
  );
}

export default Directors
