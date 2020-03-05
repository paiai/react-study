import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
// import PictureList from './components/picture-list';
// import LoadMore from './components/load-more';
// import Loader from './components/loader';

import PictureList from './containers/picture-list.container';
import LoadMore from './containers/load-more.container';

class App extends Component {
  // state = {
  //   images: [],
  //   isPending: false
  // }
  
  // getImages = () => {
  //   this.setState({
  //     isPending: true
  //   }, () => {
  //     console.log(this.state.isPending);

  //     // callback 으로 실행하도록 - 이렇게 하지 않으려면 LifeCycle componentDidUpdate 사용해야 하는데...??
  //     axios.get('https://api.unsplash.com/photos/random', {
  //       params: {
  //         client_id : '2c07f9b2f856038df33ab9c5922994d579904e8fe3243481d77cc27463b0581b', // access key
  //         count: 10
  //       }
  //     }).then(res => {
  //       this.setState({
  //         images: [...this.state.images, ...res.data.map(image => image.urls.small)],
  //         isPending: false
  //       });
  //     }).catch(err => { // 에러 방지 코드
  //       console.log(err);
  //       this.setState({
  //         isPending: false
  //       });
  //     })
  //   });
  // }
  
  // componentDidMount() {
  //   this.getImages();
  // }

  render() {
    return (
      <div className="App">
        {/* <PictureList images={this.state.images} />
        <LoadMore loadMore={this.getImages} />
        {this.state.isPending && <Loader />} */}

        <PictureList />
        <LoadMore />
      </div>
    );
  }
}

export default App;
