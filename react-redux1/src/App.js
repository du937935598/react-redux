import React, { Component } from 'react';
import './App.css';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';

class App extends Component {
  constructor(){
    super(); 
    this.state={
      val: 0
    }
  }

  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="left">
          <Demo1></Demo1>
        </div>
        <div className="right">
          <Demo2></Demo2>
        </div>
      </div>
    );
  }
}

export default App;
