import React, { Component } from 'react';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Subject from './components/Subject'
import Control from './components/Control'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'read',
      selected_content_id:2,
      subject: { title: 'WEB', sub: 'world wide web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText...' },
        { id: 2, title: 'CSS', desc: 'CSS is ...' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is ...' }
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title; 
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;

    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        console.log(_title, _desc)
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push( // push는 원본 데이터를 바꾸기 때문에 좋지 않은 방법
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        // var newContens = Array.from(this.state.contents); // Array를 복사해서 push 해주어도 됨
        // newContens.push()
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({ // contents 변경한것을 알려주어야 함.
         // contens:this.state.contens 
          contents: _contents
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      _article = <UpdateContent onSubmit={function(_title, _desc){
        console.log(_title, _desc)
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push( // push는 원본 데이터를 바꾸기 때문에 좋지 않은 방법
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        // var newContens = Array.from(this.state.contents); // Array를 복사해서 push 해주어도 됨
        // newContens.push()
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({ // contents 변경한것을 알려주어야 함.
         // contens:this.state.contens 
          contents: _contents
        })
      }.bind(this)}></UpdateContent>
    } 
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        ></Subject>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        {/* <header>
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
        </header> */}

        <TOC 
          onChangePage={function(id){ // TOC onChangePage 호출시 타겟값 전달받음
            //debugger;
            //console.log('id', id);
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}></TOC>

        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control> 

        {_article}
        
      </div>
    );
  }
}
export default App;
