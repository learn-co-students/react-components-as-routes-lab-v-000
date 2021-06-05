import React from 'react';
import { movies } from '../data';

//this is a function component
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>Length: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {" " + movie.genres.join(', ')}
          </ul>
          <hr></hr>
        </div>
      })}
    </div>
  );
};

export default Movies;
//without return
// const Movies = () => {
//   return (
//     <div>
//       <h1>Movies Page</h1>
//       {movies.map((movie, index) => (
//           <div key={index}>
//               <h3>Name: {movie.title}</h3>
//               <p>Time: {movie.time}</p>
//               <p>Genres:</p>
//               <ul>
//                   {movie.genres.map((genre, index) => (
//                       <li key={index}>{genre}</li>
//                   ))}
//               </ul>
//           </div>
//       ))}
//     </div>
//   );
// };