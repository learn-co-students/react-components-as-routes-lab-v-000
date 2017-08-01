import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsList = () => directors.map((director, index) =>
                                    <div key={index}>{director.name} {director.movies.map((movie, index) => <p key={index}>{movie}</p>)}
                                    </div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList()}
    </div>
  );
}

export default Directors
