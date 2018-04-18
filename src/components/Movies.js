import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const output = movies.map(({title, time, genres, metascore}) => {
    const genreList = genres.map(genre => <span className="badge" >{genre}</span>)
    return (
      <div key={title} >
        <h2>{title}</h2>
        <h4>{time} minutes</h4>
        {genreList}
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {output}
    </div>
  );
};

export default Movies;
