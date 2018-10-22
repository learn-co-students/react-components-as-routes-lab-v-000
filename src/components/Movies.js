import React from 'react';
import { movies } from '../data';

const BuildMovieList = () => {
  return (movies.map((movie, key)=> (
    <div className="movie" key={key}>
      <h2>Name: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <h3>Genres:</h3>
      <ul><BuildGenreList genres={movie.genres}/></ul>
    </div>
      )))
}

const BuildGenreList = ({genres})=>{
  return (genres.map((genre, key) => <li key={key}>{genre}</li>))
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <BuildMovieList />
    </div>
  );
};

export default Movies;
