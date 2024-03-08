import React from 'react';
import { Nav } from 'react-bootstrap';

const FooterNav = () => (
  <div>
    <Nav.Link style={{ position: 'absolute', left: '130px', top: '5340px', fontSize: '15.6px' }}>
      Privacy (Updated)
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '290px', top: '5340px', fontSize: '15.6px' }}>
      California Privacy Notice
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '495px', top: '5340px', fontSize: '15.6px' }}>
      Consumer Health Data
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '690px', top: '5340px', fontSize: '15.6px' }}>
      Terms & Conditions
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '130px', top: '5380px', fontSize: '15.6px' }}>
      Accessibility
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '250px', top: '5380px', paddingBottom: '100px', fontSize: '15.6px' }}>Do Not Sell or Share My Personal Information
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '605px', top: '5380px', fontSize: '15.6px' }}>
      Cookie Settings
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '925px', top: '5340px' }}>
      <img style={{ width: '29px' }} src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/little-mac.jpg?raw=true" alt={"McDonald's Logo"} />
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '1040px', top: '5340px', fontSize: '15.6px' }}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      © 2017 - 2024 McDonald's. All Rights
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '1236px', top: '5358px', fontSize: '15.6px' }}>
      Reserved
    </Nav.Link>
  </div>
);

export default FooterNav;
