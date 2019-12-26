import React from 'react';
import Movie from './Movie'
import { movies } from '../data';

const Movies = () => {


  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(m => {
          let g = m.genres.map(gr => {
            return <ul key={gr}>{gr}</ul>
          })
          return <Movie title={m.title} genres={g} time={m.time} key={m.title} metascore={m.metascore} />
        })
      }

    </div>
  );
};

export default Movies;
