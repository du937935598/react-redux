import React, { Component } from 'react';
import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';

class App extends Component {
  constructor(){
    super(); 
    this.state={
      num: '',
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="left">
          {this.props.store.todos}
          <Demo1></Demo1>
        </div>
        <div className="right">
          {this.props.value}
          <Demo2></Demo2>
        </div>
      </div>
    );
  }
}

export default App;
