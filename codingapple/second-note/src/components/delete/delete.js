import React from 'react';
import './delete.scss';
class Delete extends React.Component {

    execute = () => {
        this.props.action(this.props.noteNumber);
    }
    render() {
        return (
        <div id="memo-what-for">
            <span>노트 삭제</span>
        </div>
        <div>정말 노트를 삭제하시겠습니까 ({this.props.title})</div>

        <div id="memo">
            <button onClick={this.execute} >
        </div>
        )
        
    }
}

export default Delete;