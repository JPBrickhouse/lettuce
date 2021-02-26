import React from "react"

// Importing reacter router dom
import { Link } from 'react-router-dom'

// Importing components from React Bootstrap
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Col from "react-bootstrap/Col"

// Importing the image(s) for the Logo
import FishLogo from "./fish.png"

// Importing the custom stylesheet
import "./AppNavStyles.css"

// The Navigation Bar as a function
const AppNav = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" variant="light" sticky="top">
                {/* Brand Logo */}
                <Navbar.Brand as={Link} to="/" id="navBarHomeButton">
                    <img
                        id="sushiRotation"
                        alt="Logo for ASAP Poke of Make Sushi"
                        src={FishLogo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                    />
                    <h3 className="navText">
                        ASAP Poke
                    </h3>
                </Navbar.Brand>
                {/* The remainder of the NavBar that will collapse */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Col></Col>
                        <Nav.Link as={Link} to="/" className="navText navLinks"><h3>Home</h3></Nav.Link>
                        <Nav.Link as={Link} to="/" className="navText navLinks"><h3>Menu</h3></Nav.Link>
                        <Nav.Link as={Link} to="/" className="navText navLinks"><h3>Contact</h3></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

// Exporting the navigation bar as a function
export default AppNav;
