import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(direct =>
        <div>
          <h2>{direct.name}</h2>
          <p>{direct.movies}</p>
        </div>
      )}
    </div>
  );
}

export default Directors
