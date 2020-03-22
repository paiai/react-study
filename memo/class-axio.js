import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  //   // getStories() {
  //  // componentDidMount() {
  //     this.setState({ isLoading: true });
  //     axios.get(API + DEFAULT_QUERY)
  //       .then(result => this.setState({
  //         hits: result.data.hits,
  //         isLoading: false
  //       }))
  //       .catch(error => this.setState({
  //         error,
  //         isLoading: false
  //       }));
  //   }
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(API + DEFAULT_QUERY);
      this.setState({
        hits: result.data.hits,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
}
export default App;