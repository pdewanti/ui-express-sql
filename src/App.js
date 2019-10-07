import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ManageToko from './components/ManageToko';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

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
        </div>
      </div>
    )
  }
}

export default App;