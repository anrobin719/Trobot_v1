import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Troubles from './containers/Troubles/Troubles';
import About from './components/About/About';


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/" exact component={Troubles}/>
            <Route to="/pin" component={Troubles}/>
            <Route to="/signIn" component={Troubles}/>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
