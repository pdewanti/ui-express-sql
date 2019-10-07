import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ManageToko from './components/ManageToko';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import WaitingEmailVerification from './components/WaitingEmailVerification';
import EmailVerified from './components/EmailVerified';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/managetoko" component={ManageToko} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/waitingemailverification" component={WaitingEmailVerification} />
          <Route path="/emailverified" component={EmailVerified} />
        </div>
      </div>
    )
  }
}

export default App;