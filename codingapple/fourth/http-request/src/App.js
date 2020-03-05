import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  // state = {
  //   apiResponse: []
  // }

  state = {

  }
  testPostRequest = (e) => {
    e.preventDefault();

    console.log("preventDefault");
  }

  // requestApi = () => {
  //   axios.get('https://baconipsum.com/api/?type=meat-and-filler').then(res => {
  //     console.log(res);
  //     this.setState({
  //       apiResponse: [...this.state.apiResponse, ...res.data]
  //     })
  //   }).catch((err) => {

  //   })
  // }

  render() {
    // const renderApiResponse = () => {
    //   return this.state.apiResponse.map((text, idx) => {
    //     return <p key={idx}>{text}</p>
    //   })
    // }
    return (
      // <div className="App">
      //   {renderApiResponse()}
      //   <button onClick={this.requestApi}>Click Me</button>
      // </div>

      <div className="App">
        <form action='/' method="post" name="text-form" onSubmit={this.testPostRequest}>
          <input type="text" placeholder="sample" />
          <input type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  // componentDidMount() {
  //   this.requestApi();
  // }
}

export default App;
