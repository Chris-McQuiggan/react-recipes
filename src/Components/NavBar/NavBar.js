import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
 
  import 'bootstrap/dist/css/bootstrap.css';
  import Options from './Options';


export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Recipe Box</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Options /></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
