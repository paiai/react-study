import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';
import store from "../store";
function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber); // connect() 함수를 실행시켜서 나온 결과를 export

/*
import React, { Component } from "react";
import store from '../store';

export default class extends Component {
    render() {
        return <AddNumber onClick={function(size){
          store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber> // 프레젠테이션 하는 역할만
    }
}
*/