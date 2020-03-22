/*
import React from 'react';
import './App.css';

function Subject() {
  return(
    <header>
      <h1>WEB</h1>
      world wide web!
    </header>
  );
}
function TOC() {
  return(
    <nav>
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ul>
  </nav>
  );
}
function Content() {
  return (
    <article>
      <h2>HTML</h2>
      HTML is HyperText Markup Language.
    </article>
  );
}
function App() {
  return (
    <div className="App">
      Hello, React!!
      <Subject></Subject>   
      <TOC></TOC>
      <Content></Content>   
    </div>
  );
}
export default App;
*/


import React, { Component } from 'react';
import './App.css'

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, React!!
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}
export default App;
