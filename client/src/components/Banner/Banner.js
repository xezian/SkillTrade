import React from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import Side from '../SideNav';
import './Banner.css';

const Banner = props => (
  <Row id="banner">
    <div className="banner-div">
      <Col s={1} m={1} l={1}>
        {!props.signedIn ? (
          <Side signedIn={false} />
        ) : (
          <Side signedIn={true} />
        )}
      </Col>
      <Col s={11} m={7} l={8} />
      <Col m={4} l={3}>
        <ul className="navbar">
          {!props.signedIn ? (
            <div>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </div>
          ) : (
            <li>
              <Link to="/">Log Out</Link>
            </li>
          )}
        </ul>
      </Col>
    </div>
  </Row>
);

export default Banner;
