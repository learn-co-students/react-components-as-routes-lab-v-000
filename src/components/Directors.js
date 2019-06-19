import React from 'react';
import { directors } from '../data';

const directorList = () => {
  return (
    directors.map(director =>
      <div key={director.name}>
        {director.name}
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
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
      {/*{code here}*/}
    </div>
  );
}

export default Directors
