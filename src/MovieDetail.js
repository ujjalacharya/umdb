import React, { Component } from 'react';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';


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
        const {movie} = this.state; 
        
        return (
            <div>
                <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
                <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                
               <h2>{movie.title}</h2> 
               <h4>{movie.release_date}</h4>
               <p>{movie.overview}</p>
            </div>

        );
    }
}

export default MoviesList;