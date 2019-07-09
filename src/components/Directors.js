import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        { directors.map((director) => 
        <div className = 'director' >
            <h2>{director.name}</h2>
            <h3>Movies Directed: {director.movies.map((name) =>
              <ul> {name} </ul>)}</h3>
        </div>
        )}
    </div>
  );
}

export default Directors
