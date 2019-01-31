import React, { Component } from 'react';

class ChildA extends Component {
	shouldComponentUpdate(nextProps) {
		if (this.props == nextProps) {
			return false;
		}
		return true;
	}

	render() {
		return <div>
			나는 Props를 받았습니다. {this.props.count}
		</div>
	}
}

export default ChildA;