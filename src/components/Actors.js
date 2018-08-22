import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {console.log(actors)}
      {actors.map((actor) => {
        return <div key={actor.name.toString()}>
          {console.log('actor : ', actor)}
          <strong>Name: {actor.name}</strong>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie) => {
              return <li key={movie.toString()}>{movie}</li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
