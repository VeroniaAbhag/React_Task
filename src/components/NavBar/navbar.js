import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { counterContext } from '../../Context/counter';
function NavBar() {
  const count=useSelector((state)=>state.counter);
  const language=useSelector((state)=>state.lang);
  const { lang, setLang } = useContext(counterContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      {/* <FontAwesomeIcon icon="fa-solid fa-film" /> */}
        <Navbar.Brand href="#Movies">Cinema Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink to='/Movies' style={{margin:"1%"}}>Movies</NavLink>
          <NavLink to='/Favorites' style={{margin:"1%"}}>Favorites{count}</NavLink>
          <NavLink to='/Form' style={{margin:"1%"}}>Login</NavLink>
          <NavLink to='/Form' style={{margin:"1%"}}>Register</NavLink>
          <h5>{lang}</h5>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;