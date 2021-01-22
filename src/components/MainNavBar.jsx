import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import coderSchoolLogo from '../images/CoderSchool-Logo.svg';
import githubMark from '../images/GitHub-Mark-64px.png';

const MainNavBar = () => (
  <Navbar bg='light' expand='lg'>
    <Navbar.Brand>
      <img src={coderSchoolLogo} alt='CoderSchool' width='200px' />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls='basic-navbar-nav' />

    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link as={Link} to='/'>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to='/jobs/0'>
          Job 0
        </Nav.Link>
        <Nav.Link as={Link} to='/jobs/1'>
          Job 1
        </Nav.Link>
        <Nav.Link as={Link} to='/jobs/2'>
          Job 2
        </Nav.Link>
        <Nav.Link as={Link} to='/jobs/3'>
          Job 3
        </Nav.Link>
        <Nav.Link as={Link} to='/jobs/4'>
          Job 4
        </Nav.Link>
        <Nav.Link as={Link} to='/jobs/5'>
          Job 5
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to='/login'>
          Login
        </Nav.Link>
        <Nav.Link
          href='https://github.com/lethang7794'
          target='_blank'
          rel='noreferrer'
        >
          <img src={githubMark} alt='Github' width='32px' />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MainNavBar;
