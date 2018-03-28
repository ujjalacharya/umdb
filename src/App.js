import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './Movie';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import './App.css';
import MoviesList from './MoviesList';



const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>

        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={Test} />

          )}
          </Switch>
      </div>
    </Router>
  );
}

const Test = ({match}) => {
  return (
    <h3>{match.params.id}</h3>
  )
}

export default App;