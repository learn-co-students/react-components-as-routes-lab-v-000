import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {
  renderMetascore = (movie) => {
    if (movie.metascore) {
      return movie.metascore
    } else {
      return "N/A"
    }
  }

  render() {
    return (
      <div>
          <h1>Movies Page</h1>
          {movies.map(m => {
            return (
              <div>
                <ul>
                  <li>{m.title}</li>
                  <ul>
                    <li>
                      <label for="time">Time: </label>
                      {m.time} minutes
                    </li>
                    <li>
                      <label for="genres">Genres: </label>
                      {m.genres.join(", ")}
                    </li>
                    <li>
                      <label for="metascore">Metascore: </label>
                      {this.renderMetascore(m)}
                    </li>
                  </ul>                
                </ul>
              </div>
            )
          })}
      </div>
    );
  }
}

export default Movies;
