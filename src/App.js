import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Resources/css/app.css';
import Layout from './Hoc/Layout';
import Home from './Pages/Home/Home';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact component={Home} path='/' />
        </Switch>
      </Layout>
    );
  }
}

export default App;
