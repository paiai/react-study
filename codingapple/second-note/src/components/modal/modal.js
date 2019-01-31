import React from 'react';
import './modal.scss';

class ModalPage extends React.Component {
    render = () => {
        return (
            <div className="modal">
                <div className="modal-card">{this.props.children && this.props.children}</div>
            </div>
        );
        
    };
}

export default ModalPage