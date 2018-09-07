import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavDropdown, Nav, NavItem,MenuItem } from 'react-bootstrap'



const Navy = () => {
  return (

      <Navbar inverse  >
        <Nav>
        <Navbar.Header>
          <Navbar.Brand>
          <Link to='/Home'>Home</Link>
          </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Brand>
          <Link to='/About'>About</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to='/Contact'>Contact</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to='/Login'>Login</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to='/Signup'>Sign up</Link>
          </Navbar.Brand>
        </Nav>
      </Navbar>

  )
}

export default Navy


