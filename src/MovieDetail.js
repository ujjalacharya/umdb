import React, { Component } from 'react';
import { Poster } from './Movie'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';


class MoviesList extends Component {


    state = {
        movie: []
    }

    async componentDidMount() {

        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=d4f67f412d4bb016866b72002ccb2158');

            const movie = await res.json();
            this.setState({
                movie: movie
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { movie } = this.state;

        return (
            <div>
                <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                    <MovieInfo>
                        <Overdrive id={movie.id}>
                            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                        </Overdrive>
                        <div>
                            <h2>{movie.title}</h2>
                            <h4>{movie.release_date}</h4>
                            <p>{movie.overview}</p>
                        </div>
                    </MovieInfo>
                </MovieWrapper>
            </div>

        );
    }
}

export default MoviesList;

const MovieWrapper = styled.div`
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: cover
`
const MovieInfo = styled.div`
background: white;
text-align: left;
padding: 2rem 10%;
display: flex
>div{
    margin-left: 20px
}
img{
    position: relative;
    top: -5rem
}
`