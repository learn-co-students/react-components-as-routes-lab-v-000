import React from 'react';
import { movies } from '../data';

// const films = {movies}.movies // {movies: Array(3)}
// {title: "dr", time: 115, genres: [a,b,c], metascore: 43}
const films = {movies}.movies.map(film => {
  return (
    <div>
      <h2>{film.title}</h2>
      <ul>
        <li>{film.time} minutes</li>
        <li>{film.metascore ? `${film.metascore} on metacritic` : `No metacritic score`} </li>
        <li>{film.genres.join(", ")}</li>
      </ul>
    </div>
  )
})
const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {films}
    </div>
  );
};

export default Movies;
