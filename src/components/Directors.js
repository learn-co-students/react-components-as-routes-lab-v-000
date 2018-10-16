import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((dir, idx) => (
        <div key={idx}>
          <h2>{dir.name}</h2>
          <h4>Movies:</h4>
            <ul>
              {dir.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors