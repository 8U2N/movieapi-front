import React, { Component } from 'react';
import Navigation from "./nav";
import Carousel from "./carousel";
import Movie from "./movie";
import Body from "./body";

const MovieData = [];

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>MovieBase: The Movie Place</h1>
        <Navigation />
        <Carousel />
        <Movie />
        <Body />

      </div>
    );
  }
}
