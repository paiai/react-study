import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
        //this.setState({title:e.target.value});
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        console.log(this.props.data)
        console.log('UpdateContent render');
        return(
        <article>
            <h2>Update Content</h2>
            <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault(); // ㅍㅔ이지 바뀌지 않도록
                    //debugger;
                    this.props.onSubmit(
                        //e.target.title.value, 
                        //e.target.desc.value
                        this.state.id,
                        this.state.title,
                        this.state.desc
                    );
                }.bind(this)}
            >
                <input type="hidden" name="id" value={this.state.id}></input>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.inputFormHandler}
                        // onChange={function(e){
                        //     //console.log(e.target.value);
                        //     this.setState({title:e.target.value});
                        // }.bind(this)}
                    >
                    </input>
                </p>
                <p>
                    <textarea 
                        name="desc" 
                        placeholder="description" 
                        value={this.state.desc} 
                        onChange={this.inputFormHandler}
                        // onChange={function(e){
                        //     //console.log(e.target.value);
                        //     this.setState({desc:e.target.value});
                        // }.bind(this)}

                    ></textarea>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
        );
    }
}

export default UpdateContent;