import React, { Component } from 'react';
import './note.scss';
import styled from 'styled-components';
import Modal from './../../modal/modal';
import NoteRaw from './../../note-raw/note-raw';
import Delete from '../../delete/delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const TitleSpan = styled.span`
  font-weight: bold;
`;

class Note extends Component {
  static defaultProps = {
    title: '',
    text: '',
    date: new Date()
  };

  state = {
    showEditModal: false,
    showDeleteModal: false,
  }

  changeEditToggle = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  };

  changeDeleteToggle = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  };

  render = () => (
    <div id="note">
      <div id="note-menu">
        <TitleSpan>{this.props.title}</TitleSpan>
        <span>
          <span id="showEditModal" onClick={this.changeEditToggle}><FontAwesomeIcon icon={faEdit} /></span>
          <span id="showDeleteModal" onClick={this.changeDeleteToggle}><FontAwesomeIcon icon={faTimesCircle} /></span>
        </span>
      </div>
      <div id="date">
        <span>
          {this.props.date.toISOString().slice(0, 10) + ' ' + this.props.date.toISOString().slice(11, 19)}
          {/* {this.props.edited && ' (edited)'} */}
        </span>
      </div>
      <div>{this.props.text}</div>

      {this.state.showEditModal && (
        <Modal>
          <NoteRaw
            noteNumber={this.props.noteNumber}
            action={this.props.changeNote}
            close={this.changeEditToggle}
            subject={'노트 수정'}
            title={this.props.title}
            text={this.props.text}
          />
        </Modal>
      )}

      {this.state.showDeleteModal && (
        <Modal
          close={() => {
            this.toggle({ target: { id: 'showDeleteModal' } });
          }}
        >
          <Delete
            number={this.props.noteNumber}
            action={this.props.deleteNote}
            title={this.props.title}
            close={this.changeDeleteToggle}
          />
        </Modal>
      )}
    </div>
  );
}

export default Note;


