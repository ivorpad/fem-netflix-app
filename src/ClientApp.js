import React, { Component } from 'react';
import './App.css';
//import MyTitle from './MyTitle';
import Landing from './Landing';
import Search from './Search';
import Layout from './Layout';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class ClientApp extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Layout }>
          <IndexRoute component={ Landing }/>
          <Route path="/search" component={ Search }></Route>
        </Route>
     </Router>
    );
  }
}

export default ClientApp;
