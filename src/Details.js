import React, { Component} from 'react';
const {object} = React.PropTypes;

class Details extends Component {

  static propTypes = {
    param: object
  };

  render() {

    const params = this.props.params || {};

    console.log(params);

    const {
      title,
      description,
      year,
      poster,
      trailer,
    } = params;

    return (
      <div className="container">
      <header className="header">
        <h1 className="brand">svideo</h1>
      </header>
        
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


export default Details;
