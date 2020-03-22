import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined) {
        return {number:0} // 초기값
    }
    if(action.type === 'INCREMENT') {
        //return {number:state.number + action.size}
        return {...state, number:state.number + action.size} // state 를 복제 데이터가 많은 경우
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux devtools 사용시 넣음
)