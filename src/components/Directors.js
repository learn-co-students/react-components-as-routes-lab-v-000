import React from 'react';
import { directors } from '../data';

const BuildDirectorsList = () =>{
  return (
      directors.map((director, key )=> (
        <div className="director" key={key}>
          <h2>Name: {director.name}</h2>
          <h3>Movies:</h3>
          <ul><BuildMovieList movies={director.movies}/></ul>
        </div>
      ))
  )
}

const BuildMovieList = ({movies}) => {
  return (
    movies.map((movie, key) =><li key={key}>{movie}</li>)
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <BuildDirectorsList />
    </div>
  );
}

export default Directors
