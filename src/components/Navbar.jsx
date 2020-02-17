import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class NavBar extends Component {
  state = {};

  logOut = () => {
    localStorage.removeItem("accessToken");
  };

  render() {
    return (
      <>
          <Navbar color="light" light expand="md">
            <NavbarBrand>Assignment</NavbarBrand>
            <Nav className="m-auto" navbar>
                  
            <NavItem>
                <NavLink href="/form">
                  Form
                </NavLink>
              </NavItem>
         
           
      

            <NavItem>
                <NavLink href="/experiences">
                  Experience
                </NavLink>
              </NavItem>
        

              <NavItem>
                <NavLink href="/" onClick={() => this.logOut()}>
                  Log Out
                </NavLink>
              </NavItem>

            </Nav>
          </Navbar>
      </>
    );
  }
}

export default NavBar;
