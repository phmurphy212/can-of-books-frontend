import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Profile from './Profile';
import Login from './Login';
// import Logout from './Logout';
import Footer from './Footer';
import BestBooks from './BestBooks';

// import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  // makeRequest = async () => {
  //   const { getIdTokenClaims } = this.props.auth0;
  //   let tokenClaims = await getIdTokenClaims();
  //   const jwt = tokenClaims.__raw;
  //   console.log('jwt: ', jwt);
  //   const config = {
  //     headers: { "Authorization": `Bearer ${jwt}` },
  //   };

  //   const serverResponse = await axios.get('http://localhost:3001/test-login', config);

  //   console.log('it worked if data:  ', serverResponse);
  // }
  render() {
    console.log('app', this.props.auth0);
    const { user, isAuthenticated, isLoading } = this.props.auth0;

    if (isLoading) {
      return (
        <h3> Still Loading</h3>
      );
    } else {
      return (
        <>
          <Router>
            <IsLoadingAndError>
              <Header isAuthenticated = {
                isAuthenticated
              } />
              <Switch>
                <Route exact path="/">
                  {isAuthenticated ? <BestBooks /> : <Login />}
                </Route>
                <Route exact path="/profile">
                {isAuthenticated ? <Profile /> : <Login />}
                </Route>
              </Switch>
              <Footer />
            </IsLoadingAndError>
          </Router>
        </>
      )
    }
  }
}

export default withAuth0(App);
