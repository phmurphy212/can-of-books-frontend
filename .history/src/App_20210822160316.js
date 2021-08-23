import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Profile from './Profile';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 

import Footer from './Footer';
import BestBooks from './BestBooks';



import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  render() {
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
              <Header isAuthenticated={
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
            </IsLoadingAndError>
          </Router>
          <Footer />
        </>
      )
    }
  }
}

export default withAuth0(App);
