import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieElements = movies.map((movieObj) => {

    const movieGenres = movieObj.genres.map((genreString) => {
      return <li>{genreString}</li>
    });

    return <div>
      <div>
      <h3>{movieObj.title}</h3>
      </div>
      <div>
        Time: {movieObj.time}
      </div>
      <ul>
        {movieGenres}
      </ul>
      <hr/>
    </div>
  })
  return (
    <div className='container'>
        <h2>Movies Page</h2>
        <hr/>
        <div>
          {movieElements}
        </div>
    </div>
  );
};

export default Movies;
