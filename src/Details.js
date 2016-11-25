import React, { Component} from 'react';
import Header from './Header';
const {object} = React.PropTypes;
const { connector } = require('./Store');

class Details extends Component {

  static propTypes = {
    param: object
  };

  assignShow(id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id);
    return showArray[0];
  }


  render() {

    const {
      title,
      description,
      year,
      poster,
      trailer,
    } = this.assignShow(this.props.params.id);

    return (
      <div className="container">
        <Header />          
        <div className="video-info">
        <h1></h1>
        <h1 className="video-title">{title}</h1>
        <h2 className="video-year">{year}</h2>

        <img src={`/img/posters/${poster}`} className="video-poster" alt=""/>
          <p className="video-description">{description}</p>
        </div>

        <video>{trailer}</video>



      </div>  
    );
  }
}


export default connector(Details);
