import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assest/Logo (1).png";
import "../Listener/listenernav.css";
import Nav from "react-bootstrap/Nav";

function CreatorNavbar() {
  const [data, setData] = useState({ dob: "", image: { filename: "" } });
  const url = "http://localhost:4000";

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="img"></img>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              href="/"
              className="landingpage_links me-5"
              id="landingpage_links_hover"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/subscription"
              className="landingpage_links me-5"
              id="landingpage_links_hover"
            >
            Subscription
            </Nav.Link>
            <Nav.Link to="/" class="nav-link" href="#">
            <div className="circular-img">
              <img
              src="https://tse1.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&rs=1&c=1&qlt=95&w=167&h=110"
              alt="img"
                className="profileimg"
              ></img>
              </div>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CreatorNavbar;
// {`${url}/${data.image.filename}`}