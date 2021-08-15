import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './Login.css';
// import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from './LoginButton';

class Logout extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>
              Click Below to Log In
            </Card.Text>
            {<LogoutButton />}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Logout;
