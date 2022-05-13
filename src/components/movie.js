import React, { Component } from 'react'
import axios from 'axios';

export default class Movie extends Component {
    constructor() {
        super()

        this.state = {
            movies: {}
        }

        this.getMovies = this.getMovies.bind(this);
    }

    getMovies() {
        axios.get('http://127.0.0.1:5000/movie/get')
        .then(response => {
            response.data.map(movie => {
                this.setState({
                    movies: movie
                })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        })
    }
  
    componentDidMount() {
        this.getMovies()
    }

    render() {
        const {
            genre,
            mpaa_rating,
            poster_image,
            release_year,
            title,
        } = this.state.movies

        return (
          <div>
            <h1>{title}</h1>
            {genre}
            {mpaa_rating}
            <img src={poster_image} />
          </div>
        )
      }
}
