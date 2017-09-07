import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,index) =>
        <div className="director" key={index}>
          <h3>Name: {director.name}</h3>
          {director.movies.map((movie, index)=>(
            <p key={index}>{movie}</p>
          )
          )}
        </div>)}
    </div>
  )
}

export default Directors
