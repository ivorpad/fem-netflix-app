import React, { Component } from 'react';
import './App.css';
import MyTitle from './MyTitle';
import Landing from './Landing';
import Search from './Search';

import { Router, Route, hashHistory } from 'react-router';

class ClientApp extends Component {
  render() {
    return (
     <Router history={ hashHistory }>
        <Route path="/" component={ Landing }/>
        <Route path="/search" component={ Search }></Route>
     </Router>
    );
  }
}

export default ClientApp;
