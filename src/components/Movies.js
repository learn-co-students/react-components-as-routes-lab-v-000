import React from 'react';
import { movies } from '../data';

const Movies = () => {


const Movie = ({title, time, genres}) => {
  return (
    <div >
    <h3>Title: {title}</h3>
    <h4>Time: {time}</h4>
    <h4>Genres:</h4>
    <ul>{genres.map((genre, index) => (
    <li> {genre}</li>))}
    </ul>
       
    </div>
  )
}

return (
  <div>
    <h1>Movies Page</h1>
    {movies.map(Movie)}
  </div>
);
};

export default Movies;
