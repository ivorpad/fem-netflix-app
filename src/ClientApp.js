import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';
import Search from './Search';
import Layout from './Layout';
import Details from './Details';
import data from '../public/data.json';
//import { store } from './Store';
//import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class ClientApp extends Component {

  constructor (props) {
    super(props);

    this.assignShow = this.assignShow.bind(this);
  }

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
      <Router history={ browserHistory }>
        <Route path="/" component={ Layout }>
          <IndexRoute component={ Landing }/>
          <Route path='/search' component={ Search } data={data}></Route>
          <Route path='/details/:id' component={ Details } onEnter={this.assignShow}></Route>
        </Route>
     </Router>
    );
  }
}

export default ClientApp;
