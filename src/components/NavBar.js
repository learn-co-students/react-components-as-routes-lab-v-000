import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    	<ul>
	      	<div>	
		      <li><NavLink
		      	to='/'
		      	exact
		      >Home</NavLink></li>
			</div>
			<div>
		      <li><NavLink
				to='/movies'
				exact
		      >Movies</NavLink></li>
			</div>
		      <li><NavLink
				to='/directors'
				exact
		      >Directors</NavLink></li>
			<div>
		      <li><NavLink
				to='/actors'
				exact
		      >Actors</NavLink></li>
		    </div>
		</ul> 
    </div>
  )
}

export default NavBar
