import React from 'react';
let movies = [
  {
    title: 'Doctor Strange',
    time: 115,
    genres: ['Action', 'Adventure', 'Fantasy'],
    metascore: 74
  },
  {
    title: 'Trolls',
    time: 92,
    genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy']
  },
  {
    title: 'Jack Reacher: Never Go Back',
    time: 118,
    genres: ['Action', 'Adventure', 'Crime', 'Mystery', 'Thriller']
  }
]

const Movies = () => {
  const moviesArr = movies.map(movie =>
    <div>
      Title: {movie.title}<br/>
      Time: {movie.time}<br/>
      <ul>
      Genres: {movie.genres.map(genre =>
        <li>{genre}</li>
      )}</ul><br/>
      metascore: {movie.metascore}<br/><br/>
    </div>
  )
  return (

    <div>
      <h1>Movies Page</h1>
      {moviesArr}
    </div>
  );
};

export default Movies;
