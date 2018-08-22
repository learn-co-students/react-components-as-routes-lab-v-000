import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
        <h1>Directors Page</h1>
        {console.log(directors)}
        {directors.map((director) => {
          return <div key={director.name.toString()}>
            {console.log('director : ', director)}
            <strong>Name: {director.name}</strong>
            <p>Movies:</p>
            <ul>
              {director.movies.map((movie) => {
                return <li key={movie.toString()}>{movie}</li>
              })}
            </ul>
          </div>
        })}
    </div>
  );
}

export default Directors
