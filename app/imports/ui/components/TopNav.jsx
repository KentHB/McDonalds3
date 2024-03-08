import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GeoAltFill, Search } from 'react-bootstrap-icons';

const TopNav = () => (
  <Navbar expand="lg">
    <Container style={{ marginBottom: '-5px' }}>
      <Navbar.Brand style={{ marginLeft: '55px', marginTop: '5px' }}>
        <img
          src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg"
          alt="McDonald's Logo"
        />
      </Navbar.Brand>
      <Nav
        className="me-auto"
        style={{ position: 'absolute', marginLeft: '220px',
          marginTop: '-75px', fontSize: '14px' }}
      >
        {/* eslint-disable-next-line react/no-children-prop */}
        <NavDropdown title="Language" children="" />
        <Nav.Link href="#email">
          <div style={{ marginLeft: '8px', marginRight: '8px' }}>
            Sign Up for Email
          </div>
        </Nav.Link>
        <Nav.Link href="#careers">
          <div style={{ marginLeft: '8px', marginRight: '8px' }}>
            Careers
          </div>
        </Nav.Link>
      </Nav>
      <Nav className="me-auto" style={{ position: 'absolute', marginLeft: '220px', marginTop: '44px' }}>
        {/* eslint-disable-next-line react/no-children-prop */}
        <NavDropdown title="Our Menu" children="" />
        <Nav.Link href="#app">
          <div style={{ marginLeft: '8px', marginRight: '4px' }}>
            Download App
          </div>
        </Nav.Link>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Nav.Link href="#rewards"><div className="nav-margin">MyMcDonald's Rewards</div></Nav.Link>
        <Nav.Link href="#deals"><div className="nav-margin">Exclusive Deals</div></Nav.Link>
        <Nav.Link href="#about"><div className="nav-margin">About Our Food</div></Nav.Link>
        <Nav.Link href="#locate"><div className="nav-margin">Locate</div></Nav.Link>
        <Nav.Link href="#gift-cards"><div className="nav-margin">Gift Cards</div></Nav.Link>
      </Nav>
      <Nav className="me-auto" style={{ marginLeft: '770px', marginTop: '-75px', position: 'absolute' }}>
        <Nav.Link style={{ fontSize: '14px', marginLeft: '5px', marginRight: '5px' }} href="#search">
          <Search /> Search
        </Nav.Link>
        <Nav.Link style={{ fontSize: '14px', marginLeft: '5px', marginRight: '20px' }} href="#search">
          <GeoAltFill style={{ color: 'red' }} /> <a href="#change-location">Change your Location</a>
        </Nav.Link>
        <Button variant="warning"><div>Order Now</div></Button>
      </Nav>
    </Container>
  </Navbar>
);

export default TopNav;
