import React from 'react';
import { movies } from '../data';

// {movies} // => {movies: Array(3)}
// {title: "dr", time: 115, genres: [a,b,c], metascore: 43}
// const films = {movies}.movies.map(film => {
//   return (
//     <div>
//       <h2>{film.title}</h2>
//       <ul>
//         <li>{film.time} minutes</li>
//         <li>{film.metascore ? `${film.metascore} on metacritic` : `No metacritic score`} </li>
//         <li>{film.genres.join(", ")}</li>
//       </ul>
//     </div>
//   )
// })
const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <ul>
              <li>{movie.time} minutes</li>
              <li>{movie.metascore ? `${movie.metascore} on metacritic` : `No metacritic score`} </li>
              <li>Genres</li>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
