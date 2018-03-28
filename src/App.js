import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './Movie';
import './App.css';


class App extends Component {

  state={
    movies: []
  }

  async componentDidMount(){

    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d4f67f412d4bb016866b72002ccb2158&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
        } catch(e){
          console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>
        )}
      </div>
    );
  }
}

export default App;