import React, { Component } from 'react';
import './App.scss';
import KoreaFoodData from './food-data';
import { Route, withRouter, Switch, Redirect, NavLink } from 'react-router-dom';
import FoodCardList from './food-card-list';
import FoodSpecific from './food-specific';

class App extends Component {

  state = { // 데이터 보여주거나 내보내줄 때 state 로 넣어서 데이터 재할당. state가 업데이트 되면 재렌더링 되기 떄문에 변경 여부를 체크할 필요가 없다.
    foodData: KoreaFoodData
  }

  componentDidMount() {
    console.log(this.props);
  }

  pickData = foodData => {
    return foodData.filter(food => {
      if(food.name === this.props.location.pathname.split('/')[2]) {
        return true;
      }
      return false;
    })[0]

  }

  go = () => {
    this.props.history.go(1);
  }

  toHome = () => {
    this.props.history.push('/foods');
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="app-container">
        <div id="app">
          <div id="app-header">
            <span>한국의 전통 음식</span>
          </div>

          <Switch>
            <Route path="/foods/:foodName" render={() => <FoodSpecific foodSpecific={this.pickData(this.state.foodData)}/>} />
            <Route path="/foods" render={() => <FoodCardList foodData={this.state.foodData} />} />
            <Redirect to="/foods" />
          </Switch>

          <div id="app-history-button">
            <button onClick={this.goBack}>뒤로 가기</button>
            {/* <button onClick={this.toHome}>홈으로 가기</button> */}
            <NavLink to="/foods">홈으로 가기</NavLink>
            <button onClick={this.go}>앞으로 가기</button>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(App);
