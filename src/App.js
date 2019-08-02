import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Troubles from './containers/Troubles/Troubles';
import About from './components/About/About';
import SignIn from './containers/Auth/SignIn/SignIn';
import Pin from './containers/Pin/Pin';
import SignOut from './containers/Auth/SignIn/SignOut/SignOut';


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Troubles}/>
            <Route path="/about" component={About}/>
            <Route path="/pin" component={Pin}/>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/signOut" component={SignOut}/>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
