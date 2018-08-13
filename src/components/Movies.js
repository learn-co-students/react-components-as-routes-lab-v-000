import React from 'react';
import { movies } from '../data';
//and make a new <div> for each movie. The <div> should contain the movie's title, time and an <ul> for each genre.



const Movies = () => {
  console.log({ movies })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map ((movie,idx) => <div key={idx}>
          <p>Title: {movie.title}</p>
          <p> Time: {movie.time} </p>
          <ul>
            {movie.genres.map ((genre,index)=> <li key={index}>{genre}</li>)}
          </ul>
        </div> )}
    </div>
  );
};

export default Movies;
