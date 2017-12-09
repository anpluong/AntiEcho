import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';

class App extends Component {

  render() {
    return (
      <div>
        <div id="top-bar">
          <span id="login-link">
            <Link to={'/login'}>login with GitHub</Link>
          </span>
          {/* <span id="signup-link">
            <Link to={'/signup'}>signup</Link>
          </span> */}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route exact path='/' component={MainContainer} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
