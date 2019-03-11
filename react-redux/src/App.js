import React, { Component } from 'react';
import './App.css';
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

class App extends Component {
  constructor(){
    super();
    extendObservable(this,{
      counter: 0
    })
  }
  componentWillMount(){
    
  }

  onIncrement = () => {
    this.counter++;
  }

  onDecrement = () => {
    this.counter--;
  }

  render() {
    console.log(this.counter);
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.counter}</h1>
        <p className="text-center">
          <button onClick={this.onIncrement} className="btn btn-primary mr-2">加1</button>
          <button onClick={this.onDecrement} className="btn btn-danger my-2">减1</button>
        </p>
      </div>
    );
  }
}

export default observer(App);
