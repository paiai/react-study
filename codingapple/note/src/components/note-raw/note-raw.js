import React, { Component } from 'react';
import './note-raw.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class NoteRaw extends Component {
  static defaultProps = {
    title: '',
    text: '',
    subject: '노트 작성',
    noteNumber: -1,
    action: () => console.log('Action is not exist'),
    close: () => console.log('Close is not exist'),
  };

  state = {
    title: this.props.title,
    text: this.props.text,
  };

  changeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  changeText = e => {
    this.setState({
      text: e.target.value
    });
  };

  execute = () => {
    this.props.action(this.state.title, this.state.text, this.props.noteNumber);
    this.props.close();
  };

  render = () => (
    <>
      <div id="note-what-for">
        <span>{this.props.subject}</span>
        <span onClick={this.props.close}><FontAwesomeIcon icon={faTimesCircle} size='3x'/></span>
      </div>
      <div id="note-form">
        <input
          id="note-title"
          name="title"
          type="text"
          placeholder="메모 제목 입력"
          value={this.state.title}
          onChange={this.changeTitle}
          className="radius"
        />
        <textarea
          id="note-text"
          name="text"
          placeholder="텍스트 입력"
          value={this.state.text}
          onChange={this.changeText}
          className="radius"
        />
      </div>
      <div id="add-or-change-note-button">
        <button onClick={this.execute}>작성하기</button>
      </div>
    </>
  );
}

export default NoteRaw