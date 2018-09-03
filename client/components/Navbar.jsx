import React from 'react'
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


<Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
<NavItem eventKey="1" href="/home">
  Home
</NavItem>
<NavItem eventKey="2" title="Item">
  About
</NavItem>
<NavItem eventKey="3" disabled>
  Contact
</NavItem>
<NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
  <MenuItem eventKey="4.1">Action</MenuItem>
  <MenuItem eventKey="4.2">Another action</MenuItem>
  <MenuItem eventKey="4.3">Something else here</MenuItem>
  <MenuItem divider />
  <MenuItem eventKey="4.4">Separated link</MenuItem>
</NavDropdown>
</Nav>

export default Header