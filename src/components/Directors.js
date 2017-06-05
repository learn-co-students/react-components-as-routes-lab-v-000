import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((e, i) =>
        <div key={i}>
          <p>{e.name}</p>
          <p>Movies:{e.movies.map((e, i) =>
            ` ${e}`
          )}</p>
        </div>
      )}
    </div>
  );
}

export default Directors
