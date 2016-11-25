import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';
import Search from './Search';
import Layout from './Layout';
import Details from './Details';
// import data from '../public/data.json';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
const { store } = require('./Store')
import { Provider } from 'react-redux'

class ClientApp extends Component {



  render() {

    return (
      <Provider store={store}>
          <Router history={ browserHistory }>
            <Route path="/" component={ Layout }>
              <IndexRoute component={ Landing }/>
              <Route path='/search' component={ Search } ></Route>
              <Route path='/details/:id' component={ Details }></Route>
            </Route>
         </Router>
      </Provider>   
    );
  }
}

export default ClientApp;
