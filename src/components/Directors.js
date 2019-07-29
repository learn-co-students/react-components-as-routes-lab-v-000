import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => (
        <React.Fragment>
        <div>{director.name}
        <ul>
          <li>{director.movies}</li>
        </ul>
        </div> 
        </ React.Fragment>
      ))}
    </div>
 
  );
}

export default Directors
