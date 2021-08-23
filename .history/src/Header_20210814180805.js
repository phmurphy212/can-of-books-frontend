import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';
// import LoginButton from './LoginButton';

class Header extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand>My Favorite Books</Navbar.Brand>
            </Col>
            <Col>
              <Link to="/">Home</Link>
            </Col>
            <Col>
              <Link to="/profile">Profile</Link>
            </Col>

            {this.props.isAuthenticated ?
              <Col>
                <LogoutButton />
              </Col> : ''}
          </Row>
        </Container>
      </Navbar>

    );
  }
}

export default Header;
