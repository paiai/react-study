import React, { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: {title:'WEB', sub:'world wide web!'},
      welcome: {title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <header>
            <h1><a href="/" onClick={function(e) {
              console.log('event in', this);
              //console.log(e);
              //debugger;
              e.preventDefault();
              //this.state.mode = 'welcome'; // 동작하지 않음. onClick 안에서 this가 아무 값도 가리키지 않음. -> bind(this) 해주어야 함 , setState() 사용해서 state 변경
              this.setState({
                mode: 'welcome'
              })
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;
