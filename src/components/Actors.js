import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return(
    <div>
      <h1>Actors Page</h1>
      {actors.map((e, i) =>
        <div key={i}>
          <p>{e.name}</p>
          <p>Movies:{e.movies.map((e, i) =>
            ` ${e}`
          )}</p>
        </div>
      )}
    </div>
  );
};

export default Actors;
