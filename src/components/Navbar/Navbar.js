import React, { useState } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, NavLink} from "reactstrap";

const NavbarComponent = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
return (
    <div className="row">
        <div className="col-md-12">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Icon</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#here">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#here">Skill set</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
      
    </div>
    
)
}

export default NavbarComponent;