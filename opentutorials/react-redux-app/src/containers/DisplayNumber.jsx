import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state) {
    return {
        number:state.number
    }
}
// function mapReduxDispatchToReactProps() {
//     return {}
// }
export default connect(mapReduxStateToReactProps, null)(DisplayNumber); // connect() 함수를 실행시켜서 나온 결과를 export


/*
import React, { Component } from "react";
import store from '../store';
export default class extends Component {
    state = {number:store.getState().number} // store 값 가져옴
    constructor(props) { // state 값 바뀌어서 렌더링 하라고 알려주어야 함
      super(props);
      store.subscribe(function(){
        this.setState({number:store.getState().number});
      }.bind(this));
    }

    render() {
        return(
            <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
        )
    }
}
*/