import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../Assest/Logo (1).png';
import './landingpage.css'
import Nav from 'react-bootstrap/Nav';
function LandingNav() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="img"></img></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home" className="landingpage_links me-5" id="landingpage_links_hover">Home</Nav.Link>
            <Nav.Link className="landingpage_links me-5" href="#features">Features</Nav.Link>
            <Nav.Link className="landingpage_links me-5" href="#pricing">Pricing</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LandingNav;
