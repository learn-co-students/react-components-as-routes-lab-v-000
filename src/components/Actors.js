import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsHTML = actors.map((a, i) => {
    return (
      <div key={i}>
        <h3>{a.name}</h3>
        <ul>
          {a.movies.map((m,i) => <li key={i}>{m}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorsHTML}
    </div>
  );
};

export default Actors;
