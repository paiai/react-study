import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ChildApp, { Button } from "./components/child-app/child-app";

class App extends Component {
  
  state = {
    message : "안녕하세요!",
    myAge : 30,
    myName : "Lee",
    count: 1,
    deepObject: {
      a: "1",
      b: "2"
    },
    testArray: [],
    input: ""
  };

  addArray = () => {
    this.setState({
      testArray: [...this.state.testArray, this.state.input],
      input: ""
    });
    console.log(this.state.testArray); // setState 가 업데이트 되는 시점이 느려서.. console 이 먼저 찍힘
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  countUp = () => {
    this.setState({
      count : this.state.count + 1
    });
  };

  countDown = () => {
    this.setState({
      count : this.state.count - 1
    });
  };

  changeDeepObjcet = () => {
    this.setState({
      deepObject: {
        ...this.state.deepObject, // 이거 안하면 b는 초기화된다. b 그대로 유지시키려면 이렇게 해야함.
        a: "123"
      }
    });
  };

  testMethod() {
    return "test method string"
  }

  handleClick = () => {
    console.log("Hello");
  }
  render() {

    const returnTestArrayValue = () => {
      console.log(
        this.state.testArray.map((testString, idx) => {
          return <div key={idx}>{testString}</div>;
        })
      );
    

      return this.state.testArray.map((testString, idx) => {
        return <div key={idx}>{testString}</div>;
      });
    }
    
    const hello = "hello";
    const arrow = () => "HI!";
    const style = { color: "red" };
    const flag = true;

    const renderFlag = () => {
      if ( flag === true ) {
        return <div>True flag</div>;
      }
      return <div>False flag</div>;
    }

    return (
      // <div className="App">
      //   hello create react app {hello} {arrow()}
      //   <div style={style}>style</div>
      //   { renderFlag() }
      //   {/* <button onKy={this.handleClick}>Click Me!</button> */}
      //   <ChildApp />
      // </div>

      // <div>
      //   <div>parent component</div>
      //   {this.state.message}
      //   <div>
      //     <ChildApp hello={this.state.message} />
      //     {this.state.myName}
      //     {this.testMethod()}
      //   </div>
      //   <div>
      //     <div>{this.state.count}</div>
      //     <button onClick={this.countUp}>count up</button>
      //     <button onClick={this.countDown}>count down</button>

      //     <div>{this.state.deepObject.a}</div>
      //     <div>{this.state.deepObject.b}</div>
      //     <button onClick={this.changeDeepObjcet}>update deepObject</button>

      //     <ChildApp count={this.state.count}>I am children</ChildApp>
          
      //   </div>
      // </div>

      <div className="App">
        <div>
          {/* <ChildApp
            count={this.state.count}
            // Up={this.countUp}
            Down={this.countDown}
          /> */}
        </div>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.addArray}>Add</button>
        <div>{returnTestArrayValue()}</div>
      </div>
    );
  }
}

export default App;
