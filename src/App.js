import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ManageToko from './components/ManageToko';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/managetoko" component={ManageToko} />
      </div>
    )
  }
}

export default App;