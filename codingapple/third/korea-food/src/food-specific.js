import React, { Component } from 'react';
import styled from 'styled-components';
import './food-specific.scss';

const ImageCard = styled.div`
  height: 200px;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
  background-color: #f5f5f5;
  background-image: ${p => p.photo ? `url('${p.photo}')` : ''};
  background-position: 50% 50%;
  background-size: cover;
`
class FoodSpecific extends Component {
  static defaultProps = {
    foodSpecific: {
      name: '',
      photo: '',
      subIntro: '',
      mainIntro: '',
      cookingMethod: '',
      spec: '',
    }
  }
  render() {
    const renderText = (text) => {
      return text.split('\n').map((sentence, idx) => {
        return <p key={idx}>{sentence}</p>;
      })
    };

    return <div className="food-specific-container">
      <ImageCard photo={this.props.foodSpecific.photo} />
      <div className="food-specific-header"> 
        <div>
          <span>{this.props.foodSpecific.name}</span>
        </div>
        <div>
          <span>재료</span>
          <span>{this.props.foodSpecific.spec}</span>
        </div>
      </div>

      <div className="food-specific-content">
        <div>
          <span>정보</span>
          <span>{renderText(this.props.foodSpecific.mainIntro)}</span>
        </div>
      </div>

      <div className="food-specific-content">
        <div>
          <span>조리 방법</span>
          <span>{renderText(this.props.foodSpecific.cookingMethod)}</span>
        </div>
      </div>

    </div>
  }
}

export default FoodSpecific