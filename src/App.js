import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleSubmit = ()=>{
    console.log(this.text.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Submit the form</p>
        <input type="text" ref={(input)=>this.text = input}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;