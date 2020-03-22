import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, NavLink, useParams} from 'react-router-dom' // wrapper component
//import {HashRouter, Route, Switch, Link} from 'react-router-dom' // wrapper component

function Home() {
    return(
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}
var contents = [
    {id:1, title:'HTML', description:'HTML is ...'},
    {id:2, title:'Js', description:'Js is ...'},
    {id:3, title:'React', description:'React is ...'},
]
function Topic() {
    var params = useParams();
    var topic_id = params.topic_id;
    var selected_topic = {
        title:'Sorry',
        description:'Not Found'
    }
    for(var i=0; i<contents.length; i++) {
        if(contents[i].id === Number(topic_id)) {
            selected_topic = contents[i];
            break
        }
    }
   // console.log(params, params.topic_id);
    return(
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    )
}
function Topics() {
    var list = [];
    for(var i=0; i<contents.length; i++) {
        list.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>);
    }
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                {list}
            </ul>
            <Route path="/topics/:topic_id">
                <Topic></Topic>
            </Route>
            {/* <Switch>
                <Route path="/topics/1">
                    HTML is...
                </Route>
                <Route path="/topics/2">
                    Js is...
                </Route>
                <Route path="/topics/3">
                    React is...
                </Route>
            </Switch> */}
        </div>
    )
}

function Contact() {
    return(
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>React Router DOM Example</h1>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route path="/topics"><Topics></Topics></Route>
                <Route path="/contact"><Contact></Contact></Route>
                <Route path="/">Not found</Route>
            </Switch>
        </div>
    )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
