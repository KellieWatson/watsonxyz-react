import React from 'react';
import {Navbar,Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

import './style/NavBar.css'

const NavBar=()=>{
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#Home">WatsonXYZ</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Link to="/" className="Topics">Home</Link>
                <Link to="/Finance" className="Topics">Finance </Link>
               <Link to="/Technology" className="Topics">Technology </Link>
               <Link to="/Tools" className="Topics">Tools </Link>
                <Link to="/AboutUs" className="Topics">About</Link>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;