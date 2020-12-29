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
              <NavLink href="#portfolio-seccion">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skillset-seccion">Skill set</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience-seccion">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact-seccion">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
      
    </div>
    
)
}

export default NavbarComponent;