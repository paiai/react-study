import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log('TOC render should Component Update');
        if(this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    render() {
        console.log('TOC render');
        var lists = [];
        var data = this.props.data; // App.js 에서 state를 props로 넘겨서 받음
        var i = 0;
        while (i < data.length) {
            lists.push(<li key={data[i].id}>
                {/* // data-id 속성을 사용하는 방법
                <a 
                    href={"content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                        //debugger;
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>
                    {data[i].title}</a> */}

                <a 
                    href={"content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(id, e){ // bind 두번째 매개변수를 함수의 첫번째 매개변수로 넣음
                        //debugger;
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this, data[i].id)}>
                    {data[i].title}</a>

            </li>)
            i = i + 1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}
export default TOC;

/*
import React from 'react';

function TOC(props) {
    console.log('TOC render');
    var lists = [];
    var data = props.data; // App.js 에서 state를 props로 넘겨서 받음
    var i = 0;
    while (i < data.length) {
        lists.push(<li key={data[i].id}><a href={"content/"+data[i].id}>{data[i].title}</a></li>)
        i = i + 1;
    }
    return(
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    );
}
export default TOC;
*/