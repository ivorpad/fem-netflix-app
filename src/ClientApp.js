import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';
import Search from './Search';
import Layout from './Layout';
import Details from './Details';
import data from '../public/data.json';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class ClientApp extends Component {

  assignShow(nextState, replace) {
    const showArray = data.shows.filter((show) => show.imdbID === nextState.params.id);

    if(showArray.length < 1) {
      return replace('/');
    }

    Object.assign(nextState.params, showArray[0]);
    return nextState;
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Layout }>
          <IndexRoute component={ Landing }/>
          <Route path='/search' component={ Search } data={data}></Route>
          <Route path='/details/:id' component={ Details } onEnter={(evt, replace) => this.assignShow(evt, replace)}></Route>
        </Route>
     </Router>
    );
  }
}

export default ClientApp;
