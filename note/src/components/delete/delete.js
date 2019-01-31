import React, { Component } from 'react';
import './delete.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Delete extends Component {
  execute = () => {
    this.props.action(this.props.number);
    this.props.close();
  };

  render = () => (
    <>
      <div id="memo-what-for">
        <span>노트 삭제</span>
        <span onClick={this.props.close}><FontAwesomeIcon icon={faTimesCircle} size='3x'/></span>
      </div>
      <div><b>({this.props.title})</b> 노트를 삭제하시겠어요?</div>
      <div id="memo-button">
        <button onClick={this.execute}>삭제하기</button>
      </div>
    </>
  );
}

export default Delete;