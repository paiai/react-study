import React, { Component } from 'react';
import FoodCard from './food-card';

class FoodCardList extends Component {
  static defaultProps = {
    foodData: []
  }

  render() {
    const renderFoodCard = foods => {
      return foods.map((food, idx) => {
      //return this.props.foodData.map((food, idx) => { // 함수형 프로그래밍에서 안쓰는??
        return <FoodCard key={idx} photo={food.photo} name={food.name} subIntro={food.subIntro}></FoodCard>
      });
    }

    return <div id="app-food-card-container">{renderFoodCard(this.props.foodData)}</div>
  }

}

export default FoodCardList