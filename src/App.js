import React, { Component } from 'react';

import classes from './App.css';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout />
      </div>
    );
  }
}

export default App;
