import React, { Component } from 'react';

class ChildB extends Component {
	state = {
		childCount: 1
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				childCount: this.state.childCount + 1
			})
		}, 5000);
	}

	shouldComponentUpdate(nextProps, nextState) { // 다음 state 바뀌는 값을 알고 싶을 때?
		if (this.state.childCount !== nextState.childCount) {
			return true;
		}
		return false;
	}
	// shouldComponentUpdate() {  
	//     //return false; // 렌더링 되지 않으므로 업데이트가 되지 않는다. 
	// }

	render() {
		return <div>
			나는 Props를 받지 않습니다. {this.state.childCount}
		</div>
	}
}

export default ChildB;