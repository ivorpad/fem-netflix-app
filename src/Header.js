import React, { Component } from 'react';
import { Link } from 'react-router';
const { connector } = require('./Store');


class Header extends Component {

    handleSearchTermEvent(e) {
      this.props.setSearchTerm(e.target.value)
    }

    render() {

      let utilSpace;

      if(this.props.showSearch) {
        utilSpace = <input type="text" onChange={(e) => this.handleSearchTermEvent(e)} value={this.props.searchTerm} className="search-input" placeholder="Search"/>
      } else {
        utilSpace = (
          <h2 className="header-back">
              <Link to="/search">
                Back
              </Link>
            </h2>
        )
      }

        return (
          <header className="header">
            <h1 className="brand">
              <Link to="/" className="brand-link">
                svideo
              </Link>
            </h1>
            {utilSpace}
          </header> 
        );
    }
}

export default connector(Header);
