import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button onClick = {this.props.Increment} className="btn btn-primary mr-2">Increase</button>
          <button onClick = {this.props.decrease} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

export default App;
