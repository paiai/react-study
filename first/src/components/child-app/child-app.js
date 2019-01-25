import React, {Component} from 'react';

class ChildApp extends Component {
    static defaultProps = {
        Up: () => {
          console.log("Up이 제대로 전달되지 않았습니다.");
        },
        Down: () => {
          console.log("Down이 제대로 전달되지 않았습니다.");
        }
      };
      
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <div>Child component</div>
                <div>{this.props.hello}</div>
                <div>{this.props.count}</div>

                <button onClick={this.props.Up}> Click Up</button>
                <button onClick={this.props.Down}> Click Down</button>
            </div>
        );
    }
}

class Button extends Component {
    render() {
        return <button>Click me</button>
    }
}

export { Button };
export default ChildApp;
