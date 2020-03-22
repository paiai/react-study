import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return(
            <div>
                <input type="button" value="get data" onClick={
                    function(){ 
                        fetch('http://localhost:8000/data.json') // react 서버는 3000번 포트에 있고, data는 8000번 포트에 있어서 생기는 문제(보통 설정이 되어 있지 않으면 실패함)
                        .then(function(result) {return result.json();})
                        .then(function(json){console.log(json);})
                    }.bind(this)
                }></input>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

