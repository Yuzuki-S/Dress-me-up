import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Login'>Login</Link></li>
        <li><Link to='/Signup'>Sign up</Link></li>
      </ul>
    </div>
  )
}

export default Nav
