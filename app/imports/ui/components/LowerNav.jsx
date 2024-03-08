import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';

const LowerNav = () => (
  <Container style={{ position: 'absolute', marginTop: '4820px' }}>
    <Row>
      <Col className="text-center">
        <strong>About Us</strong>
        <div style={{ position: 'absolute', left: '128px' }} className="text-start">
          <Nav.Link style={{ padding: '2.5px', marginTop: '15px' }}>About Us Overview</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Leadership Team</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Values In Action</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Franchise Info</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Recalls & Alerts</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Real Estate</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Accessibility</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Investor Relations</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>News & Notifications</Nav.Link>
        </div>
      </Col>
      <Col className="text-center">
        <strong>Services</strong>
        <div style={{ position: 'absolute', left: '461px' }} className="text-start">
          <Nav.Link style={{ padding: '2.5px', marginTop: '15px' }}>Services Overview</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Wi-Fi</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>PlayPlaces & Parties</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>McDelivery®</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Mobile Order & Pay</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Trending Now</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>McDonald’s Merchandise</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Family Fun Hub</Nav.Link>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Nav.Link style={{ padding: '2.5px' }}>MyMcDonald's Rewards</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>McCafé®</Nav.Link>
        </div>
      </Col>
      <Col className="text-center">
        <strong>Community</strong>
        <div style={{ position: 'absolute', left: '780px' }} className="text-start">
          <Nav.Link style={{ padding: '2.5px', marginTop: '15px' }}>Community Overview</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Now Serving</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>HACER® Scholarships for<br />
            Hispanic Students
          </Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Ronald McDonald House<br />
            Charities®
          </Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>McDonald’s Asian Pacific<br />
            American
          </Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>McDonald’s International</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Black and Positively<br />
            Golden
          </Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>McDonald’s LGBTQ+</Nav.Link>
        </div>
      </Col>
      <Col className="text-center">
        <strong>Contact Us</strong>
        <div style={{ position: 'absolute', left: '1112px' }} className="text-start">
          <Nav.Link style={{ padding: '2.5px', marginTop: '15px' }}>Contact Us Overview</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Gift Card FAQs</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Donations</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Employment</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Customer Feedback</Nav.Link>
          <Nav.Link style={{ padding: '2.5px' }}>Frequently Asked<br />
            Questions
          </Nav.Link>
        </div>
      </Col>
    </Row>
    <Nav.Link style={{ position: 'absolute', left: '128px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/facebook.png?raw=true" alt="Facebook Logo" />
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '188px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/x.png?raw=true" alt="Twitter Logo" />
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '248px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/youtube.png?raw=true" alt="YouTube Logo" />
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '308px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/instagram.png?raw=true" alt="Instagram Logo" />
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '368px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/tumblr.png?raw=true" alt="Tumblr Logo" />
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '428px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/spotify.png?raw=true" alt="Instagram Logo" />
    </Nav.Link>

    <Nav.Link style={{ position: 'absolute', left: '978px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/app_store_badge.png?raw=true" alt="Apple App Store Logo" />
    </Nav.Link>
    <Nav.Link style={{ position: 'absolute', left: '1145px', top: '395px' }}>
      <img src="https://github.com/KentHB/mc-donalds-2/blob/main/my-app/src/images/google_play_badge.png?raw=true" alt="Google Play Store Logo" />
    </Nav.Link>
    <Row>
      <hr style={{ position: 'absolute', top: '480px', left: '80px' }}/>
    </Row>
  </Container>
);

export default LowerNav;
