import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Movies from '../components/Movies'
import Directors from '../components/Directors'
import Actors from '../components/Actors'
import { movies, directors, actors } from '../data'

const App = (props) => {
  return (
    <Router>
      <React.Fragment>
      	<NavBar />
      	<Route exact path='/' component={Home} />
      	<Route exact path='/movies' component={Movies} movies={movies} />
      	<Route exact path='/directors' component={Directors} directors={directors}/>
      	<Route exact path='/actors' component={Actors} actors={actors}/>
      </React.Fragment>
    </Router>
  )
}

export default App
