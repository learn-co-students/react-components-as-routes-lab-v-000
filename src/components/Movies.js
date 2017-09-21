import React from 'react';
import { movies } from '../data';

// {
//     title: 'Doctor Strange',
//     time: 115,
//     genres: ['Action', 'Adventure', 'Fantasy'],
//     metascore: 74
//   }

const Movies = () => {

  const movieLi = movies.map((movie, i) => {

    const genreLi = movie.genres.map((genre, idx) => <li key={idx}>{genre}</li>)

    return (
      <div>        
        Title: {movie.title} <br/>
        Run Time: {movie.time} <br/>
        Metascore: {movie.metascore} <br/>         
        <ul>
          {genreLi}
        </ul>
      </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {movieLi}
    </div>
  );
};

export default Movies;
