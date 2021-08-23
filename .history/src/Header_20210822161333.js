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
        <Container fluid>
          <Row>
            <Col>
              <Navbar.Brand>My Favorite Books</Navbar.Brand>
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              {this.props.isAuthenticated ?
                <Col>
                  <LogoutButton />
                </Col> : ''}
            </Col>
          </Row>
        </Container>
      </Navbar>

    );
  }
}

export default Header;
