import React, { Component } from 'react';
import './App.css';

import { Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import Home from './components/home';
import First from './components/first';
import Second from './components/second';

class App extends Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }

  go = () => {
    this.props.history.go(1); // 인자를 담아주기 않으면 항상 첫번째 페이지로 가게 됨.
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const style = {
      color: "red"
    }

    return (
      <div className="App">
        <div>Hello react</div>
        <div>
          <button onClick={this.goBack}>뒤로 가기</button>
          <button onClick={this.go}>앞으로 가기</button>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/" activeClassName="activated" exact activeStyle={style}>
                메인 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink to="/first" activeStyle={style}>
                first 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink to="/second" activeStyle={style}> 
              second 페이지로 이동
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          {/* <Route path="/" exact={true} component={Home}></Route> */}
          <Route path="/home" component={Home}></Route>
          <Route path="/first" component={First}></Route>
          <Route path="/second" component={Second}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
