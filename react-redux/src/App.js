import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input1: ['button10'],
      input2: [
        {
          name: "button20",
          value: "",
          list: []
        }
      ]
    }
  }

  // 主按钮添加事件
  add = () => {
    let index = this.state.input1.length;
    this.state.input1.push('button1'+index);
    this.state.input2.push({name: "button2"+index,value: "",list:[]});
    console.log(this.state.input1);
    this.setState({
      input1: this.state.input1,
      input2: this.state.input2
    })
  }

  // 主list
  list1=(item)=>{
    let dom = [];
    item.forEach((val,index) => {
      dom.push(
        <button key={index}>{val}</button>
      )
    })
    return dom;
  }

  // 副list
  list2=(item)=>{
    let dom = [];
    item.forEach((val,key) => {
      dom.push(
        <div>
          <button key={key} onClick={this.child.bind(this,key,val)}>{val.name}</button>
          {val.list.map(( item ) => {
            return <button>{item.name}</button>
          })}
        </div>
      )
    })
    return dom;
  }

  // 副list添加子组件
  child = (e,index,val) => {
    var num = this.state.input2[e].list.length + 1;
    this.state.input2[e].list.push({name: "button2"+e+'-'+num,value: ""});
    console.log(this.state.input2)
    this.setState({
      input2: this.state.input2
    })
  }
  
  render() {
    return (
      <div className="container">
<<<<<<< HEAD
        <button onClick={this.add}>添加</button>
        <p>这是横</p>
        {this.list1(this.state.input1)}
        <p>这是竖</p>
        {this.list2(this.state.input2)}
=======
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button onClick = {this.props.Increment} className="btn btn-primary mr-2">Increase</button>
          <button onClick = {this.props.decrease} className="btn btn-danger my-2">Decrease</button>
        </p>
>>>>>>> 0d2346877decb8cfc3264ddaabd43be0bef97bf2
      </div>
    );
  }
}

export default App;
