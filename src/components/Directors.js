import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => (<div>
                  <h4>{d.name}</h4>
                  
                  <ul>{d.movies.map(movie => (<li>{movie}</li>))}</ul>
                    </div>))}  
    </div>
  );
}

export default Directors
