import React, { Component } from 'react';

class MoviesList extends Component {

    state = {
        movie: []
    }

    async componentDidMount() {

        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'?api_key=d4f67f412d4bb016866b72002ccb2158');

            const movie = await res.json();
            this.setState({
                movie: movie
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
               <h2>{this.state.movie.title}</h2> 
               <h4>{this.state.movie.release_date}</h4>
               <p>{this.state.movie.overview}</p>
            </div>

        );
    }
}

export default MoviesList;