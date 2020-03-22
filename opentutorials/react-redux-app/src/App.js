import React, { Component }  from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot"
import DisplayNumberRoot from "./components/DisplayNumberRoot"
import DisplayNumber from './components/DisplayNumber';

class App extends Component {
  state = {number:0}
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        {/* <AddNumberRoot onClick={function(size){
          this.setState({number:this.state.number + size})
        }.bind(this)}></AddNumberRoot> */}
        {/* <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot> */}
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}
export default App;
