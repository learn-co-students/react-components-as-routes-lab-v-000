import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorElements = actors.map((actorObj) => {

    const actorsMovies = actorObj.movies.map((movieString) => {
     return <li>{movieString}</li> 
    });

    return <div>
      <div>
        <h3>{actorObj.name}</h3>
      </div>
      <div>
        <ul>
          {actorsMovies}
        </ul>
      </div>
      <hr/>
    </div>
  });

  return (
    <div className='container'>
      <h2>Actors Page</h2>
      <hr/>
      {actorElements}
    </div>
  );
};

export default Actors;
