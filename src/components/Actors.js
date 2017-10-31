import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index)=>{
        return (<div key={index}>
            <p>Name: {actor.name}</p>
            <ul>
              {actor.movies.map((movie, movieIndex)=>{
                return (<li key={movieIndex}>{movie}</li>)
              })}
            </ul>
          </div>);
      })}
    </div>
  );
};

export default Actors;
