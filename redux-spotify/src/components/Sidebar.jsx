import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo/Spotify_Logo.png';

const Sidebar = () => {
  const search = () => {
    // Implementa la logica di ricerca qui
    console.log('Ricerca eseguita');
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="left">
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="Spotify_Logo" width="131" height="40" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Nav className="flex-column">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} />&nbsp; Home
          </Link>
          <Link to="/artist" className="nav-link">
            <FontAwesomeIcon icon={faBookOpen} />&nbsp; Your Library
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <div className="input-group mt-3 mb-3">
          <FormControl
            type="text"
            id="searchField"
            placeholder="Search"
            className="mr-sm-2"
          />
          <div className="input-group-append">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={search}
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </div>
      </Form>
      <div className="nav-btn">
        <Button variant="light" className="signup-btn">
          Sign Up
        </Button>
        <Button variant="dark" className="login-btn">
          Login
        </Button>
        <Link to="#">Cookie Policy</Link> | <Link to="#">Privacy</Link>
      </div>
    </Navbar>
  );
};

export default Sidebar;