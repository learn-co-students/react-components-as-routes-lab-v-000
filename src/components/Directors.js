import React from 'react';
import { directors } from '../data';


const createDirectors=()=>{
  return directors.map(d=>{
    return(
      <div>
        {d.name}
        <ul>
          {d.movies.map(m=>{
            return(<li>{m}</li>)
          })}

        </ul>

      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
    <h1> Directors Page </h1>
    {createDirectors()}

    </div>
  );
}

export default Directors
