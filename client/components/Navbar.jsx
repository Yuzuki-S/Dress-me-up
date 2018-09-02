import React from 'react'
var Navbar = require("react-bootstrap").Navbar;

var Header = React.createClass({
  render: function() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap Sample</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav pullRight>
          <NavDropdown eventKey={1} title="Settings" >
            <MenuItem eventKey={1.1}>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>Sign out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
});

export default Header