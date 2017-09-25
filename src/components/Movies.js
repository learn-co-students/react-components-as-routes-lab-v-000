import React from 'react';

const Movies = (props) => {
  return (
    <div>
      <h1>Movies Page</h1>
      {props.movies.map((movie,index) =>
      <div key={index}>
        {movie.title} ({movie.time} minutes)
        <ul>
          {movie.genres.map((genre,index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>)}
    </div>
  );
}

export default Movies;
