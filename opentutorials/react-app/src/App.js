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
      mode: 'welcome',
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
  getReadContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title, _desc, _article, _content = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;

    } else if (this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;

    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        console.log(_title, _desc)
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push( // push는 원본 데이터를 바꾸기 때문에 좋지 않은 방법
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        // var newContens = Array.from(this.state.contents); // Array를 복사해서 push 해주어도 됨
        // newContens.push()
        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({ // contents 변경한것을 알려주어야 함.
         // contens:this.state.contens 
          contents: _contents,
          mode:'read', // update 후에 본문 내용 보이도록 read 로 변경
          selected_content_id:this.max_content_id
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {

      _content = this.getReadContent();
      _article = <UpdateContent data={_content} 
        onSubmit={
          function(_id, _title, _desc){
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while(i < _contents.length) {
              if(_contents[i].id === _id) {
                _contents[i] = {id:_id, title:_title, desc:_desc};
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode:'read' // update 후에 본문 내용 보이도록 read 로 변경
            })
         }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    console.log('App render');
    
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
          if(_mode === 'delete') {
            if(window.confirm('really?')) {
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < this.state.contents.length) {
                if(_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}></Control> 

        {this.getContent()}
        
      </div>
    );
  }
}
export default App;
