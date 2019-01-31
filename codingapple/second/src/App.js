import React, { Component } from 'react';
import './App.css';
import ChildA from './childA';
import ChildB from './childB';

class App extends Component {
  state = {
    count: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <ChildA count={this.state.count}></ChildA>
        <ChildB></ChildB>
      </div>
    );
  }
}

export default App;
