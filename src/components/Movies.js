import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesHTML = movies.map((m, i) => {
    return(
      <div key={i}>
        <h3>{m.title}</h3>
        <p>Time: {m.time}</p>
        <ul>
          {m.genres.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {moviesHTML}
    </div>
  );
};

export default Movies;
