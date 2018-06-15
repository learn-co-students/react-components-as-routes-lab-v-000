import React, { Component } from 'react';
import { movies } from '../data';

class Movies extends Component{
  render(){
    const movieList = movies.map((movie, i) =>
      <div key={i}>
        <h3>{movie.title}</h3>
        <p>Time: {movie.time}</p>
        Genres:
        <ul>
          {movie.genres.map(g => <li>{g}</li>)}
        </ul>
      </div>
    )
    return(
      <div>
        <h1>Movies Page</h1>
        {movieList}
      </div>
    )
  };
};

export default Movies;
