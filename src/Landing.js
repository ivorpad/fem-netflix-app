import React from 'react';
import { Link, browserHistory } from 'react-router';

const { connector } = require('./Store');

class Landing extends React.Component {

  constructor() {
    super();

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

    handleSearchTermEvent(e) {
      this.props.setSearchTerm(e.target.value)
    }

    goToSearch(e) {
      browserHistory.push('search');
      e.preventDefault();
    }

    render() {
        return (
           <div className="home-info">
             <h1 className="title">svideo</h1>
             <form onSubmit={(e) => this.goToSearch(e)}>
              <input type="text" className="search" placeholder="Search" value={this.props.searchTerm} onChange={this.handleSearchTermEvent}/>
             </form>
             <Link to="/search" className="browse-all">or Browse All</Link>
           </div>  
        );
    }
}


export default connector(Landing);
