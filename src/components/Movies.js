import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    {movieList()}
    </div>
  );
};

const movieList = () => {
  return movies.map(m => {
    return(
      <div key={m.title}>
        <h2>{m.title}</h2><br/>
        <h4>Time: {m.time}</h4><br/>
        <ul>{m.genres.map(genre => {
          return <React.Fragment><li key={genre}>{genre}</li><br /></React.Fragment>;
        })}</ul>
      </div>
    )
  })
}

export default Movies;
