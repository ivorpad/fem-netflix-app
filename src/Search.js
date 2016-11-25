import React, { Component } from 'react';
import ShowCard from './ShowCard';
const { object } = React.PropTypes;
import Header from './Header';
const { connector } = require('./Store');

class Search extends Component {

    constructor() {
      super();
      
      this.state = {
        searchTerm: '',
      }
    }

    render() {
      const data = this.props.shows

      const filteredTitles = data.filter((show) => `${show.title} ${show.description}`
                             .toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0);
        return (
          <div className="container">
            <Header showSearch />
            <div className="shows">
               { filteredTitles <= 0 ? 'No results' : filteredTitles.map((show) => (<ShowCard {...show} key={ show.imdbID } />)) }
           </div>
          </div>    
        );
    }
}

Search.propTypes = {
  route: object
}

export default connector(Search);
