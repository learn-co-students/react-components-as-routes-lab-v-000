import React from 'react';
import { actors } from '../data';

const Actors = () => {
    const actorDivs = actors.map( actor => {
        return (
            <div className="actor">
            <h2>{actor.name}</h2>
            <ul>
            {actor.movies.map( movie =>{
                return (<li>{movie}</li>)
            })}
            </ul>
        </div>
               );
    })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
