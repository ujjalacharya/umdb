import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state={
    input: ''
  }

  handleChange = (event)=>{
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Submit the form</p>
        <input onChange={this.handleChange} type="text" value={this.state.input}/>
        <h3>Hello Mr.{this.state.input} </h3>
      </div>
    );
  }
}

export default App;