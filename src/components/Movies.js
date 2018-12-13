import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map(m => <div>
                        <h2>{m.title} Metascore: {m.metascore}</h2>
                        <h4>Playtime: {m.time}</h4>
                        <p>Genres: {m.genres.map((g, idx) => <ul>
                                                            <li key={idx}>{g}</li>
                                                            </ul>)}
                          </p></div>)}
    </div>
  );
};

export default Movies;
