import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map ((director,dirIndex) => <div key={dirIndex}>
        <p>Name: {director.name}</p>
        <ul>
          {director.movies.map ( (movie,movIndex) => <li key={movIndex}>{movie}</li>)}
        </ul>
      </div> )}
    </div>
  );
}

export default Directors
