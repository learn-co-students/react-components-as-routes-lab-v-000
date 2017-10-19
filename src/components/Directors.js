import React from 'react';
let directors = [
  {
    name: 'Scott Derrickson',
    movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
  },
  {
    name: 'Mike Mitchell',
    movies: ['Trolls', 'Alvin and the Chipmunks: Chipwrecked', 'Sky High']
  },
  {
    name: 'Edward Zwick',
    movies: ['Jack Reacher: Never Go Back', 'Blood Diamon', 'The Siege']
  }
]


const Directors = () => {
  const directorsArr = directors.map((director, index) =>
    <div key={index}>
      {index}. {director.name}
      <ul>
      {director.movies.map((movie, index) =>
        <li key={index}>{movie}</li>
      )}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArr}
    </div>
  );
};
export default Directors
