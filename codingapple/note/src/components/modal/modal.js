import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
  render = () => {
    return (
      <div className="modal">
        <div className="modal-card">{this.props.children && this.props.children}</div>
      </div>
    );
  };
}

export default Modal;