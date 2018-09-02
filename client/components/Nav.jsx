import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li ><Link id = "list"to='/Home'>Home</Link></li>
        <li><Link id = "list" to='/About'>About</Link></li>
        <li><Link id = "list" to='/Contact'>Contact</Link></li>
        <li><Link id = "list" to='/Login'>Login</Link></li>
        <li><Link id = "list" to='/Signup'>Sign up</Link></li>
      </ul>
    </div>
  )
}

export default Nav
