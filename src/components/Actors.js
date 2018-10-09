import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
     <h1>Actors Page</h1>{actors.map(x => <div><h3>{x.name}</h3><ul>{x.movies.map(y => <li key={y}>{y}</li>)}</ul></div>)}
    </div>
  );
};

export default Actors;
