// This is extra, but I like the idea of refactoring.

import React, { PureComponent } from 'react';

class Person extends PureComponent {
  render() {
    const {name, movies} = this.props;

    return (
      // I tried the <></> syntax, but it doesn't work in this lab.
      <React.Fragment>
        <h3>Name: {name}</h3>
        <p>Movies:</p>
        <ul>
          {movies.map( (movie, index) => 
            <li key={index}>{movie}</li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default Person;