import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import Troubles from './containers/Troubles/Troubles';
import About from './components/About/About';
import SignIn from './containers/Auth/SignIn/SignIn';
import Pin from './containers/Pin/Pin';
import SignOut from './containers/Auth/SignIn/SignOut/SignOut';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  render() {

    let routes = (
      <Switch>
          <Route path="/" exact component={Troubles}/>
          <Route path="/about" component={About}/>
          <Route path="/signIn" component={SignIn}/>
          <Redirect to="/" />
        </Switch>
    );

    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/" exact component={Troubles}/>
          <Route path="/about" component={About}/>
          <Route path="/pin" component={Pin}/>
          <Route path="/signOut" component={SignOut}/>
          <Redirect to="/" />
        </Switch>
      );
    }
    
    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.checkAuthState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
