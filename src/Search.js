import React, { Component } from 'react';
import ShowCard from './ShowCard';
const { object } = React.PropTypes;
import { Link } from 'react-router';

class Search extends Component {

    constructor() {
      super();
      
      this.state = {
        searchTerm: '',
      }
    }

    handleSearchTerm = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
    }

    render() {
      const data = this.props.route.data.shows

      const filteredTitles = data.filter((show) => `${show.title} ${show.description}`
                             .toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0);
        return (
          <div className="container">
            <header className="header">
              <h1 className="brand"><Link to="/"></Link></h1>
              <input type="text" onChange={this.handleSearchTerm} className="search-input" placeholder="Search"/>
            </header>
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

export default Search;
