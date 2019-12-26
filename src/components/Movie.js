import React from 'react';
import { actors } from '../data';

class Movie extends React.Component {


  constructor(props) {

    super()
    //debugger
  }



  render () {
    return(

      <div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.time}</h4>
        <h3>{this.props.metascore}</h3>

         {this.props.genres.map(g => {
           return <ul key={g}>{g}</ul>
         })}

      </div>

    )
  }
}

export default Movie;
