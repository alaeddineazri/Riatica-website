import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navbar.css";
import { Link } from 'react-router-dom'




function NavBar() {

  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
   
    <Navbar

      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/">
        <Link className=" link px-5" to="/"><img src="images/logo.png" className="img-fluid  logo" alt="brand" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto px-5  " defaultActiveKey="#home">
            <Nav.Item>
              <Link className="link"  to="/"  >
                  Acceuil
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="link"  to="about"  >
                  A propos 
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="link"  to="services" >
                  Services
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="link"  to="contacts"  >
                  Contacts
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;