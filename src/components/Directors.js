import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsDiv = directors.map(director => <li>
    <div className="director"> {director.name} <br/>
    {director.movies.map(movie=> <h3>{movie}</h3>)}
    </div></li>)
  return (
    <div>
    <h1>Directors Page</h1>
    <ul>
      {directorsDiv}
      </ul>
    </div>
  );
}

export default Directors
