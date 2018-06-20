import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorList = directors.map((d) => {

    // console.log("Actor Object: ", a)
    const movies = d.movies.map((m) => {
      return (<li> {m} </li>)
    })

    console.log("Movies:", movies)

    return (
      <div className="director">
      {d.name} <br/>
      Movies:
        <ul>
          {movies}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
        {directorList}
    </div>
  );
}

export default Directors
