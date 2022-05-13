import React from 'react';
import { Carousel } from 'reactstrap';
import Movie from "./movie.js";

const CarouselItem = props => {
    const {
        key,
        altText,
        caption,
        src

    } = props.movies
} 

class Carousel extends Component {
  constructor(props) {
      super(props);
  }
    render() {
    return (
      <div>Carousel</div>
    )
  }
}

export default Carousel;
