import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from "../../assets/img/logo.jpg"
import { LinkContainer } from 'react-router-bootstrap'
import {  useNavigate } from 'react-router-dom'; 
const Header = () => {
  const navigate= useNavigate();

  const logout=()=>{
    navigate('/')
  }

  return (
  <Navbar
  collapseOnSelect
  bg='info'
  variant='dark'
  expand="md"
  >
    <Navbar.Brand>
    <img src={Logo} alt='Logo' width="50px"></img>
    </Navbar.Brand>
    <Navbar.Toggle
    aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id='basic-navbar-nav'>

        <Nav className="navbar-nav ms-auto">
          <LinkContainer to='/dashboard'>
          <Nav.Link >Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/tickets'>
          <Nav.Link >Tickets</Nav.Link>
          </LinkContainer>
          
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        
            
        </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
