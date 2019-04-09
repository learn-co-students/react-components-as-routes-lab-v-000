import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
      <div key={index}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, index) => (
            <li key= {index}>{movie}</li>
        ))}
        </ul>
    </div>
  ))}
  </div>
  );
}

export default Directors

// Directors
//   1) should render one <h1 /> first, inside of the <div />
//   2) should render 'Directors Page' inside of the <h1 />
//   3) should render a <div /> for each director
//   4) should render the right content for each director
