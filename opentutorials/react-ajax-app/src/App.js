import React, { Component } from 'react';

class Nav extends Component {
  render() {
    var listTag = [];
    for(var i=0; i<this.props.list.length; i++) {
      var li = this.props.list[i];
      listTag.push(<li key={li.id}>
                      <a href={li.id} data-id={li.id} onClick={function(e){ // data-id, e.target.dataset.id
                        e.preventDefault();
                        console.log('trigger');
                        this.props.onClick(e.target.dataset.id)
                      }.bind(this)}>{li.title}</a>
                    </li>) // 각각의 리스트는 퍼포먼스를 위해서 key 필요 (li는 key 값이 필요)
    }
    return(
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class NowLoading extends Component {
  render() {
    return <div>Now Loading...</div>
  }
}

class App extends Component {
  state = {
    article: {
      item: {title:'Welcome', desc:'Hello, React & Ajax'},
      isLoading:false
    },
    list: {
      items:[],
      isLoading:false
    }
  }
  componentDidMount() { // 컴포넌트 호출되기 전에 네트워크 통신해야 하는 경우 적합
    var newList = Object.assign({}, this.state.list, {isLoading:true}); // isLoading 이 true 인 객체 복사본
    this.setState({list:newList});

    fetch('data/list.json')
      .then(function(result) { // 가져온 데이터를 어떤 데이터 타입으로 제어할 것인가?
        return result.json(); // 결과를 json 데이터 타입으로 넘겨줌
      }) 
      .then(function(json) {  // json 결과를 파라미터 인자로 전달
         console.log(json);
         this.setState({list:{
           items:json,
           isLoading:false
         }}); // 결과를 state 에 넣음
      }.bind(this)) // 함수 호출될 때 결과를 내부 this로 변경
  }

  render() {
    var NavTag = null;
    if(this.state.list.isLoading) {
      NavTag = <NowLoading></NowLoading>
    } else {
      NavTag = <Nav list={this.state.list.items} onClick={function(id){
        var newArticle = Object.assign({}, this.state.article, {isLoading:true});
        this.setState({article:newArticle});

        fetch('data/'+id+'.json')
          .then(function(result){
            console.log(result)
            return result.json();
          })
          .then(function(data){
            this.setState({
              article:{
                item: {title:data.title, desc:data.desc},
                isLoading: false
              }
            })
          }.bind(this)) // bind 를 여기에도 해주어야 함.
      }.bind(this)}></Nav>
    }
    
    var ArticleTag = null;
    if(this.state.article.isLoading) {
      ArticleTag = <NowLoading></NowLoading>
    } else {
      ArticleTag = <Article title={this.state.article.item.title} desc={this.state.article.item.desc}></Article>
    }
     return (
      <div className="App">
        <h1>WEB</h1>
        {NavTag}
        {ArticleTag}
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <Article title={"Welcome"} desc={"Hello, React & Ajax"}></Article>
    </div>
  );
}
*/

export default App;
