import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
    	<ul>
	      	<div>	
		      <li><NavLink
		      	to='/'
		      >Home</NavLink></li>
			</div>
			<div>
		      <li><NavLink
				to='/movies'
		      >Movies</NavLink></li>
			</div>
		      <li><NavLink
				to='/directors'
		      >Directors</NavLink></li>
			<div>
		      <li><NavLink
				to='/actors'
		      >Actors</NavLink></li>
		    </div>
		</ul> 
    </div>
  )
}

export default NavBar
