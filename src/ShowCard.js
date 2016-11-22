import React from 'react';
import { Link } from 'react-router';

const ShowCard = (props) => (
  <Link to={`/details/${props.imdbID}`}>
    <div className="show-card">
          <img src={`img/posters/${ props.poster }`} className="show-card-img" alt=""/>

          <div className="show-card-text">
            <h3 className="show-card-title">{ props.title }</h3>
            <h4 className="show-card-year">{ props.year }</h4>
            <p className="show-card-description">{ props.description }</p>
           
          </div>
    </div>
  </Link>
)

const { string } = React.PropTypes;

ShowCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired,
  imdbID: string.isRequired
}

export default ShowCard;
