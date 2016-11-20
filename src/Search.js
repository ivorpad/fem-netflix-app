import React, { Component } from 'react';
import data from '../public/data.json';
import ShowCard from './ShowCard';

class Search extends Component {

    constructor() {
      super();
      //this.handleSearchTerm = this.handleSearchTerm.bind(this)

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

      const filteredTitles = data.shows.filter((show) => `${show.title} ${show.description}`
                             .toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0);
        return (
          <div className="container">
            <header className="header">
              <h1 className="brand">svideo</h1>
              <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTerm} type="text" className="search-input" placeholder="Search"/>
            </header>
            <div className="shows">
               { filteredTitles <= 0 ? 'No results' : filteredTitles.map((show) => (<ShowCard {...show} key={ show.imdbID } />)) }
           </div>
          </div>    
        );
    }
}


export default Search;
