import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      	<div>	
	      <NavLink
	      	to='/'
	      >Home</NavLink>
		</div>
		<div>
	      <NavLink
			to='/movies'
	      >Movies</NavLink>
		</div>
	      <NavLink
			to='/directors'
	      >Directors</NavLink>
		<div>
	      <NavLink
			to='/actors'
	      >Actors</NavLink>
	    </div>
	    <br />  
    </div>
  )
}

export default NavBar
