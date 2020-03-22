import React , {useState, useEffect} from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello, World</h1>
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove class" onClick={function(){
        setClassShow(false);
      }}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

// console.log 사용시 구분하기 위해
var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props) {
  // React.useState -> import useState
  var numberState = useState(props.initNumber); // 배열이 리턴됨, 인자는 초기값 넘기고 싶을 때, 리턴값은 2개
  var number = numberState[0]; // state
  var setNumber = numberState[1]; // state를 변경할 수 있는 함수
  //console.log('numberState', numberState);

  // var dateState = useState((new Date()).toString());
  // var date = dateState[0];
  // var setDate = dateState[1];
  var [date, setDate] = useState((new Date()).toString()); // 위에 코드 축약형

  useEffect(function(){ // 여러 개 사용 가능
    console.log('%cfunc => effect (componentDidMount()) ' + (++funcId), funcStyle);
    document.title = number + ' : ' + date;
    return function() {
      console.log('%cfunc => use effect return (componentWillUnMount)' + (++funcId), funcStyle);
    }
  }, []); // 1회만 실행 - componentDidMount

  // side effect
  useEffect(function(){
    console.log('%cfunc => effect number (componentDidMount() & componentDidUpdate) A' + (++funcId), funcStyle);
    document.title = number + ' : ' + date;
    return function() {
      console.log('%cfunc => use effect number return' + (++funcId), funcStyle);
    }
  }, [number]); // number가 변경되었을 경우에만 useEffect() 호출 - date button 클릭하면 호출되지 않는다.

  useEffect(function(){ // 여러 개 사용 가능
    console.log('%cfunc => effect date (componentDidMount() & componentDidUpdate) B' + (++funcId), funcStyle);
    document.title = number + ' : ' + date;
    return function() {
      console.log('%cfunc => use effect date return' + (++funcId), funcStyle);
    }
  }, [date]);

  console.log('%cfunc => render ' + (++funcId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      {/* <p>Number : {props.initNumber}</p> */}
      <p>Number : {number} </p>
      <p>Date : {date} </p>
      <input type="button" value="random" onClick={function() { // bind는 클래스에서만 사용
        setNumber(Math.random());
      }}></input>
      <input type="button" value="date" onClick={function() { // bind는 클래스에서만 사용
        setDate((new Date()).toString());
      }}></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number:this.props.initNumber,
    date:(new Date()).toString()
  }
  componentWillMount() {
    console.log('%cclass => componentWillMount', 'color:red')
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', 'color:red')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', 'color:red')
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', 'color:red')
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', 'color:red')
  }
  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount', 'color:red')
  }
  render() {
    console.log('%cclass => render', 'color:red')
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={function() {
          this.setState({number:Math.random()})
        }.bind(this)}></input>
        <input type="button" value="date" onClick={function() {
          this.setState({date:(new Date()).toString()})
        }.bind(this)}></input>
    </div>
    );
  }
}

export default App;
