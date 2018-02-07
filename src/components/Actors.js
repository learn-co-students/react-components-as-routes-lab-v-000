import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((el, index) => (<div key={index}><h2>Name: {el.name}</h2>
        {actors[index].movies.map(movie=>(<li>{movie}</li>))}
        </div>))}

    </div>
  );
};

export default Actors;
