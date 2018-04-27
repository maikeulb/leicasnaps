import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout';
import Photos from './containers/Photos/Photos';
import './App.css';


class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={Photos} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
