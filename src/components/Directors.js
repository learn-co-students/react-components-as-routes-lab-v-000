import React from 'react';
import { directors } from '../data';

const Directors = () => {
  function generateDirectorEntry(director){
    return(
      <div>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie) => { return <li>{movie}</li>})}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {return generateDirectorEntry(director)})}
    </div>
  );
}

export default Directors
