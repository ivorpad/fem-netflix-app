import React, { Component } from 'react';
import data from '../public/data.json';

const Search = () => (
  <div className="container">
   {data.shows.map( (show) => {
      return (
        <div>
          <h2>{ show.title }</h2>
          <p>{ show.description }</p>
        </div>
      )
   })}
  </div>
)

export default Search;
